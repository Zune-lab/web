document.addEventListener('DOMContentLoaded', () => {
    const btnNext = document.getElementById('btnNext');
    const bgMusic = document.getElementById('bgMusic');
    const btnHong = document.getElementById('btnHong');
    const btnCo = document.getElementById('btnCo');
    const btnBack = document.getElementById('btnBack');
    const btnGroup = document.getElementById('btnGroup');
    const feedbackArea = document.getElementById('feedbackArea');
    const statusIcon = document.getElementById('statusIcon');
    const statusText = document.getElementById('statusText');
    const btnChat = document.getElementById('btnChat');
    const videoContainer = document.getElementById('videoContainer');
    const comfortVideo = document.getElementById('comfortVideo');
    const screen2 = document.getElementById('screen2');
    const questionText = document.getElementById('questionText');
    
    if (comfortVideo) comfortVideo.volume = 0.3;

    // Hiệu ứng click (Glowing Particles)
    document.addEventListener('click', (e) => {
        const effects = ['✨', '💫', '🌌', '🤍'];
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.zIndex = '1000';
        sparkle.style.pointerEvents = 'none';
        sparkle.innerText = effects[Math.floor(Math.random() * effects.length)];
        sparkle.style.left = `${e.clientX - 10}px`;
        sparkle.style.top = `${e.clientY - 10}px`;
        sparkle.style.transition = 'all 0.8s cubic-bezier(0.1, 0.8, 0.3, 1)';
        sparkle.style.filter = 'drop-shadow(0 0 8px rgba(255,255,255,0.6))';
        document.body.appendChild(sparkle);
        
        requestAnimationFrame(() => {
            sparkle.style.transform = 'translateY(-50px) scale(1.5)';
            sparkle.style.opacity = '0';
        });
        setTimeout(() => sparkle.remove(), 800);
    });

    // Mở thiệp
    if(btnNext) {
        btnNext.addEventListener('click', () => {
            transitionScreen('screen1', 'screen2');
            bgMusic.volume = 0.1;
            bgMusic.play().catch(() => console.log("Cần tương tác để phát nhạc"));
        });
    }

    // Nút "Hong :)" lẩn tránh
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
                
                const safeMargin = 40;
                const maxX = window.innerWidth - this.offsetWidth - safeMargin;
                const maxY = window.innerHeight - this.offsetHeight - safeMargin;
                const randomX = Math.max(safeMargin, Math.floor(Math.random() * maxX));
                const randomY = Math.max(safeMargin, Math.floor(Math.random() * maxY));
                
                this.style.left = `${randomX}px`;
                this.style.top = `${randomY}px`;
                setTimeout(() => { isMoving = false; }, 300);
            });
        });
    }

    const letterContent = `
        Em thật sự xin lỗi Banh vì hôm qua tối rồi mà e còn làm phiền Banh. Em ích kỉ chả quan tâm tới ai. Em thật sự xin lỗi, em làm phiền Banh luôn. Em không biết Banh có đọc hết đống hôm qua e nhắn hay không, nhưng mà dù có hay không thì em cũng thật sự cảm ơn Banh. Hôm qua thật sự là 'lowest point' của e. Em không còn ai để em tâm sự kể cả. Nên em mới ích kỉ làm phiền Banh giờ đó. Em không có đc thông minh lắm á, nên nhắn nhảm nhảm với làm 3 cái xàm xàm này được thôi. Em cũng biết việc ny ny có bồ là tốt, ny ny ổn hơn trong cuộc sống là mừng rồi, nhưng mà em bị ích kỉ.<br><br> 
        Em trao toàn bộ mọi thứ cho ny ny, em cũng mong mình có lại 1 cái gì đó chứ. Biết nói vậy là ích kỉ, tự nguyện trao mà còn đòi hỏi nhận lại. Nhưng em không kiểm soát được bản thân nghĩ gì cả, em ghét bản thân em, em tự đày bản thân vào đường cùng xong tự đi than vãn đòi hỏi sự thấu hiểu từ người khác, đòi hỏi người ta trao cho em 1 tí tình yêu, thương hại cũng được luôn.<br><br> 
        Em ghê tởm trước sự thiếu thốn tình cảm của bản thân em, mà dù có ghét có tởm thì nó vẫn vậy, em vẫn không thay đổi được. Em xin lỗi chị đã phải chịu đưng tất cả những thứ này, chịu đựng em.❤️.<br><br> 
        Cái bài hát kế bên, ver gốc có cảm giác như đã move on rồi, còn ver này nghe như sự tiếc nuối vậy á nên e thấy nó hợp mood hiện tại của e.<br><br>
        Nhạc sẽ khá to nên Banh nhớ chỉnh nhỏ volume lại nhaaa. E cảm ơn Banh vì đã đọc đến đây, cảm ơn vì đã luôn ở đó dù e có làm gì đi nữa. E thật sự rất trân trọng điều đó. E sẽ cố gắng để không làm phiền Banh nữa đâu, e hứa 🥺❤️.
    `;

    // Khi bấm "Có :("
    if(btnHong) {
        btnHong.addEventListener('click', () => {
            btnGroup.style.display = 'none';
            btnCo.style.display = 'none'; 
            btnBack.classList.add('hidden');
            screen2.classList.add('wide-card');
            
            questionText.innerHTML = 'Em xin lỗi 🥺';
            statusIcon.innerHTML = '☁️🧸';
            statusText.innerHTML = letterContent;
            
            feedbackArea.classList.remove('hidden');
            feedbackArea.classList.add('fade-in');

            setTimeout(() => {
                videoContainer.classList.remove('hidden');
                videoContainer.classList.add('fade-in');
            }, 1000);
            
            setTimeout(() => {
                btnChat.classList.remove('hidden');
                btnChat.classList.add('fade-in');
            }, 2500);

            createParticles(['✨', '💫', '🤍', '☁️']);
        });
    }

    // Nút quay lại
    if(btnBack) {
        btnBack.addEventListener('click', () => {
            questionText.innerHTML = 'Banh có ghét e hong? 🥺';
            feedbackArea.classList.add('hidden');
            btnBack.classList.add('hidden');
            screen2.classList.remove('wide-card'); 
            btnGroup.style.display = 'flex';
            btnCo.style.position = 'relative';
            btnCo.style.left = 'auto';
            btnCo.style.top = 'auto';
            btnCo.style.display = 'block';
        });
    }

    // Fade Nhạc & Video
    let fadeInterval, delayTimeout;
    const targetVolume = 0.2; 

    if (comfortVideo && bgMusic) {
        comfortVideo.addEventListener('play', () => {
            clearTimeout(delayTimeout);
            clearInterval(fadeInterval);
            bgMusic.pause();
        });

        function resumeMusicWithFade() {
            delayTimeout = setTimeout(() => {
                bgMusic.volume = 0; bgMusic.play().catch(() => {});
                fadeInterval = setInterval(() => {
                    if (bgMusic.volume < targetVolume) {
                        bgMusic.volume = Math.min(bgMusic.volume + 0.003, targetVolume); 
                    } else { clearInterval(fadeInterval); }
                }, 50); 
            }, 1000); 
        }
        comfortVideo.addEventListener('pause', resumeMusicWithFade);
        comfortVideo.addEventListener('ended', resumeMusicWithFade);
    }

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
        for(let i = 0; i < 25; i++) {
            setTimeout(() => {
                const p = document.createElement('div');
                p.style.position = 'fixed';
                p.style.bottom = '-20px';
                p.style.left = `${Math.random() * 100}vw`;
                p.style.zIndex = '999';
                p.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                p.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
                p.style.transition = 'all 5s cubic-bezier(0.4, 0, 0.2, 1)';
                p.style.filter = 'drop-shadow(0 0 10px rgba(255,255,255,0.5))';
                document.body.appendChild(p);
                requestAnimationFrame(() => {
                    p.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg) scale(${Math.random() + 0.5})`;
                    p.style.opacity = '0';
                });
                setTimeout(() => p.remove(), 5000);
            }, i * 150);
        }
    }
});