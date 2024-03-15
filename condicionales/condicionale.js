
/*let num1=Number(4)

let num2=Number(5)

if(num1>num2)
{Number(console.log(num1))}
else(num2>num1)
{console.log(num2)}


if (num1>num2)
{Number(console.log(num1))}
else if (num2>num1)
{console.log(num2)}
else{console.log("Los numeros son iguales")}




let igual=(false)
let desigual=(true)

if(igual)
{console.log("Los números son iguales")}
else if(desigual)
{console.log("los numeros son diferentes")}





let fecha1=("2018-9-2")
let fecha2=("2023-7-5")

let fechas=(fecha2>fecha1)

switch (fechas) 
   {case fecha2<fecha1:
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
break;
case fecha2>fecha1:
    console.log(`La fecha ${fecha2} es mayor que ${fecha1}`);
break;
case fecha2=fecha1:
console.log ("Las fechas son iguales");
break;
default:
    console.log("Ninguna de las anteriores")

} 

console.log("ya esta")


        
// let fechaA=("2018-9-2")
// let fechaB=("2023-7-5")
// let comparacion=(fechaB>fechaA)
   
  // if (comparacion) {
  // console.log(`La ${fechaB} es mayor que ${fechaA}`);} 
  // else if (comparacion) 
  // {console.log(`La ${fechaA} es menor que ${fechaB}`);
  // } 
        



// let numero1=5        
/*let numero2 =7
let numero3 =9


let mayor=(numero3 > numero1 && numero3 > numero2)

if (mayor) 
{console.log(`El ${numero3} es el mayor`)}
else if (mayor) {console.log(`El ${numero2} es el mayor`)}
else if (mayor)
  {console.log(`El ${numero1} es el mayor`)
}
  
    


 

//  const colores=prompt("Ingrese color rojo, azul,verde")

// switch(colores){
// case "rojo":confirm("El color de la pasión");
// case "azul":confirm("El color del mar");
// case"verde":confirm("El color de la naturaleza")


  // default:
  // confirm("null")
}

// const operaciones=prompt("Ingrese la operacion sumar,restar,multiplicar,dividir")
// const numer1=Number(prompt("Ingrese un numero del 1 al 100"))
// const numer2=Number(prompt("Ingrese otro numero del 1 al 100"))


// switch (operaciones) {
  // case "sumar":
    // confirm(`El resultado es:${numer1+numer2}`);
//  break;
  // case "restar":
    // confirm(`El resultado es:${numer1-numer2}`);
  // break;
  // case "multiplicar":
    // confirm(`El resultado es:${numer1*numer2}`);
  // break;
  // case "dividir":
    // confirm(`El resultado es:${numer1/numer2}`);
  // break;
   // default:
    // 
    // confirm("Operacion no valida");
    // break;


// A partir de la siguiente estructura, cree un bloque condicional que
// recibe 2 objetos que representan personas con las propiedades:  nombre, edad, altura
// e imprimir por consola en el mismo console.log:
// ¿Cuál de las dos personas es más alta?
// ¿Cuál es el mayor?
// ¡Consejo! Puede utilizar operadores lógicos o if anidados.
// dejar persona = {
//  nombre = Juan,
//  edad = 39,
//  altura = 1,69
// Resultado de ejemplo : "Juan es más alto y mayor que Rosa"


const persona1={
nombre: "Juan",
edad :Number(39),
altura : Number(1,69)
}
const persona2={
nombre:"Rosa",
edad :Number (36),
altura :Number (1,70)
}

if(persona1 && persona2){ 
  persona1 > persona2
console.log("Juan es Mayor que Rosa")
} else {
  console.log("Rosa es mayor que Juan")
}

if(persona1 && persona2){ 
  persona1> persona2
  console.log("Rosa es mas alta que Juan")
} else {console.log("Juan es mas alto que Rosa")
  
}


/*
// Crea un programa que te permita ingresar en la pantalla:
// tu nombre, edad, altura y visión .
// e imprimir a través de la consola una cadena “ Estás calificado para conducir ”,
// Para ello la persona debe:
// Tener al menos 18 años.
// Mide más de 110 cm.
// Tener una visión de al menos 8 sobre 10.
// ¡Consejo! Recuerde el mensaje ( ) para ingresar datos en la pantalla.
*/

/*let nombreIngresado = prompt('Ingrese su nombre')
if(nombreIngresado )
{console.log(`Bienvenido/a ${nombreIngresado}`)};
let edadIngresada=Number(prompt("Ingrese su edad")>=18)
if( edadIngresada){
  console.log(`${nombreIngresado} Estás calificado para conducir`)
}else(edadIngresada<18) 
{console.log(`${nombreIngresado} Eres menor de edad`)}



  
  
  // Crea un programa que te permita ingresar tu edad en la pantalla e imprimirla en la pantalla si eres:
// infantil (0 a 12 años)
// adolescente (de 13 a 18 años)
// joven mayor (19 a 45 años)
// personas mayores (mayores de 45 años)
// ¿Es realmente tan viejo? (más de 100 espectáculos)
// ¡Consejo! Recuerde alerta ( ) para mostrar datos en la pantalla.


let edad = prompt("Por favor, ingresa tu edad:");

edad = Number(edad);

if (!isNaN(edad)) {
    if (edad >= 0 && edad <= 12) {
        alert("Eres infantil.");
    } else if (edad >= 13 && edad <= 18) {
        alert("Eres adolescente.");
    } else if (edad >= 19 && edad <= 45) {
        alert("Eres joven mayor.");
    } else if (edad > 45 && edad <= 100) {
        alert("Eres una persona mayor.");
    } else if (edad > 100) {
        alert("¿Es realmente tan viejo?");
    } else {
        alert("Por favor, ingresa una edad válida.");
    }
} else {

    alert("Por favor, ingresa un número válido como tu edad.");
}


const numeros=Number(prompt("Ingrese un numero del 1 al 3"))
const otroNumero=Number(prompt("Ingrese un numero, es libre de elegir"))


  const suma=Number(numeros+otroNumero)
  alert(`El número ingresado es:${suma}`)
  const doble=Number(suma*2)
  alert(`El doble del número ingresado es: ${doble}`)
  const triple=Number(suma*3)
  alert(`El triple del número ingresado es: ${triple}`)
  







/*Nivel de dificultad: alto
Cree un programa que permita ingresar los siguientes datos en pantalla:

Nombre del cliente ,  Pase (vip o normal), Entrada (sí o no).
Personas que tienen tu nombre ==> muestran un mensaje de bienvenida
o pase VIP  ==> mostrar un mensaje de bienvenida
Si tienes un billete , pregunta si quieres usarlo.
Si es afirmativo ==> mostrar un mensaje de bienvenida
Si es negativo ==> mostrar mensaje de despedida
Y por último en caso de no tener el mismo nombre o pase o entrada VIP , preguntar “¿quieres comprar?”. Y en caso:
negativo ==> mostrar mensaje de despedida
afirmativo ==> solicitar dinero disponible, en caso:
Más de 1000 ==> muestra una venta exitosa y un mensaje de bienvenida
Menos de 1000 ==> mostrar mensaje de rechazo de ventas


let nombreCliente = prompt("Por favor, ingresa tu nombre:");
let tipoPase = prompt("¿Tienes pase VIP o normal? Ingresa 'vip' para VIP, de lo contrario, cualquier texto para normal.");
let tieneEntrada = prompt("¿Tienes una entrada? Ingresa 'sí' para confirmar, cualquier otro texto significa 'no'.");

let nombre = "Alejandra";
if (nombreCliente == nombre|| tipoPase == "vip") {
    alert("¡Bienvenido/a al evento!");
} else if (tieneEntrada == "sí") {
    const usarEntrada = confirm("Tienes una entrada, ¿quieres usarla?");
    if (usarEntrada) {
        alert("¡Bienvenido/a al evento!");
    } else {
        alert("¡Hasta la próxima!");
    }
} else {
  const quiereComprar = confirm("No tienes el mismo nombre ni pase VIP ni entrada. ¿Quieres comprar una entrada?");
    if (quiereComprar) {
        const dineroDisponible = prompt("Por favor, ingresa cuánto dinero tienes disponible:");
        dineroDisponible = Number(dineroDisponible);
        if (dineroDisponible > 1000) {
            alert("¡Venta exitosa! ¡Bienvenido/a al evento!");
        } else {
            alert("Lo siento, no tienes suficiente dinero para comprar la entrada.");
        }
    } else {
        alert("¡Hasta la próxima!");
    }
}*/
