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

Usando el bucle que consideres correcto, crea un programa que reciba un número a través de un mensaje y 
muestre todos sus divisores (divisores)  a través de la consola.

Consejo : DIVISORES/DIVISORES: son todos números naturales que dividen exactamente a otro número natural. Ejemplo: 
“Los divisores de '15' son: 1, 3, 5 y 15. (La división de '15' entre cualquiera de estos números es exacta)

Supongamos que se ingresó 50. Este sería el resultado 50, 25, 10, 5, 2, 1 ¡
Consejo! recordar o investigar al operador % 
 
let numero = prompt("Por favor, ingresa un número para encontrar sus divisores:");
numero = Number(numero)
console.log(`Los divisores de '${numero}' son:`);
for (let i = numero; i >= 1; i--) {
    if (numero % i == 0) {
        console.log(i);
    }
}
Teniendo en cuenta la función de timbre, crea un bucle (el que consideres) 
que muestre una cadena a través de la consola que a su vez concatene la cadena que devuelve la función 
tantas veces como el número que el usuario ingresa en el teclado.

Por ejemplo, si el usuario ingresa el número 5, el resultado debería ser:
Ding Dong, Ding Dong, Ding Dong, Ding Dong, Ding Dong 

function Campana() {
    console.log("Ding Dong");
    return "Ding Dong";
}
let veces = prompt("¿Cuántas veces quieres que suene la campana?");
veces = Number(veces);


let resultado = "";


for (let i = 0; i < veces; i++) {
    resultado += Campana();
    if (i < veces - 1) { 
        resultado += ", ";
    }
}


console.log(resultado);
Partiendo de las constantes dateLimit y fechas , haz un bucle (el que consideres) 
que muestre en la consola las fechas del array que sean mayores o iguales a la fecha almacenada en la constante dateLimite .

límite de fecha constante = "1997-8-3"

fechas constantes = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

const dateLimit = "1997-08-03";
const fechas = ["1984-02-18", "1998-03-02", "1973-07-15", "2024-10-31", "2081-01-09"];

for (const fecha of fechas) {
  if (fecha >= dateLimit) {
    console.log(fecha);
  }
}




/*
Usando un bucle "for of", cree una matriz de cadenas con colores e imprima cada uno de los colores 
incluidos en la matriz a través de la consola.

En la consola debería verse así (por ejemplo):

Rojo

Verde

Azul

Violeta

Marrón

Negro

Blanco

const colores = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];

for (const color of colores) {
  console.log(color);
}
Ahora toma como referencia el bucle del ejercicio anterior y colócalo dentro de una función para 
que realice la misma tarea pero pueda reutilizarse tantas veces como sea necesario sin tener que reescribir el código 
del bucle.
function imprimirColores(colores) {
    for (const color of colores) {
        console.log(color);
    }
}


const colores = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];
imprimirColores(colores);

/*Usando un bucle "for of", crea un arreglo con 5 números y haz un programa que recorra ese arreglo y 
muestre el doble de cada uno de los elementos, en la consola.

En la consola debería verse así:

el número es 5 y su doble es 10
el número es 7 y su doble es 14
el número es 1 y su doble es 2
el número es 3 y su doble es 6
el número es 50 y su doble es 100

function imprimirDobleDeNumeros(numeros) {
    for (const numero of numeros) {
        console.log(`el número es ${numero} y su doble es ${numero * 2}`);
    }
}

const numeros = [5, 7, 1, 3, 50];
imprimirDobleDeNumeros(numeros);

Usando el bucle que creas correcto crea un array con al menos 4 objetos con 4 propiedades, 
cada uno de esos objetos creados debe representar a un miembro de un grupo familiar
(pueden ser personas ficticias).

Luego haz un programa (al decir programa la intención es que no sea solo el bucle, sino una función que contenga el bucle)
 que muestre un mensaje de presentación para cada elemento del array a través de la consola.

En la consola debería verse como el ejemplo.

Hola, soy María López (madre) y tengo 40 años.
Hola, soy Juan Perez (padre) y tengo 38 años.
Hola, soy Romina Perez (hija) y tengo 13 años.
Hola, soy Tomás Perez (hijo) y tengo 10 años.

Modelo de objetos

{nombre: 'Juan', apellido: 'Pérez', edad: 38, miembro: 'padre'}

¡Consejo! use comillas invertidas para esto.

const familia = [
    { nombre: 'María', apellido: 'López', edad: 40, miembro: 'madre' },
    { nombre: 'Juan', apellido: 'Pérez', edad: 38, miembro: 'padre' },
    { nombre: 'Romina', apellido: 'Pérez', edad: 13, miembro: 'hija' },
    { nombre: 'Tomás', apellido: 'Pérez', edad: 10, miembro: 'hijo' }
  ];
  console.log(familia) 

  function presentarFamilia(familia) {
    for (const miembro of familia) {
      console.log(`Hola, soy ${miembro.nombre} ${miembro.apellido} (${miembro.miembro}) y tengo ${miembro.edad} años.`);
    }
  }
  

  presentarFamilia(familia);

  Nivel de dificultad: alto
 
Utilizando el bucle que consideres, crea un programa que permita el ingreso de números en la pantalla 
a través de un aviso y

calcula la suma de los números pares por un lado y

los números impares por el otro.

La entrada de datos finaliza cuando el usuario ingresa un 0. 

En la consola debería verse así (por ejemplo):

Número par: 38

Números impares 30


let numero;
let sumaPares = 0;
let sumaImpares = 0;

while (true) {
    numero = Number(prompt("Por favor, ingresa un número (ingresa 0 para terminar):"));

    if (numero === 0) {
        break; 
    } else if (numero % 2 === 0) {
       
        sumaPares += numero;
    } else {
       
        sumaImpares += numero;
    }
}

console.log(`Suma de números pares: ${sumaPares}`);
console.log(`Suma de números impares: ${sumaImpares}`);

Usando el bucle que creas que es correcto, crea una matriz de 10 números y crea un programa que imprima 
el número más grande de la matriz en la pantalla.



const numeros = [5, 10, 2, 8, 15, 7, 20, 3, 12, 6];

let maximo = numeros[0]; 


for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
        maximo = numeros[i];
    }
}

console.log(`El número más grande en la matriz es: ${maximo}`);*/
