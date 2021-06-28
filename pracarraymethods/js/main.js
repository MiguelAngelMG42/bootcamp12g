const personajes = [
    {id: 1, nombre: 'Jaime', familia: 'Lannister', edad: 34},
    {id: 1, nombre: 'Arya', familia: 'Stark', edad: 11},
    {id: 1, nombre: 'Oberyn', familia: 'Martell', edad: 41},
    {id: 1, nombre: 'Sansa', familia: 'Stark', edad: 13},
    {id: 1, nombre: 'Jon', familia: 'Snow', edad: 14},
    {id: 1, nombre: 'Theon', familia: 'Greyjoy', edad: 21},
    {id: 1, nombre: 'Daenerys', familia: 'Targaryen', edad: 17},
    {id: 1, nombre: 'Cersei', familia: 'Lannister', edad: 34},
];
/*
//Forma sin metodos de array
let lannister = [];
for (let i = 0; i < personajes.length; i++){
    if (personajes[i].familia === 'Lannister'){
        lannister.push(personajes[i]);
    }
}

console.log(lannister);
*/

/*
//Usando el metodo filter
const lannisters = personajes.filter(function (personaje){
    return personaje.familia === 'Lannister';
});

console.log(lannisters);
*/
/*
//Forma reducidad del filter
const lannisters = personajes.filter((personaje) => personaje.familia === 'Lannister'
);

console.log(lannisters);
*/
/*
//Otra forma de usar el filter
const esLannister = (personaje) => personaje.familia === 'Lannister';
const lannister = personajes.filter(esLannister);
console.log(lannister);
*/
//Map te genera un nuevo arreglo con lo que le indiques que haga la funcion en este caso trae un arreglo con los nombres de los personajes
/*const nombrePersonajes = personajes.map((personaje) => personaje.nombre);
console.log(nombrePersonajes);
*/
//Ejemplo de map que te genera un objeto
/*const nombrePersonajes = personajes.map((personaje) => ({ 
        nombre: personaje.nombre,
        edad: personaje.edad
    }));

console.log(nombrePersonajes);
*/

//Mismo ejemplo anterior pero usando destructuring
/*const nombrePersonajes = personajes.map(({ nombre, edad }) => ({ 
    nombre,
    edad,
}));

console.log(nombrePersonajes);
*/


//*******************************************************************************************************
//const numbers = [1, 2, 3, 1, 2, 3, 4, 5, 6];
/*
//Modo 1
const nums = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

console.log(nums);
*/
/*
//Modo 2 
const estaRepetido = (value, index, arr) => {
    return arr.indexOf(value) === index;
};

const nums2 = numbers.filter(estaRepetido);
console.log(nums2);
*/
//**************************************************************************************

const numbers = [1, 2, 3, 4, 5, 6];
//Primera forma
/*
const doubleNumber = numeros.map((number) => {
    return number * 2;
})

console.log(doubleNumber)
*/
//Segunda Forma
const doubleNumber = (number) => {
    return number * 2;
}

const numberx2 = numbers.map(doubleNumber);

console.log(numberx2);
