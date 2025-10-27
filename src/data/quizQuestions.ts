export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Cạnh tranh giữa các doanh nghiệp trong nền kinh tế thị trường mang lại điều gì?",
    options: [
      "Doanh nghiệp được tự do định giá sản phẩm",
      "Khuyến khích sáng tạo và đổi mới công nghệ",
      "Tạo ra các thị trường độc quyền nhỏ",
      "Thúc đẩy sự can thiệp của nhà nước vào kinh tế"
    ],
    correctAnswer: 1,
    explanation: "Cạnh tranh thúc đẩy các doanh nghiệp sáng tạo, đổi mới công nghệ, giúp nâng cao chất lượng sản phẩm và giảm giá thành."
  },
  {
    id: 2,
    question: "Nguyên nhân nào không phải là nguyên nhân hình thành độc quyền?",
    options: [
      "Các doanh nghiệp nhỏ liên kết lại để tồn tại",
      "Do khoa học công nghệ tiến bộ làm các doanh nghiệp lớn mạnh",
      "Sự can thiệp mạnh mẽ của nhà nước vào nền kinh tế",
      "Cạnh tranh giữa các doanh nghiệp trong cùng ngành"
    ],
    correctAnswer: 2,
    explanation: "Khoa học công nghệ tiến bộ có thể giúp các doanh nghiệp lớn mạnh, nhưng không phải nguyên nhân dẫn đến độc quyền."
  },
  {
    id: 3,
    question: "Trong nền kinh tế thị trường, điều gì xảy ra khi một doanh nghiệp độc quyền kiểm soát toàn bộ ngành hàng?",
    options: [
      "Doanh nghiệp có thể điều chỉnh giá cả và sản lượng theo ý muốn",
      "Giá cả giảm và chất lượng sản phẩm được cải thiện",
      "Thị trường sẽ có sự cạnh tranh mạnh mẽ hơn",
      "Người tiêu dùng có quyền quyết định giá cả"
    ],
    correctAnswer: 0,
    explanation: "Khi một doanh nghiệp độc quyền chiếm lĩnh thị trường, họ có quyền kiểm soát giá cả và sản lượng, vì không có đối thủ cạnh tranh."
  },
  {
    id: 4,
    question: "Độc quyền nhà nước thường xuất hiện trong các ngành nào?",
    options: [
      "Ngành công nghiệp nhẹ",
      "Ngành công nghiệp nặng và các dịch vụ công cộng",
      "Ngành bán lẻ",
      "Ngành công nghệ thông tin"
    ],
    correctAnswer: 1,
    explanation: "Các ngành công nghiệp nặng như điện lực, đường sắt, dầu khí thường được nhà nước nắm giữ độc quyền vì yêu cầu vốn đầu tư lớn và tính chất quan trọng của các ngành này."
  },
  {
    id: 5,
    question: "Điều gì xảy ra khi nhà nước can thiệp vào một tổ chức độc quyền?",
    options: [
      "Tổ chức độc quyền sẽ tự động giảm giá sản phẩm",
      "Nhà nước có thể điều chỉnh mức giá và bảo vệ quyền lợi người tiêu dùng",
      "Các doanh nghiệp nhỏ sẽ phát triển mạnh mẽ hơn",
      "Tổ chức độc quyền sẽ trở thành một tổ chức quốc tế"
    ],
    correctAnswer: 1,
    explanation: "Khi nhà nước can thiệp vào tổ chức độc quyền, họ có thể điều chỉnh giá cả và các quy định, giúp bảo vệ quyền lợi người tiêu dùng và duy trì sự ổn định của thị trường."
  },
  {
    id: 6,
    question: "Cạnh tranh trong nền kinh tế độc quyền có thể dẫn đến điều gì?",
    options: [
      "Tăng trưởng bền vững cho các doanh nghiệp nhỏ",
      "Các doanh nghiệp độc quyền đầu tư vào công nghệ mới",
      "Sự gia tăng sự phân hóa giàu nghèo",
      "Nền kinh tế không còn sự biến động"
    ],
    correctAnswer: 2,
    explanation: "Cạnh tranh trong nền kinh tế độc quyền có thể dẫn đến sự gia tăng phân hóa giàu nghèo, khi lợi nhuận tập trung vào các tập đoàn lớn."
  },
  {
    id: 7,
    question: "Một tác động tiêu cực của độc quyền là gì?",
    options: [
      "Giá cả hàng hóa ổn định và phù hợp với nhu cầu thị trường",
      "Tăng cường nghiên cứu và phát triển công nghệ",
      "Thiếu sự đổi mới và sáng tạo trong các sản phẩm",
      "Giảm thiểu bất bình đẳng xã hội"
    ],
    correctAnswer: 2,
    explanation: "Do không có sự cạnh tranh, doanh nghiệp độc quyền ít có động lực để đổi mới và sáng tạo, dẫn đến sản phẩm ít cải tiến."
  },
  {
    id: 8,
    question: "Trong mô hình chủ nghĩa tư bản độc quyền nhà nước, điều gì là đặc trưng?",
    options: [
      "Nhà nước hoàn toàn không tham gia vào nền kinh tế",
      "Doanh nghiệp tư nhân chiếm ưu thế tuyệt đối",
      "Nhà nước và doanh nghiệp lớn phối hợp điều hành nền kinh tế",
      "Thị trường hoàn toàn tự do và không có sự can thiệp của nhà nước"
    ],
    correctAnswer: 2,
    explanation: "Chủ nghĩa tư bản độc quyền nhà nước là sự kết hợp giữa nhà nước và các tổ chức độc quyền tư nhân, trong đó nhà nước tham gia điều hành nền kinh tế."
  },
  {
    id: 9,
    question: "Đâu là một tác động tích cực của chủ nghĩa tư bản độc quyền nhà nước?",
    options: [
      "Tạo ra sự cạnh tranh công bằng hơn",
      "Tăng cường đầu tư vào các ngành chiến lược của quốc gia",
      "Giảm thiểu sự phân hóa trong xã hội",
      "Tăng giá trị lợi nhuận cho các doanh nghiệp nhỏ"
    ],
    correctAnswer: 1,
    explanation: "Chủ nghĩa tư bản độc quyền nhà nước giúp tập trung vốn vào các ngành chiến lược, giúp phát triển các ngành quan trọng như năng lượng, giao thông."
  },
  {
    id: 10,
    question: "Khi một quốc gia chuyển sang chủ nghĩa tư bản độc quyền nhà nước, điều gì thường xảy ra?",
    options: [
      "Nền kinh tế trở nên tự do và không bị kiểm soát",
      "Nhà nước trở thành người kiểm soát chính các nguồn tài nguyên và ngành kinh tế chủ chốt",
      "Doanh nghiệp tư nhân bị loại bỏ hoàn toàn",
      "Cạnh tranh tự do được khuyến khích"
    ],
    correctAnswer: 1,
    explanation: "Trong chủ nghĩa tư bản độc quyền nhà nước, nhà nước kiểm soát các ngành quan trọng của nền kinh tế, nhằm bảo vệ lợi ích quốc gia và giữ sự ổn định."
  },
  {
    id: 11,
    question: "Điều nào sau đây không phải là đặc điểm của độc quyền nhà nước?",
    options: [
      "Nhà nước chi phối các ngành then chốt của nền kinh tế",
      "Doanh nghiệp tư nhân không thể gia nhập ngành độc quyền",
      "Cạnh tranh giữa các doanh nghiệp lớn có thể bị hạn chế",
      "Tất cả các ngành trong nền kinh tế đều được nhà nước quản lý trực tiếp"
    ],
    correctAnswer: 3,
    explanation: "Không phải tất cả các ngành đều thuộc quyền quản lý của nhà nước, chỉ các ngành then chốt như năng lượng, giao thông, viễn thông là thuộc độc quyền nhà nước."
  },
  {
    id: 12,
    question: "Một tác động tích cực của độc quyền nhà nước đối với nền kinh tế là gì?",
    options: [
      "Giảm bớt sự can thiệp của các quốc gia khác vào thị trường trong nước",
      "Giảm chi phí sản xuất trong tất cả các ngành",
      "Khuyến khích đầu tư vào các ngành cần thiết cho sự phát triển quốc gia",
      "Thúc đẩy sự ra đời của các doanh nghiệp lớn"
    ],
    correctAnswer: 2,
    explanation: "Nhà nước có thể đầu tư vào các ngành chiến lược cần thiết cho sự phát triển quốc gia, như năng lượng, giao thông, và công nghệ."
  }
];
