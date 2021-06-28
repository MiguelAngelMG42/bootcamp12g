/* 
let someArray = []
console.log( someArray )

//.push() agrega uno o más elmeentos al final de un array y devuelve la nueva longitud del array 

someArray.push("Misael","Jesús","Xoch", "Mike", "Jon")

console.log( someArray )

//.pop() remueve el último elemento de un array, y devuelve el item removido

someArray.pop()
console.log( someArray )

//.shift()  remueve el primer elemento de un array, y devuelve el item removido

someArray.shift()
console.log( someArray )

//.splice(index, howmany, items...)

someArray.splice(1,1,"Bulmaro","Antonio")
console.log( someArray )

*/
/*
    crear una función que permita indicar la cantidad de koders a guardar, que pida tantos nombres de koders como se indique, y al final imprima el nombre del koder y su número asignado 
    Input:"Karen", "Xoch", "Wendy"
    output:
    Koder 1:"Karen",
    Koder 2:"Xoch",
    Koder 3:"Wendy"
*/
/*
1- Obtener del usuario cuantos koders desea ingresar
2- Se guarda en una variable y se convierte a numero
3- Crear un arreglo donde se guardaran los nombres de los koders
4- Solicitar al usuario el nombre y se guarda en el arreglo declarado tantas veces como el numero de koders solicitados
5- Imprimir cada uno de los nombres 

*/
let kodersName = []

function requestKoders(){
    let kodersQuantity = prompt("¿Cuantos Koders deseas ingresar?")
    parseInt(kodersQuantity)
    console.log(kodersQuantity)
        for(i=1; i<=kodersQuantity; i++){
                let koderName = prompt("Ingresa el nombre del koder")
                kodersName.push(koderName)
                console.log("Koder " + i + ":" + kodersName[i] + ",")
        }

    
}

requestKoders()

/*
    crear una función que me permita saber el nombre de algún koder basado en su número asignado
    -imprimir la lista de koders, en orden alfabético descendente
    -crear una nueva lista que contenga los nombres de los koders con la siguiente estructura:
        Koder 1: Israel Salinas Martínez (I. S. M.)
        Koder 2: Óscar Rodríguez Hernández (O. R. H.)

let namesArray = ["Karen", "Mike", "Gerry"]
let secondNamesArray = ["Ascencio", "Marquez", "Jimenez"]
let thirdNamesArray = ["Preciado", "Garcia", "Corchado"]


function whichNumberInList (){
let number = parseInt(prompt("Please type any number to get the Koder list position"))

console.log(namesArray[number-1]) 

}

function alphabeticalSorting () {
let sortedArray = namesArray.sort()
for (i=0; i<namesArray.length; i++){
  console.log(sortedArray[i])
}
}

function namesInitials (){
  console.log(`${namesArray[0].charAt(0)}. ${secondNamesArray[0].charAt(0)}. ${thirdNamesArray[0].charAt(0)}.`)
  console.log(`${namesArray[1].charAt(0)}. ${secondNamesArray[1].charAt(0)}. ${thirdNamesArray[1].charAt(0)}.`)
  console.log(`${namesArray[2].charAt(0)}. ${secondNamesArray[2].charAt(0)}. ${thirdNamesArray[2].charAt(0)}.`)
}


//whichNumberInList()
//alphabeticalSorting()
//namesInitials()


.forEach
.filter
.map
.reduce


*/