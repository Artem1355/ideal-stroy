document.addEventListener('DOMContentLoaded', () => {
    
    // Логика мобильного меню
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('is-active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // Закрытие меню при клике на ссылку
    const navLinksList = document.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            if(menuToggle) menuToggle.classList.remove('is-active');
            if(navMenu) navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Обработка формы
    const mainForm = document.getElementById('mainForm');
    if (mainForm) {
        mainForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = mainForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            // Визуальный эффект загрузки
            btn.innerHTML = 'Отправка...';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            const formData = new FormData(mainForm);
            
            setTimeout(() => {
                alert(`Спасибо, ${formData.get('name')}! Ваша заявка принята. Мы перезвоним на номер ${formData.get('phone')}.`);
                mainForm.reset();
                btn.innerHTML = originalText;
                btn.style.opacity = '1';
                btn.disabled = false;
            }, 1000);
        });
    }

    // Скролл шапки
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(26, 37, 47, 0.98)';
            header.style.padding = '8px 0';
        } else {
            header.style.background = '#1a252f';
            header.style.padding = '15px 0';
        }
    });
});