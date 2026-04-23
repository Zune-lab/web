document.addEventListener('DOMContentLoaded', () => {
    // Khai báo tất cả các phần tử (thiếu 1 cái là code tịt ngòi ngay)
    const btnNext = document.getElementById('btnNext');
    const bgMusic = document.getElementById('bgMusic');
    
    const btnHong = document.getElementById('btnHong'); // Nút "Có :("
    const btnCo = document.getElementById('btnCo');     // Nút "Hong :)"
    const btnBack = document.getElementById('btnBack');
    const btnGroup = document.getElementById('btnGroup');
    const feedbackArea = document.getElementById('feedbackArea');
    const statusIcon = document.getElementById('statusIcon');
    const statusText = document.getElementById('statusText');
    const btnChat = document.getElementById('btnChat');
    const videoContainer = document.getElementById('videoContainer');
    const comfortVideo = document.getElementById('comfortVideo');
    const screen2 = document.getElementById('screen2');
    const questionText = document.getElementById('questionText'); // Bổ sung biến cho tiêu đề
    if (comfortVideo) comfortVideo.volume = 0.3;

    // Hiệu ứng thả tim khi click
    document.addEventListener('click', (e) => {
        const effects = ['💖', '✨', '🌸', '🎀'];
        const sparkle = document.createElement('div');
        sparkle.className = 'click-sparkle';
        sparkle.innerText = effects[Math.floor(Math.random() * effects.length)];
        sparkle.style.left = (e.clientX - 10) + 'px';
        sparkle.style.top = (e.clientY - 10) + 'px';
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
    });

    // Nút mở thiệp màn hình 1
    if(btnNext) {
        btnNext.addEventListener('click', () => {
            transitionScreen('screen1', 'screen2');
            bgMusic.volume = 0.1;
            bgMusic.play().catch(() => console.log("Nhạc chờ tương tác..."));
        });
    }

    // --- HIỆU ỨNG NÚT "HONG :)" CHẠY TRỐN ---
    let isMoving = false; 
    if(btnCo) {
        ['mouseenter', 'touchstart'].forEach(eventType => { 
            btnCo.addEventListener(eventType, function(e) {
                if (eventType === 'touchstart') e.preventDefault();
                if (isMoving) return; 
                
                isMoving = true; 

                if (this.parentElement !== document.body) {
                    document.body.appendChild(this);
                    this.style.width = '140px'; 
                    this.style.position = 'fixed';
                    this.style.zIndex = '9999'; 
                }
                
                const safeMargin = 20;
                const maxX = window.innerWidth - this.offsetWidth - safeMargin;
                const maxY = window.innerHeight - this.offsetHeight - safeMargin;
                
                const randomX = Math.max(safeMargin, Math.floor(Math.random() * maxX));
                const randomY = Math.max(safeMargin, Math.floor(Math.random() * maxY));
                
                this.style.left = randomX + 'px';
                this.style.top = randomY + 'px';

                setTimeout(() => { isMoving = false; }, 300);
            });
        });
    }

    // --- KỊCH BẢN KHI BẤM NÚT "CÓ :(" ---
    if(btnHong) {
        btnHong.addEventListener('click', () => {
            // 1. Ẩn nút hiện tại
            btnGroup.style.display = 'none';
            btnCo.style.display = 'none'; 
            btnBack.classList.add('hidden');
            
            // 2. Mở rộng thẻ thành 2 cột
            screen2.classList.add('wide-card');
            
            // 3. ĐỔI TIÊU ĐỀ
            questionText.innerHTML = 'e xin lỗi 🥺';
            
            // 4. Chèn nội dung thư xin lỗi
statusIcon.innerHTML = '☁️🧸';
            
            // Gộp 2 đoạn lại và dùng <br><br> để xuống dòng tạo thành 2 đoạn văn
            statusText.innerHTML = "Em thật sự xin lỗi Banh vì hôm qua tối rồi mà e còn làm phiền Banh. Em ích kỉ chả quan tâm tới ai. Em thật sự xin lỗi, em làm phiền Banh luôn. Em không biết Banh có đọc hết đống hôm qua e nhắn hay không, nhưng mà dù có hay không thì em cũng thật sự cảm ơn Banh. Hôm qua thật sự là 'lowest point' của e. Em không còn ai để em tâm sự kể cả. Nên em mới ích kỉ làm phiền Banh giờ đó. Em không có đc thông minh lắm á, nên nhắn nhảm nhảm với làm 3 cái xàm xàm này được thôi. Em cũng biết việc ny ny có bồ là tốt, ny ny ổn hơn trong cuộc sống là mừng rồi, nhưng mà em bị ích kỉ.<br><br> Em trao toàn bộ mọi thứ cho ny ny, em cũng mong mình có lại 1 cái gì đó chứ. Biết nói vậy là ích kỉ, tự nguyện trao mà còn đòi hỏi nhận lại. Nhưng em không kiểm soát được bản thân nghĩ gì cả, em ghét bản thân em, em tự đày bản thân vào đường cùng xong tự đi than vãn đòi hỏi sự thấu hiểu từ người khác, đòi hỏi người ta trao cho em 1 tí tình yêu, thương hại cũng được luôn.<br><br> Em ghê tởm trước sự thiếu thốn tình cảm của bản thân em, mà dù có ghét có tởm thì nó vẫn vậy, em vẫn không thay đổi được. Em xin lỗi chị đã phải chịu đưng tất cả những thứ này, chịu đựng em.❤️.<br><br> Cái bài hát kế bên, ver gốc có cảm giác như đã move on rồi, còn ver này nghe như sự tiếc nuối vậy á nên e thấy nó hợp mood hiện tại của e.<br><br>Nhạc sẽ khá to nên Banh nhớ chỉnh nhỏ volume lại nhaaa. E cảm ơn Banh vì đã đọc đến đây, cảm ơn vì đã luôn ở đó dù e có làm gì đi nữa. E thật sự rất trân trọng điều đó. E sẽ cố gắng để không làm phiền Banh nữa đâu, e hứa🥺❤️.";
            
            // 5. Hiện khung chia cột lên
            feedbackArea.classList.remove('hidden');
            feedbackArea.classList.add('fade-in');

            // 6. Hiện Video sau 1.5s
            setTimeout(() => {
                videoContainer.classList.remove('hidden');
                videoContainer.classList.add('fade-in');
                //comfortVideo.play();
            }, 1500);
            
            // 7. Hiện nút nhắn tin
            setTimeout(() => {
                btnChat.classList.remove('hidden');
                btnChat.classList.add('fade-in');
            }, 3000);

            createParticles(['💖', '✨', '🧸', '🌸', '☁️']);
        });
    }

    // --- KỊCH BẢN KHI BẤM NÚT "HONG :)" (Phòng hờ bắt được) ---
    if(btnCo) {
        btnCo.addEventListener('click', () => {
            btnGroup.style.display = 'none';
            btnCo.style.display = 'none';
            videoContainer.classList.add('hidden');
            screen2.classList.remove('wide-card'); 
            
            questionText.innerHTML = 'Banh có ghét e hong? 🥺';
            statusIcon.innerHTML = '😠 💢 🤜';
            statusText.innerHTML = "m thật sự nghĩ t tin m ổn à ranh con ?";
            
            feedbackArea.classList.remove('hidden');
            feedbackArea.classList.remove('fade-in');
            void feedbackArea.offsetWidth;
            feedbackArea.classList.add('fade-in');

            createParticles(['💢', '😠', '🤜', '🙄', '🤏']);

            setTimeout(() => {
                btnBack.classList.remove('hidden');
                btnBack.classList.add('fade-in');
            }, 1000);
        });
    }

    // --- NÚT QUAY LẠI ---
    if(btnBack) {
        btnBack.addEventListener('click', () => {
            // Trả lại tiêu đề cũ
            questionText.innerHTML = 'Banh có ghét e hong? 🥺';
            
            feedbackArea.classList.add('hidden');
            btnBack.classList.add('hidden');
            screen2.classList.remove('wide-card'); 
            
            btnGroup.style.display = 'flex';
            btnGroup.classList.add('fade-in');

            btnCo.style.position = 'relative';
            btnCo.style.left = 'auto';
            btnCo.style.top = 'auto';
            btnCo.style.width = 'auto';
            btnGroup.appendChild(btnCo);
            btnCo.style.display = 'block';
        });
    }
// --- ĐỒNG BỘ NHẠC NỀN VÀ VIDEO (CÓ HIỆU ỨNG FADE-IN CHẬM RÃI, CỰC CHILL) ---
    let fadeInterval;
    let delayTimeout;
    const targetVolume = 0.2; // Mức âm lượng tối đa lúc nãy mình set (20%)

    if (comfortVideo && bgMusic) {
        // Khi bấm Play video -> Lập tức tắt nhạc và hủy các hiệu ứng đang chạy
        comfortVideo.addEventListener('play', () => {
            clearTimeout(delayTimeout);
            clearInterval(fadeInterval);
            bgMusic.pause();
        });

        // Hàm xử lý nhạc nền từ từ to lên thật chậm
        function resumeMusicWithFade() {
            // Vẫn giữ thời gian chờ 2.5 giây để tạo khoảng lặng sâu hơn một chút
            delayTimeout = setTimeout(() => {
                bgMusic.volume = 0; // Ép âm lượng về 0 trước khi phát
                bgMusic.play().catch(() => console.log("Trình duyệt chặn phát nhạc"));
                
                // Giảm interval xuống 50ms để mượt mà nhất có thể
                fadeInterval = setInterval(() => {
                    if (bgMusic.volume < targetVolume) {
                        // Tăng lên một xíu xiu 0.003 mỗi 50ms (Mất khoảng 5 giây để max volume)
                        let newVolume = bgMusic.volume + 0.003;
                        bgMusic.volume = Math.min(newVolume, targetVolume); 
                    } else {
                        // Khi đã đạt mức 0.3 thì dừng vòng lặp
                        clearInterval(fadeInterval); 
                    }
                }, 50); 
            }, 1000); // 1000 là 1 giây khoảng lặng
        }

        comfortVideo.addEventListener('pause', resumeMusicWithFade);
        comfortVideo.addEventListener('ended', resumeMusicWithFade);
    }
    // --- CÁC HÀM TIỆN ÍCH ---
    function transitionScreen(from, to) {
        const f = document.getElementById(from);
        const t = document.getElementById(to);
        f.style.opacity = '0';
        setTimeout(() => {
            f.classList.add('hidden');
            t.classList.remove('hidden');
            t.classList.add('fade-in');
        }, 400);
    }

    function createParticles(emojis) {
        for(let i = 0; i < 40; i++) {
            setTimeout(() => {
                const p = document.createElement('div');
                p.className = 'particle';
                p.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                p.style.left = Math.random() * 100 + 'vw';
                p.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
                document.body.appendChild(p);
                setTimeout(() => p.remove(), 4000);
            }, i * 80);
        }
    }
});