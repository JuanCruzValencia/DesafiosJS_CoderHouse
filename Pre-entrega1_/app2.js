//Creacion de clase y sus metodos
class Season {
    constructor(weatherSeasons, temperature, date, humidity, precipitation, extraInfo){
      	this.weatherSeasons = weatherSeasons,
      	this.date = date,
        this.temperature = temperature,
        this.humidity = humidity,
        this.precipitation = precipitation,
        this.extraInfo = extraInfo
    };
  
  //Metodo que retorna en consola toda la informacion en formato lista
  showInConsole(){
    console.log(
      `- La fecha de hoy es ${this.date}.\n- Estamos en ${this.weatherSeasons}.\n- La temperatura es de ${this.temperature} grados.\n- La humedad es de ${this.humidity}.\n- La probabilidad de lluvia es de ${this.precipitation}.\n- Dato de color: ${this.extraInfo}.`
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
  //Medoto para obtener un mensaje aleatorio
  getNewMessage(){
    const messages = ['Que clima tan raro, hace rato tenia frio y ahora.. tengo tengo hambre!', 'Si este clima sigue asi, necesito seriamente que me invites a tomar algo', 'No molestar, esperando que se termine el invierno', 'Soleado y seguramente te mueras de calor', 'Nublado con posibilidad de que te cagu...s mojando'];
    let random = Math.floor(Math.random()*10);
    switch(random){
      case 1:
      case 6:
        this.extraInfo = messages[0];
        break;
      case 2:
      case 7:
        this.extraInfo = messages[1]; 
        break;
      case 3:
      case 8:
        this.extraInfo = messages[2];
        break;
      case 4:
      case 9:
        this.extraInfo = messages[3];
        break;
      case 5:
      case 10:
        this.extraInfo = messages[4];
        break;
    }
  }
};

//Funcion que toma el clima que desea ver el usuario y lo devuelve en consola ya sea en formato lista o texto
function getPreWeather(){
  let userWeatherChoice = prompt('Elija un clima entre: VERANO, OTONIO, INVIERNO, PRIMAVERA')
  const choice = allSeasons.find((item) => item.weatherSeasons.toLowerCase() == userWeatherChoice.toLowerCase());
  if(choice){
    let userChoiceWeather = prompt('Como desea mostrar en consola su clima:\n\n1. Forma de lista.\n2. Forma de texto');
    if(userChoiceWeather.toLowerCase() === '1'){
      choice.showInConsole();
    } else {
      concatWeathersToStr([choice]);
    }
  }
};

//Funcion que devuelve el onjeto creado en un string 
function concatWeathersToStr(userChoiceToString){
    let seasonToStr = userChoiceToString.map((elem)=>{
      console.log(`Hoy ${elem.date} un hermoso dia de ${elem.weatherSeasons} con ${elem.temperature} grados, una humedad del ${elem.humidity} y ${elem.precipitation} de que llueva te podemos decir: ${elem.extraInfo}.`)
    })
};

//Funcion que le permite al usuario construir un nuevo clima
function newWeather(){
  //Pido al usuario la informacion para armar su clima y lo guardo en variables
  let newSeasonInput = prompt('Que estacion del anio es?')
  let newTemp = prompt('Que temperatura hace?');
  let newDate = prompt('Ingrese la fecha que desea ver o escriba HOY para ver la fecha de hoy');
  let newHumidity = prompt('Esta humedo? Ej: 75%');
  let newPrecipitation = prompt('Va a llover? Ej: 10%');
  let newInfo = prompt('Desea ingresar un mensaje propio? Sino ingrese RANDOM y vera uno de mis mensajes aleatorios jeje');
  //Cuando recolecte toda los datos uso el contructor para crear el clima
  let newUserInput = new Season(newSeasonInput,newTemp, newDate, newHumidity, newPrecipitation, newInfo);
  if(newDate.toLowerCase() === 'hoy') newUserInput.getNewDate() //Obtengo la fecha de hoy
  if(newInfo.toLowerCase() === 'random') newUserInput.getNewMessage() //Ingresa a nuestro objeto un menssage random
  //Guardo el clima en mi array en caso de que despues necesite acceder a el
  allSeasons.push(newUserInput);
  //Pregunto al usuario como quiere mostrar en consola en forma de lista o de texto
  let userNewWeather = prompt('Como desea mostrar en consola su clima:\n\n1. Forma de lista.\n2. Forma de texto');
  if(userNewWeather.toLowerCase() === '1'){
    newUserInput.showInConsole();
  } else {
    concatWeathersToStr([newUserInput]);
  }
};  

//Objetos creados a partir de mi clase constructora
const summer = new Season('Verano', '32', 'Lunes, 10 de Enero', '98%', '10%', 'Soleado y seguramente te cocines en el semaforo');
const autumn = new Season('Otonio', '17', 'Miercoles, 20 de Abril', '75%', '100%', 'Nublado con posibilidad de que te cagu...s mojando');
const winter = new Season('Invierno', '5', 'Martes, 23 de Agosto', '80%', '20%', 'Muy frio, que me devuelvan el Verano');
const spring = new Season('Primavera', '25', 'Viernes, 31 de Septiembre', '90%', '0%', 'Este dia no existe, tuki');
const allSeasons = [summer, autumn, winter, spring];

//Funcion para terminar mi programa
function exit(){
  userAnswer = false;
}

//Iniciando el programa
let userAnswer = true
do {
  let welcomeMessage = prompt('Bienvenido a WeatherApp, que desea hacer?\n\n1. Ver algun clima preestablecido e imprimirlo en consola?\n2. Crear su propio clima?\n3. Salir');
  if(welcomeMessage === '1'){
    getPreWeather(); //Toma un clima preestablecido y lo imprime en consola
    exit();
  } else if(welcomeMessage === '2'){
    newWeather(); //Construye nuevo clima, guarda e imprime en consola
    exit();
  } else exit(); //Salida
} while(userAnswer)