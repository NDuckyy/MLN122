import { useEffect, useState } from "react";
import { ArrowLeft, Trophy } from "lucide-react";
import { supabase, QuizResult } from "../lib/supabase";

interface LeaderboardProps {
  onBack: () => void;
}

export default function Leaderboard({ onBack }: LeaderboardProps) {
  const [entries, setEntries] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("quiz_results")
      .select("*")
      .order("score", { ascending: false })
      .order("time_taken", { ascending: true })
      .limit(50);

    if (error) {
      console.error("Error loading leaderboard", error);
      setEntries([]);
    } else if (data) {
      setEntries(data as QuizResult[]);
    }

    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Quay lại</span>
            </button>
            <div className="text-center">
              <Trophy className="w-10 h-10 text-yellow-500 mx-auto mb-1" />
              <h2 className="text-2xl font-bold">Bảng xếp hạng</h2>
            </div>
            <div style={{ width: 48 }} />
          </div>

          {loading ? (
            <div className="text-center text-slate-600 py-8">Đang tải...</div>
          ) : entries.length === 0 ? (
            <div className="text-center text-slate-600 py-8">
              Chưa có kết quả nào.
            </div>
          ) : (
            <div className="space-y-3">
              {entries.map((r, idx) => (
                <div
                  key={r.id}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    idx === 0
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white"
                      : idx === 1
                      ? "bg-gradient-to-r from-slate-300 to-slate-400 text-slate-800"
                      : idx === 2
                      ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white"
                      : "bg-slate-50"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold w-8">{idx + 1}</div>
                    <div>
                      <div className="font-semibold">{r.user_name}</div>
                      <div className="text-sm opacity-75">
                        {r.correct_answers}/{r.total_questions} ·{" "}
                        {formatTime(r.time_taken)}
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">{r.score}%</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
