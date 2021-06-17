//alert("hola koders!")
/*console.log("hola koders desde consola")
console.error("Houston, tenemos un problema")
console.warn("cuidado!")
console.log()*/

//prompt("Ingresa tu nombre:")

/*
    operadores de asignación:
    = -> Asignación
    += -> Asignación con adición
    -= -> Asignación con sustracción
    *= -> Asignación con multiplicación
    /= -> Asignación con división
    %= -> Asignación con módulo
*/

//var foo /*declaración*/

//foo = "Lestat" /* asignación */

/*
var name = prompt("ingresa tu nombre")
var lastName = prompt("Ingresa tu apellido")
console.log( name )
console.log( lastName )
console.log('nombre completo: ' + name +  lastName )
var age = 31
console.log( typeof name )
console.log( typeof age )
*/
//var someNumber = 5
//var someOtherNumber = 7

//console.log( someNumber + someOtherNumber )
//console.log( someNumber - someOtherNumber )
//console.log( someNumber * someOtherNumber )
//console.log( someNumber / someOtherNumber )
//console.log( someNumber % someOtherNumber )

//var thirdNumber = "37"

//console.log( someNumber + thirdNumber )
//console.log( thirdNumber + someNumber )

/*operadores de comparación:
== comparación
=== extrema comparación
!= diferente
!== extremadamente diferente
> mayor que 
< menor que
>= mayor o igual que
<= menor o igual que
*/

//var testNumber = 12
//var testStringNumber = "12"

//console.log( testNumber == testStringNumber)
/*true*/

//console.log( testNumber === testStringNumber)
/*false*/

//console.log( testNumber != testStringNumber )
/*false*/

//console.log( testNumber !== testStringNumber )
/*true*/

//var string1 = "a"
//var string2 = "b"

//console.log(   string1 > string2 )
/*true ( comparación lexicográfica )*/

/*ejercicio 1:
pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números*/

/*var numberpromt1 = prompt("Ingresa el primer numero");
var numberpromt2 = prompt("Ingresa el segundo numero");
var number1= parseInt(numberpromt1);
var number2= parseInt(numberpromt2);
var resultado;
console.log(number1);
console.log(number2);
resultado= number1 + number2;
console.log("La suma de los numeros es: " + resultado);
resultado= number1 - number2;
console.log("La resta de los numeros es: " + resultado);
resultado= number1 * number2;
console.log("La multiplicacion de los numeros es: " + resultado);
resultado= number1 / number2;
console.log("La division de los numeros es: " + resultado);*/


/*
    ejercicio 2:
    pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo
*/

/*
    ejercicio 3:
    pedir al usuario dos letras, y determinar si la primera aparece antes o después en el alfabeto
    */

/*
    ejercicio 4:
    pedir al usuario que te de su nombre y que de resultado imprima el nombre en minusculas y apellidos en mayusculas
    */

    var promptname = prompt("Ingresa tu nombre");
    var promptlastname = prompt("Ingresa tu apellido");
    var nombre = promptname.toLowerCase();
    var apellido = promptlastname.toUpperCase();
    var nombreCompleto = nombre + " " + apellido;
    console.log("Tu nombre es: " + nombreCompleto);