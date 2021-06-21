
/*--------
ejercicio 1: Comparar 2 strings, y determinar cuál de ambos es el más largo
input: "string 1", "some larger string"
output: "el string { string } es el más largo"
---------*/
/*
var prchain1= prompt("Ingresa primera cadena de texto");
var prchain2 = prompt("Ingresa segunda cadena de texto");
var resultado;


        if (prchain1.length > prchain2.length){
           resultado = "el string " + prchain1 + " es mas largo";
        }
        else{
            resultado = "el string " + prchain2 + " es mas largo";
        }

        console.log(resultado);
*/

/*ejercicio 2: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input: "a very large string"
output: "A VeRy lArGe sTrInG"
input: "abcdefg"
output:"AbCdEfG"
---------*/


/*Metodologia a seguir
1- Obtener string del usuario
2- Se guarda el string en una variable
3- Se recorre el string letra por letra
4- Se compara usando modulo para saber si par o impar
5- Si es par se aplica el metodo toUpperCase a la letra
6- Si es impar se aplica el metodo toLowerCase a la letra
7- Se guarda en una variable
8- Se imprime la nueva variable 
*/


var prchain= prompt("Ingresa cadena de texto para convertir");
var newword;
var newchain;

for(i=0; i<=prchain.length; i++){
    if((i % 2 ) == 0){
        newword = prchain.charAt(i);
        newword = newword.toUpperCase();
        newchain = newchain + newword;
    }else{
        newword = prchain.charAt(i);
        newword = newword.toLowerCase();
        newchain = newchain + newword;
    }
}

console.log("El nuevo string es: " + newchain);


/*ejercicio 3: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input:"Kodemia"
output:"aimedoK"
--------*/


/*
    crear una función que me diga si un string comienza con vocal, consonante, número o un caracter especial
    usar match
*/

/* El string empieza y termina con la misma letra
    input: anaconda
    output: true

    input: belzeebub
    output: true

    input: koder
    output: false

    input: cerveza
    output: false
*/

