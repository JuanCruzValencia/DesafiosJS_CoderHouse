// Vamos a crear un programa que calcule las cuotas de varios productos y los plasme en pantalla

// Primero deberiamos decir que producto quiero comprar
// Despues ingresar cuanto sale el producto ingresado
// Ingresar la cantidad de cuotas en las que quiero pagar
// Sumar el interes segun las cuotas
// Calcular el valor de las cuotas
// Devolver el nombre del producto, el precio total y el pecio de cada cuota en un listado
// Consultar si quiere ingresar otro producto y sumarlo

//Mensaje de bienvenida y bucle que me va a servir para luego agregar mas productos al carrito
window.confirm('Hola bienvenido al calculador de cuotas, desea calcular un producto?');
let newProduct = true;
//Almaceno el nombre del usuario para identar el carrito
let userName = prompt('Por favor ingrese su nombre.');
//Imprimo en pantalla el nombre del carrito
document.write(`<br>Carrito de: ${userName}<br>`);

do{
    //Declaro la funcion que va a iniciar mi programa
    function duesCalculator(productName, productPrice, duesChossen){
        //Declaro la funcion que me devuelve el interes segun la cantidad de cuotas elegidas
        function taxes(dues){
            switch(dues){
                case 1:
                    return 1;
                case 3:
                    return 10;
                case 6:
                    return 20;
                case 12:
                    return 30
            };
        };
        //Declaro la funcion para calcular el valor de la cuota
        function duesPay(total, dues){
            let result = total / dues;
            return result;
        };
        //Declaro la funcion que me devuelce el precio con los impuestos
        function total(price, tax){
            let partial = (price*tax)/100;
            let total = price + partial;
            return total;
        };
        //LLamo la funcion por el porcentaje de impuestos y lo guardo en una nueva variable
        let totalTax = taxes(duesChossen);
        //LLamo a la funcion del total y lo guardo en una nueva variable
        let totalProduct = total(productPrice, totalTax);
        //Llamo a la funcion por el valor de cuota y lo guardo en una variable
        let duesPayment = duesPay(totalProduct, duesChossen);
        //Imprimo en pantalla el carrito
        document.write(`<br>Producto: ${productName}<br>`);
        document.write(`Precio: $${productPrice}<br>`);
        document.write(`Cuotas: ${duesChossen}<br>`);
        document.write(`Impuestos: ${totalTax}%<br>`);
        document.write(`Precio + impuesto: $${totalProduct}<br>`);
        document.write(`Precio de cuotas: $${duesPayment}<br>`);
        //Salida del bucle
        const exit = confirm('Desea consultar por otro producto?');
        if(exit == false){
            newProduct = false;
        };
    };
    //Decalro las variables que necesito almacenar
    let productName = prompt(`${userName} ingrese el nombre del producto que quiere agregar al carrito.`);
    let productPrice = Number(prompt(`${userName} ingrese el valor de: ${productName}.`));
    let duesChossen = Number(prompt(`Indique la cantidad de cuotas en la que desea pagar, los ingresos validos son una cuotas, 3 cuotas, 6 cuotas o 12 cuotas.`));
    //llamo a la funcion que va a iniciar mi programa
    duesCalculator(productName, productPrice, duesChossen);

} while(newProduct)