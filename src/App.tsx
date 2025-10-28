import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Target,
  TrendingUp,
  Scale,
  AlertCircle,
  CheckCircle,
  Brain,
  Trophy,
} from "lucide-react";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setActiveSection] = useState<string>("");
  const [showQuiz, setShowQuiz] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  if (showQuiz) {
    return <Quiz onBack={() => setShowQuiz(false)} />;
  }

  if (showLeaderboard) {
    return <Leaderboard onBack={() => setShowLeaderboard(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-header shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-md">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">
                Kinh Tế Thị Trường
              </span>
            </div>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex space-x-8 animate-fade-in"
              style={{ animationDelay: "80ms" }}
            >
              <button
                onClick={() => scrollToSection("gioi-thieu")}
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Giới thiệu
              </button>
              <button
                onClick={() => scrollToSection("canh-tranh")}
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Cạnh tranh
              </button>
              <button
                onClick={() => scrollToSection("doc-quyen")}
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Độc quyền
              </button>
              <button
                onClick={() => scrollToSection("tac-dong")}
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Tác động
              </button>
              <button
                onClick={() => setShowQuiz(true)}
                className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                <Brain className="w-5 h-5" />
                <span>Kiểm tra</span>
              </button>
              <button
                onClick={() => setShowLeaderboard(true)}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Trophy className="w-5 h-5" />
                <span>Bảng xếp hạng</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t">
              <button
                onClick={() => scrollToSection("gioi-thieu")}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Giới thiệu
              </button>
              <button
                onClick={() => scrollToSection("canh-tranh")}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Cạnh tranh
              </button>
              <button
                onClick={() => scrollToSection("doc-quyen")}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Độc quyền
              </button>
              <button
                onClick={() => scrollToSection("tac-dong")}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Tác động
              </button>
              <button
                onClick={() => {
                  setShowQuiz(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                <Brain className="w-5 h-5" />
                <span>Kiểm tra kiến thức</span>
              </button>
              <button
                onClick={() => {
                  setShowLeaderboard(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Trophy className="w-5 h-5" />
                <span>Bảng xếp hạng</span>
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20 animate-fade-in">
        {/* decorative blobs */}
        <div className="bg-blob blob-1" aria-hidden />
        <div className="bg-blob blob-2" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in"
              style={{ animationDelay: "40ms" }}
            >
              Cạnh tranh và Độc quyền
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-emerald-50 max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "80ms" }}
            >
              Trong Nền Kinh Tế Thị Trường
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("gioi-thieu")}
                className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 animate-fade-in"
                style={{ animationDelay: "120ms" }}
              >
                Khám phá ngay
                <ChevronDown className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => setShowQuiz(true)}
                className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 animate-fade-in"
                style={{ animationDelay: "160ms" }}
              >
                <Brain className="mr-2 w-5 h-5" />
                Làm quiz ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="gioi-thieu" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Khái niệm cơ bản
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: "40ms" }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 p-3 rounded-full flex-shrink-0 animate-float">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Cạnh tranh
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Là sự ganh đua giữa các chủ thể kinh tế (cá nhân, doanh
                    nghiệp, tổ chức) trong quá trình sản xuất, tiêu thụ hàng
                    hóa, dịch vụ — nhằm giành lấy các điều kiện thuận lợi về thị
                    trường, lợi nhuận và nguồn lực.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: "80ms" }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-full flex-shrink-0 animate-float">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Độc quyền
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Là trạng thái khi một hoặc một nhóm doanh nghiệp lớn chiếm
                    lĩnh phần lớn thị trường, kiểm soát giá cả, sản lượng và
                    nguồn cung, từ đó thu lợi nhuận độc quyền cao.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Causes Section */}
      <section id="canh-tranh" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Nguyên nhân hình thành độc quyền
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
                Phát triển lực lượng sản xuất
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Khi khoa học – kỹ thuật tiến bộ, các doanh nghiệp có quy mô lớn
                và công nghệ hiện đại xuất hiện.
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>Ví dụ:</strong> General Electric, Toyota, Samsung có
                  khả năng kiểm soát thị trường.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
                Cạnh tranh gay gắt
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Doanh nghiệp nhỏ yếu thế bị loại khỏi thị trường hoặc buộc phải
                liên kết, sáp nhập để tồn tại.
              </p>
              <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>Ví dụ:</strong> Các ngân hàng nhỏ sáp nhập để tăng
                  năng lực cạnh tranh.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
                Khủng hoảng kinh tế
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Khủng hoảng làm nhiều doanh nghiệp nhỏ phá sản, trong khi doanh
                nghiệp lớn mua lại, hợp nhất sản xuất.
              </p>
              <div className="mt-4 p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>Kết quả:</strong> Tập trung sản xuất và tư bản, hình
                  thành tổ chức độc quyền.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State Monopoly Section */}
      <section id="doc-quyen" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Scale className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Độc quyền nhà nước
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Hình thức nhà nước nắm giữ vị thế độc quyền, trực tiếp hoặc gián
              tiếp chi phối các ngành, lĩnh vực then chốt của nền kinh tế
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-12 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Nguyên nhân hình thành
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    Tích tụ và tập trung tư bản cao
                  </h4>
                  <p className="text-slate-600">
                    Khi quy mô sản xuất vượt quá khả năng điều tiết của thị
                    trường tự do → cần sự quản lý, điều tiết của Nhà nước.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    Phân công lao động xã hội phát triển
                  </h4>
                  <p className="text-slate-600">
                    Xuất hiện các ngành đòi hỏi vốn đầu tư lớn, thời gian thu
                    hồi dài (điện lực, đường sắt, dầu khí...). Nhà nước tham gia
                    để đảm bảo phát triển ổn định.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    Đấu tranh giai cấp và mâu thuẫn xã hội
                  </h4>
                  <p className="text-slate-600">
                    Để bảo vệ lợi ích của giai cấp tư sản, Nhà nước tư sản kết
                    hợp với các tổ chức độc quyền, tạo nên liên minh tư bản –
                    nhà nước.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    Mở rộng quan hệ kinh tế đối ngoại
                  </h4>
                  <p className="text-slate-600">
                    Nhà nước tham gia bảo hộ doanh nghiệp trong nước, tạo điều
                    kiện cho tư bản phát triển ra quốc tế.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="tac-dong" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Tác động của độc quyền
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Positive Impacts */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white">
                    Tác động tích cực
                  </h3>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-bold text-slate-800 mb-2">
                    Thúc đẩy R&D
                  </h4>
                  <p className="text-slate-600">
                    Do có nguồn vốn lớn, doanh nghiệp độc quyền có thể đầu tư
                    mạnh vào đổi mới công nghệ.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-bold text-slate-800 mb-2">
                    Tăng năng suất lao động
                  </h4>
                  <p className="text-slate-600">
                    Các doanh nghiệp lớn có thể tối ưu hóa sản xuất, giảm chi
                    phí đơn vị sản phẩm.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-bold text-slate-800 mb-2">
                    Tạo sức mạnh kinh tế quốc gia
                  </h4>
                  <p className="text-slate-600">
                    Thúc đẩy phát triển các ngành chiến lược (năng lượng, viễn
                    thông, công nghiệp nặng).
                  </p>
                </div>
              </div>
            </div>

            {/* Negative Impacts */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white">
                    Tác động tiêu cực
                  </h3>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-slate-800 mb-2">
                    Thiệt hại cho người tiêu dùng
                  </h4>
                  <p className="text-slate-600">
                    Giá cả hàng hóa bị đẩy lên cao do thiếu cạnh tranh.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-slate-800 mb-2">
                    Kìm hãm tiến bộ kỹ thuật
                  </h4>
                  <p className="text-slate-600">
                    Khi không còn đối thủ, doanh nghiệp độc quyền có xu hướng
                    trì trệ, ít đổi mới.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-slate-800 mb-2">
                    Gia tăng phân hóa giàu nghèo
                  </h4>
                  <p className="text-slate-600">
                    Lợi nhuận tập trung vào một số ít tập đoàn và cá nhân, làm
                    sâu sắc thêm bất bình đẳng xã hội.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Relations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Quan hệ cạnh tranh trong trạng thái độc quyền
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">↔</span>
                </div>
                <h4 className="font-bold text-slate-800">
                  Độc quyền ↔ Xí nghiệp nhỏ
                </h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Các doanh nghiệp nhỏ vẫn tìm cách tồn tại, cạnh tranh bằng giá,
                chất lượng, hoặc đổi mới sản phẩm.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">⚔</span>
                </div>
                <h4 className="font-bold text-slate-800">
                  Độc quyền ↔ Độc quyền
                </h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cạnh tranh giữa các "ông lớn" ở quy mô toàn cầu. Ví dụ: Apple ↔
                Samsung; Boeing ↔ Airbus.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">⇄</span>
                </div>
                <h4 className="font-bold text-slate-800">Nội bộ độc quyền</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Các chi nhánh, phòng ban, công ty con vẫn cạnh tranh về lợi
                nhuận, thị phần, đổi mới công nghệ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Kết luận</h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-100">
              <p>
                Cạnh tranh và độc quyền là hai mặt tồn tại song song trong nền
                kinh tế thị trường.
              </p>
              <p>
                Độc quyền nhà nước là sự kết hợp giữa quyền lực chính trị và sức
                mạnh kinh tế, vừa mang tính tích cực, vừa tiềm ẩn nguy cơ lệch
                lạc nếu không kiểm soát tốt.
              </p>
              <p>
                Trong bối cảnh hiện đại, chủ nghĩa tư bản độc quyền nhà nước
                tiếp tục biến đổi, thích nghi, và mở rộng tầm ảnh hưởng toàn
                cầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Target className="w-6 h-6 text-emerald-500" />
              <span className="text-lg font-semibold text-white">
                Kinh Tế Thị Trường
              </span>
            </div>
            <p className="text-sm">
              Tài liệu học tập về cạnh tranh và độc quyền trong nền kinh tế thị
              trường
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
