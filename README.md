# 🌊 Dive Into The Unknown - Interactive Ocean Exploration

Một trang web trải nghiệm tương tác điện ảnh (**Cinematic Interactive Experience**) đưa người dùng lặn sâu qua các tầng của đại dương, khám phá những sinh vật kỳ bí và giải mã các bí ẩn của vực thẳm. 

Dự án là sự kết hợp giữa kiến trúc **Front-end hiện đại**, thuật toán xử lý dữ liệu thông minh và hệ thống **AI Assistant** tích hợp.

---

## 🚀 Tính năng nổi bật & Công nghệ thực thi

### 1. Trải nghiệm lặn biển Cinematic (Smooth Scrolling)
Dự án không sử dụng cuộn trang thông thường mà áp dụng các thuật toán điều hướng môi trường động:

* **Scale độ sâu phi tuyến tính:** Áp dụng thuật toán bẻ cong không gian, ưu tiên diện tích hiển thị cho các vùng nước nông giàu sinh vật (0-1000m) và nén các vùng rãnh sâu để tối ưu trải nghiệm.
    ```javascript
    // Thuật toán nội suy độ sâu dựa trên tỷ lệ phần trăm cuộn
    function mapDepthToPercent(depth) {
        if (depth <= 200) return (depth / 200) * 0.20; 
        if (depth <= 1000) return 0.20 + ((depth - 200) / 800) * 0.25;
        // ... logic tiếp tục nén không gian ở các tầng sâu hơn
    }
    ```
* **Marine Snow & God Rays:** * Hệ thống tia sáng mặt trời (**God Rays**) xuyên qua làn nước được mô phỏng sống động bằng CSS Gradients và Keyframes.
    * Hiệu ứng **Marine Snow** (Tuyết biển) với mật độ hạt tăng dần theo độ sâu thực tế.
* **Smooth Color Blending:** Nền biển tự động chuyển màu mượt mà (Interpolation) từ xanh lơ sang đỏ nguy hiểm (1000m) và tím rãnh sâu (11000m).

### 2. Bách khoa toàn thư sinh vật biển (60+ Loài)
* **Glassmorphism UI:** Các thông tin sinh vật được trình bày trên các thẻ kính mờ hiện đại, hỗ trợ hiệu ứng phát sáng (**Glow**) theo vùng nước lặn.
* **Thuật toán Dò tìm Ảnh (Brute-force Fallback):** Hệ thống tự động dò tìm tên file ảnh để khắc phục triệt để lỗi phân biệt chữ hoa-thường và định dạng file trên GitHub Pages.
    ```javascript
    const attempts = [
        title.replace(/\s+/g, '-') + '.jpg',      // Kiểu 1: Mahi-Mahi.jpg
        title.toLowerCase().replace(/\s+/g, '-') + '.jpg', // Kiểu 2: mahi-mahi.jpg
        title.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.png' // Kiểu 3: png format
    ];
    ```

### 3. Puffy AI - Hướng dẫn viên thông minh
* **Interactive Chat Widget:** Puffy có khả năng dẫn Tour tự động, kể chuyện về di tích lịch sử (Titanic, tàu Trieste...) và trả lời thông tin về hơn 60 loài cá.
* **Hệ thống Quiz & Mảnh ghép:** Giải mã các câu đố từ sinh vật kỳ dị để thu thập 38 mảnh ghép mật mã ẩn.
* **Smart Physics Drag:** Khung chat có khả năng kéo thả linh hoạt, tự động nhận diện lề màn hình để lật hướng hiển thị, tránh che khuất nội dung trang web.

### 4. Ambient Soundscape (Âm thanh đa tầng)
* Sử dụng công nghệ nội suy âm lượng để trộn (mix) 3 tầng nhạc nền khác nhau dựa trên vị trí hiện tại của người dùng, tạo cảm giác lặn sâu thực thụ qua thính giác.

---

## 🛠 Công nghệ sử dụng

| Công nghệ | Mục đích |
| :--- | :--- |
| **HTML5 & CSS3** | Cấu trúc UI, Flexbox/Grid và hiệu ứng môi trường. |
| **JavaScript (ES6+)** | Xử lý logic AI, thuật toán cuộn và quản lý dữ liệu cá. |
| **Intersection Observer** | Tối ưu hóa hiệu suất hiển thị thẻ sinh vật khi cuộn. |
| **GitHub Pages** | Triển khai và vận hành trang web trực tuyến. |

---

## 📁 Cấu trúc thư mục

```text
├── images/             # Chứa 60+ ảnh thực tế sinh vật biển
├── sound/              # Thư viện âm thanh môi trường đa tầng
├── days/               # Khu vực chứa các trang bí mật và sự kiện
├── index.html          # File cấu trúc chính của dự án
├── style.css           # Định nghĩa hiệu ứng và giao diện Responsive
└── script.js           # Bộ não xử lý logic, AI và thuật toán cuộn
