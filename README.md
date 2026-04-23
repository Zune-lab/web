🌊 Dive Into The Unknown - Interactive Ocean Exploration
Một trang web trải nghiệm tương tác điện ảnh (Cinematic Interactive Experience) đưa người dùng lặn sâu qua các tầng của đại dương, khám phá những sinh vật kỳ bí và giải mã các bí ẩn của vực thẳm. Dự án kết hợp giữa GSAP Animations, Scroll-based Storytelling và hệ thống AI Assistant tích hợp.

🚀 Tính năng nổi bật
1. Trải nghiệm lặn biển Cinematic (Smooth Scrolling)
Scale độ sâu phi tuyến tính: Áp dụng thuật toán bẻ cong không gian, ưu tiên diện tích hiển thị cho các vùng nước nông giàu sinh vật và nén các vùng rãnh sâu để tối ưu trải nghiệm người dùng.

Hiệu ứng môi trường động:

Marine Snow (Tuyết biển): Độ dày và độ sáng của các hạt hạt lơ lửng tăng dần theo độ sâu.

Dynamic Light Rays (God Rays): Hệ thống tia sáng mặt trời xuyên qua làn nước được mô phỏng sống động dưới mặt nước.

Smooth Color Blending: Nền biển tự động chuyển màu mượt mà từ xanh lơ (mặt nước) sang đỏ nguy hiểm (1000m) và tím rãnh sâu (11000m) dựa trên tọa độ cuộn.

2. Bách khoa toàn thư sinh vật biển (60+ Loài)
Hệ thống thẻ kính (Glassmorphism): Các thẻ thông tin được thiết kế hiện đại với hiệu ứng mờ đục và phát sáng theo vùng độ sâu (Glow-deep, Glow-abyss, Glow-hadal).

Thuật toán Dò tìm Ảnh thông minh: Hệ thống JavaScript tự động dò tìm mọi định dạng tên file (Hoa/Thường/Gạch ngang) và đuôi file (.jpg, .JPG, .png) để khắc phục triệt để lỗi phân biệt chữ hoa-thường trên GitHub Pages.

Interactive Modal: Cung cấp thông tin chi tiết, hình ảnh sắc nét và các thông số sinh học của từng loài.

3. Puffy AI - Hướng dẫn viên Cá nóc thông minh
Tương tác đa phương thức: Puffy có thể dẫn Tour tham quan tự động, kể chuyện về các di tích lịch sử như tàu Titanic, hoặc trả lời các câu hỏi về hơn 60 loài cá.

Hệ thống Quiz & Mảnh ghép: Người dùng cần trả lời các câu hỏi hóc búa từ những sinh vật có độ kỳ dị cao (Weirdness > 7) để thu thập 38 mảnh ghép mật mã ẩn.

Smart Physics Drag: Khung chat có thể kéo thả linh hoạt trên màn hình, tự động lật hướng và cân bằng lề để không bao giờ bị kẹt hoặc mất chữ.

4. Hệ thống Âm thanh đa tầng (Ambient Soundscape)
Sử dụng công nghệ nội suy âm thanh để tự động chuyển đổi âm lượng giữa 3 tầng nhạc nền (Surface, Deep, Abyss) tùy theo độ sâu thực tế của người dùng.

🛠 Công nghệ sử dụng
Front-end: HTML5, CSS3 (Flexbox, Grid, Animations), JavaScript (ES6+).

Animations: CSS Keyframes & Intersection Observer API.

Icons/Images: Custom SVG waves, Emoji avatars, và hệ thống ảnh thực tế được tối ưu hóa.

Deployment: GitHub Pages.

📁 Cấu trúc thư mục
Plaintext
├── images/             # Chứa hơn 60 ảnh sinh vật biển (chuẩn hóa tên file)
├── sound/              # Chứa các file âm thanh môi trường (.mp3)
├── days/               # Khu vực các trang bí mật và sự kiện đặc biệt
├── index.html          # Cấu trúc chính của đại dương
├── style.css           # Hiệu ứng thị giác và giao diện Responsive
└── script.js           # Bộ não xử lý logic, AI và cuộn mượt
🎮 Cách chạy dự án
Clone repository về máy: git clone https://github.com/zune-lab/web.git

Mở file index.html trên trình duyệt (Khuyến khích dùng Live Server trong VS Code).

Sử dụng con lăn chuột hoặc kéo thanh Depth Gauge bên phải để bắt đầu chuyến hành trình.

Dự án được thực hiện bởi Nguyễn Hải Vương (CLC IT - SGU). Mật mã bí mật nằm đâu đó dưới vực thẳm... hãy đi tìm nó! 🐡✨
