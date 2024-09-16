

//Обои
function setBackground() {
    const hour = new Date().getHours();
    let imageUrl;

    if (hour >= 0 && hour < 6) {
        imageUrl = 'https://github.com/digitalSector47/traineeship-test-task/blob/main/images/01.jpg?raw=true';
    } else if (hour >= 6 && hour < 12) {
        imageUrl = 'https://github.com/digitalSector47/traineeship-test-task/blob/main/images/02.jpg?raw=true';
    } else if (hour >= 12 && hour < 18) {
        imageUrl = 'https://github.com/digitalSector47/traineeship-test-task/blob/main/images/03.jpg?raw=true';
    } else {
        imageUrl = 'https://github.com/digitalSector47/traineeship-test-task/blob/main/images/04.jpg?raw=true';
    }

    //document.body.style.backgroundImage = `url(${imageUrl})`;
    document.getElementById('container').style.backgroundImage= `url(${imageUrl})`;
}

// Устанавливаем фон при загрузке страницы
setBackground();











