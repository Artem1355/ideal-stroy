document.addEventListener('DOMContentLoaded', () => {
    
    // Плавная прокрутка к якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Обработка формы
    const mainForm = document.getElementById('mainForm');
    mainForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Здесь можно добавить отправку данных на почту
        const formData = new FormData(mainForm);
        alert(`Спасибо, ${formData.get('name')}! Мы свяжемся с вами по номеру ${formData.get('phone')} в ближайшее время.`);
        mainForm.reset();
    });

    // Анимация при скролле (шапка меняет прозрачность)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(26, 37, 47, 0.95)';
            header.style.padding = '10px 0';
        } else {
            header.style.background = '#1a252f';
            header.style.padding = '15px 0';
        }
    });
});