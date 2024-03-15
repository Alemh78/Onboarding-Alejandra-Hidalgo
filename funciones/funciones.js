/*Este primer ejercicio es para aprender a declarar una función. 
 En este caso debes declarar una función nombrada llamada 
"agregar" que dentro de su cuerpo, debe ejecutar una instrucción que muestre el resultado de 100 x 20 
en la consola .
 Llamar/ejecutar funciones.
Ya tenemos la declaración, el siguiente paso es llamar/ejecutar la función "agregar". 
 Ejecútalo y comprueba que el 
 resultado se muestra en la consola.

function llamada(){
    console.log(Number(100*20))
 }
 llamada();

 /*Añadiendo parámetros.
Ahora es el momento de agregar parámetros a nuestra función. Agrega dos parámetros y llámalos como quieras. 
Recuerda 
indicar dentro del cuerpo de la función donde irán esos parámetros.
Usando argumentos.
Ya hemos agregado parámetros a la declaración de nuestra función, el siguiente paso es "pasarle argumentos". 
Para hacer esto, cree dos variables como la siguiente en el ejemplo:
sea ​​número1 = 100;
sea ​​número2 = 20;
Agregando el <retorno>.
*

function numeros(numero1,numero2){
    let num=Number(numero1, numero2)
    return(num)
}

console.log(numeros(100,20))
/*Con nuestra función nombrada configurada correctamente, es hora de cambiar el console.log 
del cuerpo de la función. 
Cree una variable de resultado dentro del cuerpo de la función que almacenará el resultado de 100 x 20 
y haga que la 
función devuelva esa variable.
Convierta la función nombrada del ejercicio anterior en una función anónima y llámela/ejecútela.*

function multi(numero1,numero2){
    
    let resultado=(numero1*numero2)
    return(resultado)
}
console.log(multi(100,20))
/*
Nivel de dificultad: Medio
Cree una función con nombre llamada "saludar" que
recibe un parámetro de cadena que representa un nombre, y
muestra un saludo personalizado usando el nombre proporcionado en la consola.
Llame/ejecute la función con su propio nombre para verificar que funciona correctamente.*

function saludar(nombre){
    const yo=(`Hola,${nombre}`)

  
    return(yo)
}
console.log(saludar ("Alejandra"))

/*Crea una función anónima que

recibe dos parámetros numéricos y

devuelve el resultado de la multiplicación de ambos.

Llama/ejecuta la función con dos valores diferentes y muestra el resultado a través de la consola.*

const anonima=function (a,b) {
    const multip=(a*b)

return(multip)
}
console.log(anonima(2,3))

/*Cree una función con nombre llamada "área" que

recibe dos parámetros numéricos, uno que representa la base y el otro la altura de un triángulo.

devolver su área.

function area(base,altura){
    const triangulo=(base*altura / 2)
    return(triangulo)
}
console.log(area(6,5))

/*Cree otra función con nombre llamada "perímetro" que

recibe tres parámetros numéricos que representan cada uno de los lados de un triángulo, y

devuelve el perímetro del triángulo.

¡Consejo! Recuerda las fórmulas para el área y el perímetro de los triángulos.

function perimetro (nume1,nume2,nume3){
    const tria=(nume1 + nume2 + nume3)
    return(tria)
}


function compra(precio,productos){
    const total=(precio*productos)
return(total)
    

}

console.log(compra(1200,3))

function compra(precio, productos) {
    const totalSinDescuento = precio * productos;
    let descuento = 0;

    if (productos >= 20) {
        descuento = 0.20;
    } else if (productos >= 10) {
        descuento = 0.10;
    }

    const totalConDescuento = totalSinDescuento - (totalSinDescuento * descuento);

    return totalConDescuento;
}

console.log(compra(1200, 3)); 
console.log(compra(1200, 10)); 
console.log(compra(1200, 20)); 

/*Cree una función con nombre llamada isAnAdult que

recibe un parámetro numérico que representa la edad de una persona, y

devuelve un mensaje indicando si la persona es Adulto o no.

Si la Edad es mayor o igual a 18 "Eres mayor de edad"

Si la Edad es menor de 18 "No eres adulto"
Llama a la función con diferentes valores de edad para verificar que funciona correctamente.*


function isAnAdult(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad";
    } else {
        return "No eres adulto";
    }
}


function calcularImpuesto(ingresoAnual) {
    let impuesto;

    if (ingresoAnual <= 10000) {
        // Impuesto del 10%
        impuesto = ingresoAnual * 0.10;
    } else if (ingresoAnual > 10000 && ingresoAnual <= 20000) {
        // Impuesto del 15%
        impuesto = ingresoAnual * 0.15;
    } else {
        // Impuesto del 20%
        impuesto = ingresoAnual * 0.20;
    }

    return impuesto;
}


console.log(calcularImpuesto(5000)); 

Cree una función (declárela como desee) para verificar un día que

recibe un parámetro numérico y

devuelve un mensaje indicando si es día hábil o no.

Si el número es 1, 2, 3, 4, 5, mensaje: "Es un día hábil".

Si el número es 6 o 7, mensaje: "Es fin de semana".

Utilice la estructura de control de interruptores anidados para implementar esta función.

Llame a la función con diferentes valores de día para verificar que funciona correctamente.


function verificarDia(numDia) {
    switch (numDia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Es un día hábil";
        case 6:
        case 7:
            return "Es fin de semana";
        default:
            return "Número de día no válido";
    }
}

console.log(verificarDia(8)); 
Crea un programa usando una función (declárala como quieras) 
que toma un parámetro que representa Información Personal (ingrésala por teclado).
Primero se debe ingresar el Nombre , y

si viene vacío ==> el programa debe detenerse y mostrar una consola. error con el mensaje "El nombre no puede estar vacío"

Luego se le debe pedir al usuario que ingrese el Apellido y se debe validar como Nombre en el paso anterior.

Finalmente se debe solicitar al usuario que ingrese la edad y también se debe validar .

Una vez verificados todos los datos, la función debe guardar todos esos datos en un objeto con 3 propiedades : nombre, apellido y edad y mostrarlo a través de la consola.

Para finalizar, la función debe ser llamada/ejecutada y probada con diferentes valores.

Crea un programa que se compone de 3 funciones (declaralas como quieras):

Primera función de saludo: que toma un parámetro que representa un nombre y devuelve una cadena “Hola, mi nombre es [parámetro]”

2da función:calcularAge: que toma dos parámetros que representan el año de nacimiento y el año actual. Esta función devolverá el resultado del año actual menos el año de nacimiento.

3ª función: presente: llamar/ejecutar las otras dos funciones y ejecutar una alerta con la presentación del usuario

Los datos del usuario deben ser ingresados ​​en pantalla y el resultado final también se muestra en pantalla.

function ingresarInformacionPersonal() {
    let nombre = prompt("Ingrese su nombre:");

  
    if (nombre.trim() === "") {
        console.error("El nombre no puede estar vacío");
        return;
    }

    let apellido = prompt("Ingrese su apellido:");

   
    if (apellido.trim() === "") {
        console.error("El apellido no puede estar vacío");
        return;
    }


    let edad = prompt("Ingrese su edad:");

    if (isNaN(edad) || edad.trim() === "") {
        console.error("La edad debe ser un número válido");
        return;
    }


    let informacionPersonal = {
        nombre: nombre,
        apellido: apellido,
        edad: Number(edad)
    };


    console.log(informacionPersonal);
  

 
    presente(informacionPersonal.nombre, calcularAge(informacionPersonal.edad));
}


function saludo(nombre) {
    return "Hola, mi nombre es " + nombre;
}


function calcularAge(anioNacimiento, anioActual = new Date().getFullYear()) {
    return anioActual - anioNacimiento;
}


function presente(nombre, edad) {
    let saludoMensaje = saludo(nombre);
    let edadMensaje = "Naci en el año" + edad ;
    alert(saludoMensaje + "\n" + edadMensaje);
}


ingresarInformacionPersonal();*/