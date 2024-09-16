// Часы




function updateTimeAndDate() {
    const now = new Date();

    // Форматируем время
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`; 

    // Форматируем дату
    const options = { day: 'numeric', month: 'long', weekday: 'long' };
    const dateString = now.toLocaleDateString('ru-RU', options);
    
    // Получаем год
    const year = now.getFullYear();
    
    // Обновляем элементы на странице
    document.getElementById('time').innerText = timeString;
    document.getElementById('date').innerText = `${dateString} ${year}`; 
}

// Обновляем время и дату сразу при загрузке и каждую секунду
updateTimeAndDate();
setInterval(updateTimeAndDate, 1000);






//function updateTimeAndDate() {
//    const now = new Date();

//    // Форматируем время
//    const hours = String(now.getHours()).padStart(2, '0');
//    const minutes = String(now.getMinutes()).padStart(2, '0');
//    const seconds = String(now.getSeconds()).padStart(2, '0');
//    const timeString = `${hours}:${minutes}:${seconds}`;

//    // Форматируем дату
//    const options = { day: 'numeric', month: 'long', weekday: 'long' };
//    const dateString = now.toLocaleDateString('ru-RU', options);

//    // Обновляем элементы на странице
//    document.getElementById('time').innerText = timeString;
//    document.getElementById('date').innerText = dateString;
//}

//// Обновляем время и дату сразу при загрузке и каждую секунду
//updateTimeAndDate();
//setInterval(updateTimeAndDate, 1000);
