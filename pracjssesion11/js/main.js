

/*
1. Cuenta el numero de vocales
Input: kodemia doceava generación
Output: 13
Input: el pájaro dev
Output: 5
------------------------------
1- Obtener string del usuario
2- Se guarda el sting en una variable
3- Se crea un sting que contenga las vocales
4- Se crea una variable para el contador
5- Se recorre el string letra x letra buscando si es vocal, si es vocal se le suma 1 al contador
6- Se imprime el contador
*******************************
*/

var ptext= prompt("Ingresa cadena de texto para contar las vocales");
var vocals = "aeiou";
var counter = 0;
var letter;
var completter;

for(i=0; i<=ptext.length; i++){
    letter = ptext.charAt(i);
    console.log(letter);
    for(i=0; i<=vocals.length; i++){
        completter = vocals.charAt(i);
        console.log(completter);
        if(letter == completter){
            counter = counter + 1;
            }
        }
}

console.log("El numero de vocales son: " + counter);


/*
2. Cuenta el numero de espacios
Input: Más cuerdo es, el que acepta su propia locura
Output: 9
Input: Me volví loco, con largos intervalos de horrible cordura
Output: 9
*/

/*
3. Se le al derecho y al reves
Input:Sé verla al revés
Output: true
Input: La mañana es fría
Output: false
Input:Yo hago yoga hoy
Output: true
Input: Y natación mañana
Output: false
*/

/*
4.
Crear una función que evalúe un string con las siguientes pruebas:
Tener al menos 8 carácteres
Tener al menos un número
Tener al menos una mayúscula
Devolver true si el string cumple con las reglas, o imprimir en consola la regla o reglas que no se están cumpliendo
:ojos:
1
*/

/*
y el pilón:
crear una función que genere un string con "n" caracteres aleatorios,  con la única condición de que no haya caracteres repetidos en el string
ejemplo correcto:
input: 10
output: asdfqwerzx
*/