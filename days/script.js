document.addEventListener('DOMContentLoaded', function() {
    const lockScreen = document.getElementById('lock-screen');
    const mainContent = document.getElementById('main-content');
    const lockMessage = document.getElementById('lock-message');

    // Mở tạm thời để check (Đổi thành false khi gửi cho Banh)
    const DEBUG_MODE = false; 

    function validateEntry() {
        const now = new Date();
        
        // Cấu hình bí mật
        const _config = { d: 30, m: 10, y: 2024 };
        
        const isTargetDate = (
            now.getDate() === _config.d && 
            (now.getMonth() + 1) === _config.m && 
            now.getFullYear() === _config.y
        );

        // Hiệu ứng delay giả lập load dữ liệu cho sang trọng
        setTimeout(() => {
            if (DEBUG_MODE || isTargetDate) {
                lockScreen.style.opacity = '0';
                setTimeout(() => {
                    lockScreen.classList.add('hidden');
                    mainContent.classList.remove('hidden');
                    setTimeout(() => {
                    lockScreen.classList.add('hidden');
                    mainContent.classList.remove('hidden');
                    
                    // Cuộn thẳng lên đỉnh trang, padding 60px sẽ lo phần khoảng trống
                    window.scrollTo(0, 0); 
                    
                }, 500);
                }, 500);
            } else {
                // Thông báo đánh lạc hướng (Không nói về ngày 30/10)
                lockMessage.style.color = "#ff4d4d";
                lockMessage.innerText = "nah ah, bạn chưa giải được câu đố thì không được xem đâu! 😜";
                document.querySelector('.loader').style.display = 'none';
            }
        }, 1500);
    }

    validateEntry();
});
