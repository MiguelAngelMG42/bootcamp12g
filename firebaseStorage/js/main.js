//Creamos una nueva instancia de nuestra db
let database = firebase.database();
//console.log(database)

//Creamos una variable que apunte hacia la coleccion de mascotas de nuestra db
let petsRef = database.ref("/pets")

//Creamos un listener que este al pendiente de cualquier cambio en la referencia "petsRef"
petsRef.on('value', snapshot => {
    console.log( snapshot )
    console.log( snapshot.val())

})