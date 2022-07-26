//Implementando las clases pasadas al nuevo modelo 

//Modelo de clase
class Season {
    constructor(temperature, date, humidity, precipitation, extraInfo){
        this.temperature = temperature,
        this.date = date,
        this.humidity = humidity,
        this.precipitation = precipitation,
        this.extraInfo = extraInfo
    };
};

//Objetos preconstruidos
const summer = new Season('32°', 'Lunes 10', '98%', '10%', 'Soleado');
const autumn = new Season('17°', 'Miercoles 20', '75%', '40%', 'Nublado con chaparrones');
const winter = new Season('5°', 'Martes 23', '80%', '90%', 'Frio y lluvias');
const spring = new Season('25°', 'Viernes 31', '90%', '0%', 'Despejado');
const allSeasons = [summer, autumn, winter, spring];

//funcion que me permite contruir un nuevo clima
function newWeather(){
    let newTemp = prompt('Ingrese la temperatura que desea ver');
    let newDate = prompt('Ingrese la fecha que desea ver');
    let newHumidity = prompt('Ingrese la humedad que desea ver');
    let newPrecipitation = prompt('Ingrese la precipitacion que desea ver');
    let newInfo = prompt('Ingrese la info que desea ver');
    let newSeason = new Season(newTemp, newDate, newHumidity, newPrecipitation, newInfo);
    allSeasons.push(newSeason);
};

//Mensaje de bienvenida y pregunta que desea hacer el usuario
const newInput = confirm('Bienvenido a la nueva aplicacion del clima personalizable, desea ingresar su porpia informacion o elegir una de las preestablecidas?');
if(newInput){
    //Si elige crear su informacion llama a la funcion que construye un nuevo clima y luego imprime en consola
    newWeather();
    console.log(allSeasons[allSeasons.length - 1]);
} else{
    //Si quiere ver unos preestablecido elige cual mediante el condicional y luego imprime en consola
    let preWather = prompt('Elija uno de los climas preestablecidos: Verano, Invierno, Primavera u Otonio').toLowerCase();
    switch(preWather){
        case 'verano':
            console.log(allSeasons[0]);
            break;
        case 'invierno':
            console.log(allSeasons[2]);
            break;
        case 'primavera':
            console.log(allSeasons[3]);
            break;
        case 'otonio':
            console.log(allSeasons[1]);
            break;
        default:
            alert('El clima elegido no existe');
            break;
    }
}