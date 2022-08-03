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
  //Metodo que retorna en consola toda la informacion en formato lista
  showInConsole(){
    console.log(
      `- La fecha de hoy es ${this.date}.\n- Estamos en ${this.cityName}.\n- La temperatura es de ${this.temperature} grados.\n- La humedad es de ${this.humidity}.\n- Vientos de ${this.wind} km/h.\n- Dato de color: ${this.extraInfo}.`
    )}
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
//Funcion que toma el clima que desea ver el usuario y lo devuelve en consola ya sea en formato lista o texto
function getPreWeather(){
  let userWeatherChoice = prompt('Elija un clima entre: Buenos Aires, Madrid, Punta del Este, California');
  const choice = allSeasons.find((item) => item.cityName.toLowerCase() == userWeatherChoice.toLowerCase());
  if(choice){
    let userChoiceWeather = prompt('Como desea mostrar en consola su clima:\n\n1. Forma de lista.\n2. Forma de texto\n3. En pantalla');
    if(userChoiceWeather.toLowerCase() === '1'){
      choice.showInConsole();
    } else if (userChoiceWeather.toLowerCase() === '2'){
      concatWeathersToStr(choice);
    } else {
      printDom(choice)
    }
  }
};
//Funcion que devuelve el onjeto creado en un string 
function concatWeathersToStr(userChoiceToString){
    let seasonToStr = userChoiceToString.map((elem)=>{
      console.log(`Hoy ${elem.date} un hermoso dia de ${elem.cityName} con ${elem.temperature} grados, una humedad del ${elem.humidity} y vientos de ${elem.wind} km/h de que llueva y te podemos decir que va a estar: ${elem.extraInfo}.`)
    })
};
//Funcion que le permite al usuario construir un nuevo clima
function newWeather(){
  //Pido al usuario la informacion para armar su clima y lo guardo en variables
  let newCityInput = prompt('En que cuidad se encuentra?')
  let newTemp = prompt('Que temperatura hace?');
  let newDate = prompt('Ingrese la fecha que desea ver o escriba HOY para ver la fecha de hoy');
  let newHumidity = prompt('Esta humedo? Ej: 75%');
  let newPrecipitation = prompt('Velocidad del viento? Ej: 5');
  let newIconInfo = prompt('Como va a estar el resto del dia? Soleado, Nublado, Lluvioso, Espectacular u Horrible. Solo podes usar una!');
  //Cuando recolecte toda los datos uso el contructor para crear el clima
  let newUserInput = new Season(newCityInput, newTemp, newDate, newHumidity, newPrecipitation, newIconInfo, newIconInfo);
  if(newDate.toLowerCase() === 'hoy') newUserInput.getNewDate() //Obtengo la fecha de hoy
  if(newIconInfo.toLowerCase()) newUserInput.getNewIcon() //Ingresa a nuestro objeto y busca el icono
  //Guardo el clima en mi array en caso de que despues necesite acceder a el
  allSeasons.push(newUserInput);
  //Pregunto al usuario como quiere mostrar en consola en forma de lista, texto o en pantalla
  let userNewWeather = prompt('Como desea mostrar en consola su clima:\n\n1. Forma de lista.\n2. Forma de texto\n3. Imprimir en pantalla');
  if(userNewWeather.toLowerCase() === '1'){
    newUserInput.showInConsole();
  } else if(userNewWeather.toLowerCase() === '2'){
    concatWeathersToStr([newUserInput]);
  }
  printDom(newUserInput);
};  
//Objetos creados a partir de mi clase constructora
const summer = new Season('Buenos Aires', '32', 'Lunes, 10 de Enero', '98', '10', '<i class="fa-solid fa-sun"></i>', 'Soleado');
const autumn = new Season('Madrid', '17', 'Miercoles, 20 de Abril', '75', '200', '<i class="fa-solid fa-cloud-showers-heavy"></i>', 'Lluvias a baldazos');
const winter = new Season('Punta del Este', '5', 'Martes, 23 de Agosto', '80', '20', '<i class="fa-solid fa-rainbow"></i>', 'Arcoiris en toda la cuidad');
const spring = new Season('California', '25', 'Viernes, 31 de Septiembre', '90', '0 ', '<i class="fa-solid fa-meteor"></i>', 'Probabilidad de Meteoros');
const allSeasons = [summer, autumn, winter, spring];
//Funcion que voy a usar para llamar a los elementos estaticos html y darles un nuevo valor
function printDom(choice){
  const htmlCityName = document.querySelector('.city--name');
  const htmlCityDate = document.querySelector('.city--date');
  const htmlTemperature = document.querySelector('.temperature');
  const htmlHumidity = document.querySelector('.humidity');
  const htmlWind = document.querySelector('.wind');
  const htmlIcon = document.querySelector('.icon');
  //Les asigno un valor a mis elementos estaticos en html
  htmlCityName.innerText = `${choice.cityName}`;
  htmlCityDate.innerText = `${choice.date}`;
  htmlTemperature.innerText = `${choice.temperature}°`;
  htmlHumidity.innerText = `Humedad: ${choice.humidity}%`;
  htmlWind.innerText = `Viento: ${choice.wind} km/h`;
  htmlIcon.innerHTML = `${choice.weatherIcon}
                        <span class="icon_info">${choice.extraInfo}</span>`;
}
//Iniciando el programa
let userAnswer = true
do {
  let welcomeMessage = prompt('Bienvenido a WeatherApp, que desea hacer?\n\n1. Ver algun clima preestablecido e imprimirlo en consola?\n2. Crear su propio clima?\n3. Salir');
  if(welcomeMessage === '1'){
    getPreWeather() //Toma un clima preestablecido y lo imprime en consola
  } else if(welcomeMessage === '2'){
    newWeather() //Construye nuevo clima, guarda e imprime en consola
  } else userAnswer = false; //Salida
} while(userAnswer)
