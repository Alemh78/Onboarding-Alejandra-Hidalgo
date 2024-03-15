/*Usando un bucle "for", cree un programa que permita el ingreso de un número entre 1 y 100 a través de un mensaje , 
luego imprima a través de la consola todos los números que están entre el número ingresado y 0 
(es decir, en orden descendente) .

Supongamos que el número introducido es 5. Este sería el resultado:

5
4
3
2
1
0
let numeroIngresado = prompt("Ingrese un número entre 1 y 100:");
numeroIngresado = Number(numeroIngresado);

if (numeroIngresado >= 1 && numeroIngresado <= 100) {
    for (let i = numeroIngresado; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("El número ingresado no está en el rango de 1 a 100.")};/*

2)Usando un bucle "for", cree un programa que permita la entrada de un número a través de un mensaje entre 1 y 10, 
y muestre a través de la consola su tabla de multiplicar (solo los primeros 10 múltiplos).

Supongamos que el número ingresado es 5. Este sería el resultado:

1x5=5
2x5=10
3x5=15
4x5=20
5x5=25
6x5=30
7x5=35
8x5=40
9x5=45
10x5=50

let numero = prompt("Ingrese un número entre 1 y 10:");
numero =Number(numero);

if (numero >= 1 && numero <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`);
    }
} else {
    console.log("El número ingresado no está en el rango de 1 a 10.");
}
3)Usando un bucle " while ", cree un programa que permita la entrada de números a través de un mensaje. 
Los números deben sumarse (acumularse) en una variable resultante. La entrada de números finalizará cuando el usuario ingrese un 0. 
Al final, muestre el valor de la variable suma a través de la consola.

Supongamos que ingresó 1, luego 3 y luego 0. Este sería el resultado: 4 . 
¡Consejo! Tenga cuidado, recuerde que el mensaje devuelve una cadena.

let suma = 0;
while (true) {
    let numero = prompt("Ingrese un número. Ingrese 0 para finalizar:");
    numero = Number(numero);

    if (numero === 0) {
        break;
    }

    suma += numero;
}

console.log("El resultado de la suma es:", suma);

Usando ahora un bucle "do while" y siguiendo las mismas instrucciones del ejercicio anterior, 
visualiza en la consola, el valor de la variable que acumula la suma de los números ingresados.

Supongamos que ingresaste 1, luego 3 y luego 0. Este sería el resultado: 4

¡Consejo! use comillas invertidas para esto.

let suma = 0;
let numero;

do {
    numero = prompt("Ingrese un número. Ingrese 0 para finalizar:");
    numero = Number(numero);
    
    if (!isNaN(numero)) {
        suma += numero;
    }
} while (numero !== 0);

console.log(`El resultado de la suma es: ${suma}`);

Usando un bucle "for in", crea un objeto con al menos 5 propiedades, haz un programa que recorra 
dicho objeto y solo muestre todas las claves de sus propiedades en la consola.

En la consola debería verse así:

nombre

apellido

origen

estudios

let persona = {
     nombre:"Maria",
     apellido:"Gómez",
     origen:"Argentina",
     estudios:"Ingeniería",
     edad: 25
 }
 
 for (let clave in persona) {
     console.log(clave);
 }

 Usando un bucle "for in", cree un programa que se ejecute a través del objeto creado en el ejercicio anterior 
y solo muestre los valores de cada una de las claves en la consola. 

let persona = {
     nombre:"Maria",
     apellido:"Gómez",
     origen:"Argentina",
     estudios:"Ingeniería",
     edad: 25
 }
for (let clave in persona) {
     let valor = persona[clave];
     console.log(valor);
 }
 ivel de dificultad: Medio
Usando el bucle que consideras, vamos a utilizar la variable que almacenó la suma de los números en el ejercicio 3 
como "número secreto". El nuevo programa permitirá ingresar números a través de un mensaje hasta que el número ingresado
 sea igual al guardado en la variable del ejercicio #3

let numeroSecreto = 4; 
let intentos = 0; 

do {
    let numeroIngresado = prompt("Ingrese un número:");
    numeroIngresado = Number(numeroIngresado);
    intentos++; 

    
    if (numeroIngresado === numeroSecreto) {
        console.log(`¡Has acertado! El número secreto era ${numeroSecreto} y has hecho ${intentos} intentos`);
        break; 
    }if (numeroIngresado > numeroSecreto) {
        console.log("El número ingresado es mayor que el secreto. Intenta de nuevo.");
    } else {
        console.log("El número ingresado es menor que el secreto. Intenta de nuevo.");
    }
} while (true);


let numero = prompt("Ingrese un número:");
numero = Number(numero);

console.log(`Los divisores de '${numero}' son:`);


for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) { 
        console.log(i);
    }
}
*/

