// Получаем ссылки на элементы
const img = document.querySelector('img');
const select = document.querySelector('select');

// Добавляем обработчик события изменения в select
select.addEventListener('change', function() {
    const selectedValue = select.value;
    
    const options = document.querySelectorAll('option');
    
    options.forEach(function(option) {
        if (option.value === selectedValue) {
            img.className = 'car__image animate__animated'; 
            img.classList.add('animate__' + selectedValue); // Добавляем класс анимации
        }
    });
});

const option = document.querySelectorAll('option')
console.log(option)