
/*Usar el array para crear objetos del tipo Mentor, que contengan el nombre y apellidos del mentor, una propiedad con sus inciales y un método que al ser invocado devuelva el string "hola, soy {nombre} {apellidos}"
los objetos deben estar dentro de una colección llamada mentorsArray*/

let dataArray = [
    [
        "Israel",
        "Salinas Martinez"
    ],
    [
        "David",
        "Cermeño Monrachel"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "Michael",
        "Villalba Sotelo"
    ]
]


function Mentor(name, lastName){
    this.name = name
    this.lastName = lastName
}

const mentorsArray = []

for (const obj of dataArray) {
    obj.forEach((valor, index) =>{
        

    })
    
}