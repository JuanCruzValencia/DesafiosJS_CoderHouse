//Creacion de clase y sus metodos
class Season {
    constructor(cityName, temperature, date, humidity, wind, weatherIcon, extraInfo){
      	this.cityName = cityName,
      	this.date = date,
        this.temperature = temperature,
        this.humidity = humidity,
        this.wind = wind,
        this.weatherIcon = weatherIcon,
        this.extraInfo = extraInfo
    };
  //Metodo para obtener el dia de hoy
  getNewDate(){
    const week = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    const month = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    let todayDate = new Date();
    let todayDay = week[todayDate.getDay()];
    let todayMonth = month[todayDate.getMonth()];
    let todayNum = todayDate.getDate();
    this.date = `${todayDay}, ${todayNum} de ${todayMonth}`
  }
  //Medoto para obtener el icono del clima
  getNewIcon(userInput){
    const icons = ['<i class="fa-solid fa-sun"></i>', '<i class="fa-solid fa-cloud"></i>', '<i class="fa-solid fa-cloud-showers-heavy"></i>', '<i class="fa-solid fa-rainbow"></i>', '<i class="fa-solid fa-meteor"></i>'];
    switch(userInput){
      case 'soleado':
        this.weatherIcon = icons[0];
        break;
      case 'nublado':
        this.weatherIcon = icons[1]; 
        break;
      case 'lluvias':
        this.weatherIcon = icons[2];
        break;
      case 'espectacular':
        this.weatherIcon = icons[3];
        break;
      case 'horrible':
        this.weatherIcon = icons[4];
        break;
    }
  }
};

//Objetos creados a partir de mi clase constructora
const summer = new Season('Buenos Aires', '32', 'Lunes, 10 de Enero', '98', '10', '<i class="fa-solid fa-sun"></i>', 'Soleado');
const autumn = new Season('Madrid', '17', 'Miercoles, 20 de Abril', '75', '200', '<i class="fa-solid fa-cloud-showers-heavy"></i>', 'Lluvias a baldazos');
const winter = new Season('Punta del Este', '5', 'Martes, 23 de Agosto', '80', '20', '<i class="fa-solid fa-rainbow"></i>', 'Arcoiris en toda la cuidad');
const spring = new Season('California', '25', 'Viernes, 31 de Septiembre', '90', '0 ', '<i class="fa-solid fa-meteor"></i>', 'Probabilidad de Meteoros');
let allSeasons = [summer, autumn, winter, spring];

//Funcion que voy a usar para llamar a los elementos estaticos html y darles un nuevo valor
function printDom(choice){
  let htmlCityName = document.querySelector('.city--name');
  let htmlCityDate = document.querySelector('.city--date');
  let htmlTemperature = document.querySelector('.temperature');
  let htmlHumidity = document.querySelector('.humidity');
  let htmlWind = document.querySelector('.wind');
  let htmlIcon = document.querySelector('.icon');

  //Les asigno un valor a mis elementos estaticos en html
  htmlCityName.innerText = `${choice.cityName}`;
  htmlCityDate.innerText = `${choice.date}`;
  htmlTemperature.innerText = `${choice.temperature}°`;
  htmlHumidity.innerText = `Humedad: ${choice.humidity}%`;
  htmlWind.innerText = `Viento: ${choice.wind} km/h`;
  htmlIcon.innerHTML = `${choice.weatherIcon}
                        <span class="icon_info">${choice.extraInfo}</span>`;
}

//Funcion que toma el clima que desea ver el usuario y lo devuelve en consola ya sea en formato lista o texto
function getPreWeather(){
  let userWeatherChoice = document.querySelector('.city_input').value;
  let choice = allSeasons.find((elem) => elem.cityName.toLowerCase() === userWeatherChoice.toLowerCase());
  if(choice) printDom(choice)
};

//Evento cuando el usuario ingresa uno de los climas predeterminados
const inputSubmit = document.querySelector('.submit_input');
inputSubmit.addEventListener('click', () => getPreWeather());

//Evento cuando el usuario ingresa su propio clima y se cierra la ventana
const userNewWeather = document.getElementById('form_ok-button');
const weatherForm = document.getElementById('weather_form-container');
userNewWeather.addEventListener('click', () => {
  newWeather();
  closeForm();
});

//funcion que abre el popup form
function openForm(){
  weatherForm.style.display = 'flex';
}
//funcionm que cierra el popuopform
const cancelButton = document.getElementById('form_cancel-button');
cancelButton.addEventListener('click', () => {
  closeForm();
});
function closeForm(){
  weatherForm.style.display = 'none';
}
//Evento que abre el form para ingresar le nuevo clima
const playButton = document.getElementById('play_button');
playButton.addEventListener('click', () => {
  openForm();
});

//Funcion que le permite al usuario construir un nuevo clima
function newWeather(){
  //Pido al usuario la informacion para armar su clima y lo guardo en variables
  let newCityInput = document.getElementById('weather_input-cityName').value;
  let newTemp = document.getElementById('weather_input-temperature').value;
  let newHumidity = document.getElementById('weather_input-humidity').value;
  let newWind = document.getElementById('weather_input-wind').value;
  let newIconInfo = document.getElementById('weather_input-icon').value;
  let newDate = true;
  //Cuando recolecte toda los datos uso el contructor para crear el clima
  let newUserInput = new Season(newCityInput, newTemp, newDate, newHumidity, newWind, newIconInfo, newIconInfo);
  if(newIconInfo.toLowerCase()) newUserInput.getNewIcon(newIconInfo) //Ingresa a nuestro objeto y busca el icono
  if(newDate) newUserInput.getNewDate();
  //Guardo el clima en mi array en caso de que despues necesite acceder a el
  allSeasons.push(newUserInput);
  printDom(newUserInput);
};  