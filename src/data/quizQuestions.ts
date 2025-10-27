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
    question: "Cạnh tranh trong nền kinh tế thị trường là gì?",
    options: [
      "Sự hợp tác giữa các doanh nghiệp",
      "Sự ganh đua giữa các chủ thể kinh tế để giành lấy điều kiện thuận lợi",
      "Sự độc quyền của một doanh nghiệp",
      "Sự can thiệp của nhà nước vào thị trường"
    ],
    correctAnswer: 1,
    explanation: "Cạnh tranh là sự ganh đua giữa các chủ thể kinh tế trong quá trình sản xuất, tiêu thụ hàng hóa nhằm giành lấy các điều kiện thuận lợi về thị trường, lợi nhuận và nguồn lực."
  },
  {
    id: 2,
    question: "Độc quyền là trạng thái như thế nào?",
    options: [
      "Nhiều doanh nghiệp nhỏ cạnh tranh với nhau",
      "Một hoặc một nhóm doanh nghiệp lớn chiếm lĩnh phần lớn thị trường",
      "Thị trường hoàn toàn tự do",
      "Nhà nước quản lý toàn bộ thị trường"
    ],
    correctAnswer: 1,
    explanation: "Độc quyền là trạng thái khi một hoặc một nhóm doanh nghiệp lớn chiếm lĩnh phần lớn thị trường, kiểm soát giá cả, sản lượng và nguồn cung."
  },
  {
    id: 3,
    question: "Nguyên nhân nào KHÔNG phải là nguyên nhân hình thành độc quyền?",
    options: [
      "Phát triển lực lượng sản xuất",
      "Cạnh tranh gay gắt",
      "Tăng số lượng doanh nghiệp nhỏ",
      "Khủng hoảng kinh tế"
    ],
    correctAnswer: 2,
    explanation: "Tăng số lượng doanh nghiệp nhỏ không phải là nguyên nhân hình thành độc quyền. Ngược lại, độc quyền thường hình thành khi các doanh nghiệp nhỏ bị loại bỏ hoặc sáp nhập."
  },
  {
    id: 4,
    question: "Ví dụ nào sau đây minh họa cho sự hình thành độc quyền do cạnh tranh gay gắt?",
    options: [
      "Toyota phát triển công nghệ mới",
      "Các ngân hàng nhỏ sáp nhập để tăng năng lực cạnh tranh",
      "Nhà nước đầu tư vào ngành điện lực",
      "Samsung mở rộng thị trường quốc tế"
    ],
    correctAnswer: 1,
    explanation: "Các ngân hàng nhỏ sáp nhập là ví dụ điển hình cho việc các doanh nghiệp nhỏ phải liên kết để tồn tại trước cạnh tranh gay gắt, dẫn đến hình thành tổ chức độc quyền lớn hơn."
  },
  {
    id: 5,
    question: "Độc quyền nhà nước là gì?",
    options: [
      "Nhà nước cấm tất cả doanh nghiệp tư nhân",
      "Nhà nước nắm giữ vị thế độc quyền và chi phối các ngành then chốt",
      "Nhà nước không can thiệp vào kinh tế",
      "Nhà nước chỉ thu thuế"
    ],
    correctAnswer: 1,
    explanation: "Độc quyền nhà nước là hình thức nhà nước nắm giữ vị thế độc quyền, trực tiếp hoặc gián tiếp chi phối các ngành, lĩnh vực then chốt của nền kinh tế."
  },
  {
    id: 6,
    question: "Ngành nào sau đây thường thuộc độc quyền nhà nước do đòi hỏi vốn đầu tư lớn?",
    options: [
      "Cửa hàng tạp hóa",
      "Điện lực, đường sắt, dầu khí",
      "Quán ăn nhỏ",
      "Cửa hàng thời trang"
    ],
    correctAnswer: 1,
    explanation: "Các ngành như điện lực, đường sắt, dầu khí đòi hỏi vốn đầu tư lớn và thời gian thu hồi dài, nên thường được nhà nước tham gia hoặc độc quyền để đảm bảo phát triển ổn định."
  },
  {
    id: 7,
    question: "Tác động TÍCH CỰC nào của độc quyền là ĐÚNG?",
    options: [
      "Giá cả hàng hóa tăng cao",
      "Thúc đẩy nghiên cứu và phát triển công nghệ",
      "Gia tăng phân hóa giàu nghèo",
      "Kìm hãm tiến bộ kỹ thuật"
    ],
    correctAnswer: 1,
    explanation: "Do có nguồn vốn lớn, doanh nghiệp độc quyền có thể đầu tư mạnh vào nghiên cứu và phát triển công nghệ, đây là một tác động tích cực."
  },
  {
    id: 8,
    question: "Tác động TIÊU CỰC nào của độc quyền ảnh hưởng đến người tiêu dùng?",
    options: [
      "Tăng năng suất lao động",
      "Thúc đẩy đổi mới công nghệ",
      "Giá cả hàng hóa bị đẩy lên cao do thiếu cạnh tranh",
      "Tạo sức mạnh kinh tế quốc gia"
    ],
    correctAnswer: 2,
    explanation: "Khi thiếu cạnh tranh, doanh nghiệp độc quyền có thể đẩy giá cả hàng hóa lên cao, gây thiệt hại cho người tiêu dùng."
  },
  {
    id: 9,
    question: "Quan hệ cạnh tranh nào tồn tại trong trạng thái độc quyền?",
    options: [
      "Chỉ có độc quyền với độc quyền",
      "Chỉ có độc quyền với xí nghiệp nhỏ",
      "Cả ba loại: độc quyền với độc quyền, độc quyền với xí nghiệp nhỏ, và nội bộ độc quyền",
      "Không có cạnh tranh"
    ],
    correctAnswer: 2,
    explanation: "Trong trạng thái độc quyền vẫn tồn tại cạnh tranh ở ba cấp độ: giữa các tổ chức độc quyền với nhau, giữa độc quyền với doanh nghiệp ngoài độc quyền, và cạnh tranh nội bộ trong tổ chức độc quyền."
  },
  {
    id: 10,
    question: "Ví dụ nào sau đây minh họa cho cạnh tranh giữa các tổ chức độc quyền?",
    options: [
      "Một cửa hàng nhỏ bán hàng",
      "Apple cạnh tranh với Samsung",
      "Một nông dân bán rau",
      "Một quán cà phê nhỏ"
    ],
    correctAnswer: 1,
    explanation: "Apple và Samsung là hai tập đoàn công nghệ lớn (độc quyền) cạnh tranh với nhau ở quy mô toàn cầu, đây là ví dụ điển hình cho cạnh tranh giữa các tổ chức độc quyền."
  },
  {
    id: 11,
    question: "Bản chất của chủ nghĩa tư bản độc quyền nhà nước là gì?",
    options: [
      "Nhà nước kiểm soát hoàn toàn mọi hoạt động kinh tế",
      "Sự kết hợp giữa nhà nước tư sản và các tổ chức độc quyền tư nhân",
      "Loại bỏ hoàn toàn khu vực tư nhân",
      "Thị trường hoàn toàn tự do không có sự can thiệp"
    ],
    correctAnswer: 1,
    explanation: "Chủ nghĩa tư bản độc quyền nhà nước là sự kết hợp chặt chẽ giữa nhà nước tư sản và các tổ chức độc quyền tư nhân về mặt kinh tế và chính trị."
  },
  {
    id: 12,
    question: "Tại sao độc quyền có thể kìm hãm tiến bộ kỹ thuật?",
    options: [
      "Do không có nguồn vốn đầu tư",
      "Do pháp luật cấm đổi mới",
      "Do không còn đối thủ cạnh tranh, doanh nghiệp có xu hướng trì trệ",
      "Do người lao động không có kỹ năng"
    ],
    correctAnswer: 2,
    explanation: "Khi không còn đối thủ cạnh tranh, doanh nghiệp độc quyền thiếu động lực để đổi mới và có xu hướng trì trệ, ít đầu tư vào tiến bộ kỹ thuật."
  }
];
