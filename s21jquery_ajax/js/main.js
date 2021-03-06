//https://blog-12g-default-rtdb.firebaseio.com/.json

const BASE_URL = 'https://blog-12g-default-rtdb.firebaseio.com/israel'

const getAllPets = () => {
    let result
    $.ajax({
        method:"GET",
        url:`${BASE_URL}/pets.json`,
        success: response => {
            result = response
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
    console.log(result)
    return result
}


const savePet = petData => {
    $.ajax({
        method:"POST",
        url:`${BASE_URL}/pets.json`,
        data:JSON.stringify( petData ),
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
}
const patchPet = (petId, petData) => {
    $.ajax({
        method:"PATCH",
        url:`${BASE_URL}/pets/${petId}.json`,
        data:JSON.stringify( petData ),
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
}



const getPetById = petId => {
    let result
    $.ajax({
        method:"GET",
        url:`${BASE_URL}/pets/${petId}.json`,
        success: response => {
            result = response
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
    return result
}

$("#save-pet").click(() => {
    let petObject = {adopted:false}
    $("#pet-form input").each( function(){
        let property = $(this).attr("name")
        let value = $(this).val()
        console.log(property, value )
        petObject = {...petObject, [property] : value }
    })
    console.log( petObject )
    savePet( petObject )
    printAllPets( getAllPets() )
})

const printAllPets = petsData => {
    $(".pets-wrapper").empty()
    for( pet in petsData ){
        let { name, specie, age, picture} = petsData[pet]
        let petHtml = `
        <div class="col-12 col-md-6 mb-4">
        <div class="card pet-card">
        <a href = "vista.html?mascota=${pet}" target = "_blank" > <img src=${picture} class="card-img-top" alt="..."> </a>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Especie: ${specie}</p>
                <p class="card-text">Edad: ${age}</p>
                <a href="#" class="btn btn-primary" data-pet-key=${pet}>Go somewhere</a>
                <a href="adoptForm.html?adoptKey=${pet}" class="btn btn-success adopt" data-pet-key=${pet}>Adoptame</a>
            </div>
            </div>
            </div>
        `
        $(".pets-wrapper").append(petHtml) 
    }

}

$(".filter-radio-set input[type='radio']").click( event => {
    petsCollection = getAllPets()
    let filterOption = $(event.target).val()
    console.log( petsCollection )
    console.log( filterOption )

    let filterResult = Object.keys(petsCollection).reduce( ( accum, current ) => {
        let petObject = petsCollection[current]
        return petObject.specie && petObject.specie.toLowerCase() === filterOption.toLowerCase() ? {...accum,[current]:petObject } : accum
    },{})
    console.log(filterResult)
    printAllPets(filterResult)
})

let petsCollection = getAllPets()
printAllPets( petsCollection )

//agregamos el listener al boton de disponibles
$('.disponibles').click(function(){
    location.href = "disponibles.html"
})