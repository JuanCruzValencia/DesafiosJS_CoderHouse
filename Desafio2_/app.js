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
do{
    //Declaro las variables en la que voy a guardar el producto
    const product = prompt('Ingrese el nombre del producto que desea comprar');
    //Declaro la variable para guardar el valor del producto
    const price = Number(prompt(`Por favor ingrese le valor del producto: ${product}`));
    //Declaro la variable para guardar la cantidad de cuotas
    const dues = Number(prompt('Por favor indique si desea hacerlo en 1, 6, 12 o 18 cuotas'));
    //Funcion que devuelve el impuesto segun cantidad de cuotas elegidas
    const taxes = (dues) => {
        let tax = 0;
        if(dues == 1){
          tax = 1;
        }
        if(dues == 6){
          tax = 5;
        }
        if(dues == 12){
          tax = 10;
        }
        if(dues == 18){
          tax = 20;
        }
        return tax;;
        };
    //Funcion para saber cuanto es el recargo
    const totalProduct = (price) => {
        result = (price * taxes(dues)) / 100;
        return result;
    };
    //Funcion para saber cual es el total
    const totalProductWithTax = () => {
        result = price + totalProduct(price);
        return result;
    }
    //Que se imprima en pantalla toda la informacion recolectada
    document.write(`<br>Producto: ${product}<br>`);
    document.write(`Precio: ${price}<br>`);
    document.write(`Cuotas: ${dues}<br>`);
    document.write(`Impuesto: ${taxes(dues)}%<br>`);
    document.write(`Total recargo: $${totalProduct(price)}<br>`);
    document.write(`Total con impuesto: $${totalProductWithTax()}<br>`);
    document.write(`Total cuota: $${(totalProductWithTax()/dues).toFixed()}<br>`);
    //Salida del bucle
    const exit = confirm('Desea consultar por otro producto?');
    if(exit == false){
        newProduct = false;
    };
} while(newProduct)
