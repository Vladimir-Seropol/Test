



// Загрузка последнего введённого города из local storage
document.addEventListener('DOMContentLoaded', () => {
    const savedCity = localStorage.getItem('lastCity');
    if (savedCity) {
        document.getElementById('city').value = savedCity;
        getWeather(savedCity);
    }
});

//loader
function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}



async function getWeather() {
    showLoader();
    const cityInput = document.getElementById('city');
    const city = cityInput.value.trim() || 'Краснодар'; 
    cityInput.value = '';

    // Проверяем, что город введен
    // if (!city) {
    //     alert('Пожалуйста, введите название города!');
    //     hideLoader(); // Скрываем загрузчик, если он был показан
    //     return;
    // }
   
    const apiKey = '260bb157394fea4d450e148689e0c3d5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;
    const cityInputElement = document.getElementById('input');

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            const weatherTranslations = {
                "Clear sky": "Солнечно",
                "Few clouds": "Переменная облачность",
                "Scattered clouds": "Малооблачно",
                "Broken clouds": "Малооблачно",
                "Overcast clouds": "Облачно",
                "Rain": "Дождь",
                
            };

            function translateWeatherDescription(description) {
                return weatherTranslations[description] || description; // Возвращаем перевод или оригинал
            }

            function updateWeatherDisplay(weatherData) {
                const temperature = weatherData.main.temp; 
                const weatherDescription = weatherData.weather[0].description; 
                const translatedWeather = translateWeatherDescription(weatherDescription); // Переводим описание погоды

                const icon = document.createElement('img');
                icon.classList.add('img-icon');
                icon.src = 'images/ic_info_outline_48px.svg'; 

                document.getElementById('city-name').innerText = city;
                document.getElementById('city-name').appendChild(icon);
                document.getElementById('temperature').innerText = `Температура: ${temperature}°C`;
                document.getElementById('current-weather').innerText = `Погода: ${translatedWeather}`;
            }

            // Закрываем поле ввода при клике по кнопке
            cityInputElement.classList.remove('input-block');
            cityInputElement.classList.add('input-none');

            updateWeatherDisplay(data);

            // Сохраняем город в local storage
            localStorage.setItem('lastCity', city);
        } else {
            console.error(data.message);
            alert(`Ошибка: ${data.message}`); 
        }
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при получении данных о погоде.');
    } finally {
        hideLoader(); // Скрываем загрузчик
    }
}
getWeather();

//Открываем поле input при клике на название города
const cityNameElement = document.getElementById('city-name');
const cityInputElement = document.getElementById('input');

cityNameElement.addEventListener('click', () => {

    if (city) {
        cityInputElement.classList.remove('input-none');
        cityInputElement.classList.add('input-block');

    }
});



