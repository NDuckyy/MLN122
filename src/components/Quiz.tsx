import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Clock,
  Trophy,
  ArrowLeft,
  RotateCcw,
  Award,
} from "lucide-react";
import { quizQuestions } from "../data/quizQuestions";
import { supabase, QuizResult } from "../lib/supabase";

interface QuizProps {
  onBack: () => void;
}

interface Answer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export default function Quiz({ onBack }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [quizStartTime, setQuizStartTime] = useState(Date.now());
  const [userName, setUserName] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);
  const [leaderboard, setLeaderboard] = useState<QuizResult[]>([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showConfettiOverlay, setShowConfettiOverlay] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;

    // Start the ticking only while the quiz is active (not on name input or results)
    if (!showNameInput && !showResult) {
      // quiz running: keep ticking
      timer = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - quizStartTime) / 1000));
      }, 1000);
    } else if (showNameInput) {
      // when entering the name input screen, snapshot the elapsed seconds
      setTimeElapsed(Math.floor((Date.now() - quizStartTime) / 1000));
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [quizStartTime, showNameInput, showResult]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (showExplanation) return;
    setSelectedOption(optionIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;

    const question = quizQuestions[currentQuestion];
    const isCorrect = selectedOption === question.correctAnswer;

    setAnswers([
      ...answers,
      {
        questionId: question.id,
        selectedAnswer: selectedOption,
        isCorrect,
      },
    ]);

    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setShowNameInput(true);
    }
  };

  const calculateScore = () => {
    const correctAnswers = answers.filter((a) => a.isCorrect).length;
    return Math.round((correctAnswers / quizQuestions.length) * 100);
  };

  const saveResult = async () => {
    if (isSaving) return; // prevent duplicate submissions

    if (!userName.trim()) {
      alert("Vui lòng nhập tên của bạn!");
      return;
    }
    setIsSaving(true);

    const correctAnswers = answers.filter((a) => a.isCorrect).length;
    const score = calculateScore();

    const result: QuizResult = {
      user_name: userName.trim(),
      score,
      total_questions: quizQuestions.length,
      correct_answers: correctAnswers,
      time_taken: timeElapsed,
    };

    const { error } = await supabase.from("quiz_results").insert([result]);

    if (error) {
      console.error("Error saving result:", error);
    }

    // update UI immediately to results view and then refresh leaderboard
    setShowNameInput(false);
    // ensure displayed time matches what we saved to the DB
    setTimeElapsed(result.time_taken);
    setShowResult(true);
    await loadLeaderboard();
    setIsSaving(false);
  };

  const loadLeaderboard = async () => {
    const { data, error } = await supabase
      .from("quiz_results")
      .select("*")
      .order("score", { ascending: false })
      .order("time_taken", { ascending: true })
      .limit(10);

    if (!error && data) {
      setLeaderboard(data);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
    setShowExplanation(false);
    setUserName("");
    setShowLeaderboard(false);
    // reset timer
    setQuizStartTime(Date.now());
    setTimeElapsed(0);
    setShowNameInput(false);
  };

  // trigger confetti via canvas-confetti if available, and show decorative overlay
  const triggerConfetti = async () => {
    try {
      const confettiModule = await import("canvas-confetti");
      const confetti =
        (confettiModule && (confettiModule as any).default) || confettiModule;

      // a few bursts
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
      });
      setTimeout(
        () =>
          confetti({
            particleCount: 40,
            spread: 100,
            scalar: 0.9,
            origin: { x: 0.1, y: 0.3 },
          }),
        250
      );
      setTimeout(
        () =>
          confetti({
            particleCount: 40,
            spread: 100,
            scalar: 0.9,
            origin: { x: 0.9, y: 0.3 },
          }),
        400
      );
    } catch (e) {
      // module not installed or failed; ignore and allow CSS overlay fallback
      // console.warn('confetti lib not available', e);
    }
  };

  // show overlay stars when results are shown
  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | null = null;
    if (showResult) {
      triggerConfetti();
      setShowConfettiOverlay(true);
      t = setTimeout(() => setShowConfettiOverlay(false), 4800);
    }
    return () => {
      if (t) clearTimeout(t);
    };
  }, [showResult]);

  const correctAnswers = answers.filter((a) => a.isCorrect).length;
  const score = calculateScore();
  const question = quizQuestions[currentQuestion];

  if (showNameInput) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 animate-fade-in">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <Award className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Hoàn thành!
              </h2>
              <p className="text-slate-600">Nhập tên của bạn để lưu kết quả</p>
            </div>

            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Nhập tên của bạn"
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none mb-6"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  saveResult();
                }
              }}
              disabled={isSaving}
            />

            <button
              onClick={saveResult}
              disabled={isSaving}
              className={`w-full text-white py-3 rounded-lg font-semibold transition-colors ${
                isSaving
                  ? "bg-slate-300 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-700"
              }`}
            >
              {isSaving ? "Đang lưu..." : "Lưu kết quả"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 animate-fade-in">
        {showConfettiOverlay && (
          <div className="confetti-overlay" aria-hidden>
            {Array.from({ length: 24 }).map((_, i) => {
              const left = Math.round(Math.random() * 10000) / 100;
              const delay = Math.round(Math.random() * 600);
              const dur = Math.round(1400 + Math.random() * 2600);
              return (
                <span
                  key={i}
                  className="confetti-star"
                  style={{
                    left: `${left}%`,
                    animationDelay: `${delay}ms`,
                    ["--dur" as any]: `${dur}ms`,
                  }}
                />
              );
            })}
          </div>
        )}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 animate-scale-in">
            <div className="text-center mb-8">
              <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Kết quả của bạn
              </h2>
              <p className="text-lg text-slate-600">Chúc mừng {userName}!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {score}%
                </div>
                <div className="text-slate-600">Điểm số</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {correctAnswers}/{quizQuestions.length}
                </div>
                <div className="text-slate-600">Câu đúng</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {formatTime(timeElapsed)}
                </div>
                <div className="text-slate-600">Thời gian</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {quizQuestions.map((q, index) => {
                const answer = answers[index];
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border-2 ${
                      answer.isCorrect
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-red-500 bg-red-50"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {answer.isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 mb-2">
                          Câu {index + 1}: {q.question}
                        </p>
                        {!answer.isCorrect && (
                          <p className="text-sm text-slate-600">
                            <span className="font-semibold">Đáp án đúng:</span>{" "}
                            {q.options[q.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowLeaderboard(!showLeaderboard)}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Trophy className="w-5 h-5" />
                <span>
                  {showLeaderboard ? "Ẩn bảng xếp hạng" : "Xem bảng xếp hạng"}
                </span>
              </button>

              <button
                onClick={restartQuiz}
                className="flex-1 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Làm lại</span>
              </button>

              <button
                onClick={onBack}
                className="flex-1 bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Trang chủ</span>
              </button>
            </div>
          </div>

          {showLeaderboard && leaderboard.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Bảng xếp hạng Top 10
              </h3>
              <div className="space-y-3">
                {leaderboard.map((result, index) => (
                  <div
                    key={result.id}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      index === 0
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white"
                        : index === 1
                        ? "bg-gradient-to-r from-slate-300 to-slate-400 text-slate-800"
                        : index === 2
                        ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white"
                        : "bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold w-8">{index + 1}</div>
                      <div>
                        <div className="font-semibold">{result.user_name}</div>
                        <div className="text-sm opacity-75">
                          {result.correct_answers}/{result.total_questions} câu
                          đúng · {formatTime(result.time_taken)}
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold">{result.score}%</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-scale-in">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Trang chủ</span>
            </button>

            <div className="flex items-center space-x-2 text-slate-600">
              <Clock className="w-5 h-5" />
              <span className="font-mono font-semibold">
                {formatTime(timeElapsed)}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-slate-800">
                Câu {currentQuestion + 1} / {quizQuestions.length}
              </span>
              <span className="text-sm text-slate-600">
                {correctAnswers} / {answers.length} đúng
              </span>
            </div>

            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-300"
                style={{
                  width: `${
                    ((currentQuestion + 1) / quizQuestions.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = index === question.correctAnswer;
                const showCorrect = showExplanation && isCorrect;
                const showIncorrect =
                  showExplanation && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    disabled={showExplanation}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showCorrect
                        ? "border-emerald-500 bg-emerald-50"
                        : showIncorrect
                        ? "border-red-500 bg-red-50"
                        : isSelected
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-slate-300 hover:border-emerald-300 bg-white"
                    } ${
                      showExplanation ? "cursor-not-allowed" : "cursor-pointer"
                    } ${isSelected ? "animate-pop" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-slate-800">{option}</span>
                      {showCorrect && (
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                      )}
                      {showIncorrect && (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {showExplanation && (
            <div className="mb-6 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-2">Giải thích:</h3>
              <p className="text-blue-800 leading-relaxed">
                {question.explanation}
              </p>
            </div>
          )}

          <div className="flex gap-4">
            {!showExplanation ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${
                  selectedOption === null
                    ? "bg-slate-300 cursor-not-allowed"
                    : "bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg"
                }`}
              >
                Xác nhận
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="w-full py-4 rounded-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg transition-all"
              >
                {currentQuestion < quizQuestions.length - 1
                  ? "Câu tiếp theo"
                  : "Hoàn thành"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
