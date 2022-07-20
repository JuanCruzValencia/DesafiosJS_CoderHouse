/* MENSAJE DE BIENVENIDA Y PROMP DE NOMBRE  */
let value = true;
do {
    //Declaro variable para guardar el nombre
    let user = prompt('Bienvenido! por favor diganos su nombre :D');
    //Condicional para verificar que el ingreso sea valido
    if(isNaN(user) && user == null && user == ""){
        alert('Ingresa un nombre valido por favor!');
    } else{
        value = false;
        alert(`Hola ${user} ! en este desafio te voy a pedir que ingreses un numero y yo te voy a decir cual es la suma de ese numero mas todos sus anteriores! XD`);
        /* SE PIDE EL NUMERO Y SE GUARDA EN UNA VARIABLE */
        let number = Number(prompt(`Pensa tu numero y decimelo ${user}`));
        /* CONDICION Y BUCLE PARA RESOLVER EL PROBLEMA */
        if(!isNaN(number) && number != null && number != "") {
            if(number > 0) {
                let sum = (number) => {
                    let result = 0;
                    for(let i = number; i > 0; i--) {
                        result = result + i;
                    };
                    return result;
                }
                alert(`${user} la suma de tu numero ${number} y todos sus anteriores es ` + sum(number));
            } 
        } else {
            alert(`${user} el dato ingresado no es un numero, no trates de romper mi programa -.-`);
            }
        }
    } while (value);

