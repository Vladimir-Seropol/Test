// Загрузка последнего введённого города из local storage
document.addEventListener('DOMContentLoaded', () => {
    const savedCity = localStorage.getItem('lastCity');
    if (savedCity) {
        document.getElementById('city').value = savedCity;
        getWeather(savedCity);
    }
});

//
function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}




//Получение погоды методом fetch из API OpenWeather
async function getWeather() {
    showLoader();
    const cityInput = document.getElementById('city');
    const city = cityInput.value;
    const apiKey = '260bb157394fea4d450e148689e0c3d5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const cityInputElement = document.getElementById('input');

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            const weatherTranslations = { //Словарь для перевода описания погоды полученных  из API
                "clear sky": "ясное небо",
                "few clouds": "немного облаков",
                "scattered clouds": "разрозненные облака",
                "broken clouds": "облачность",
                "shower rain": "дождь",
                "rain": "дождь",
                "thunderstorm": "гроза",
                "snow": "снег",
                "mist": "туман",
                "overcast clouds": "пасмурные облака"
            };

            function translateWeatherDescription(description) {
                return weatherTranslations[description] || description; // Возвращаем перевод или оригинал
            }

            function updateWeatherDisplay(data) {
                const temperature = data.main.temp;
                const weather = data.weather[0].description;
                const translatedWeather = translateWeatherDescription(weather); // Переводим описание погоды
                //document.createElement(icon).
                const icon = document.createElement('img');
                icon.classList.add('img-icon');
                //icon.url();
                icon.src = `images/ic_info_outline_48px.svg`;


                document.getElementById('city-name').innerText = ` ${city}`;
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

            // Очищаем поле ввода
            cityInput.value = '';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }finally {
        hideLoader();
    }
}
//getWeather();

//Открываем поле input при клике на название города
const cityNameElement = document.getElementById('city-name');
const cityInputElement = document.getElementById('input');

cityNameElement.addEventListener('click', () => {

    if (city) {
        cityInputElement.classList.remove('input-none');
        cityInputElement.classList.add('input-block');

    }
});




