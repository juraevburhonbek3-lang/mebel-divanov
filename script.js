// Функция для добавления товара в корзину
function addToCart(productName) {
    const notification = document.getElementById('cart-notification');
    notification.textContent = `✓ "${productName}" добавлен в корзину!`;
    notification.style.display = 'block';

    // Скрыть уведомление через 3 секунды
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);

    // Добавить звук (опционально)
    console.log(`Товар добавлен: ${productName}`);
}

// Плавная прокрутка при клике на ссылки меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Проверка при загрузке страницы
window.addEventListener('load', () => {
    console.log('Добро пожаловать в МебельДиванов!');
});