let save = document.getElementById("save")
mentorArray = []
const endpoint = "https://apikoder-b2ce0-default-rtdb.firebaseio.com/MiguelMarquez/.json"



save.addEventListener("click", () => {
    
    let mentorObject = {}
    let fields = document.querySelectorAll("form input")
    fields.forEach(input =>{

        let property = input.id
        let value = input.value

        mentorObject = {...mentorObject, [property]:value}
    })
    console.log(mentorObject)
    
    const mentorJson = JSON.stringify(mentorObject)
    // Creando el objeto
    var xhttp = new XMLHttpRequest();
    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = JSON.parse(xhttp.responseText);
            //console.log(respuesta)
            console.log("hola desde el servidor")
            //console.log(respuesta.name)
            //return respuesta
        }
        
    };
    //let trId = xhttp.responseText
    //console.log(trId)
     // Configurar el verbo, la dirección
     xhttp.open("POST", endpoint, true);
     // Enviar la solicitud
     xhttp.send(mentorJson);
 
    mentorArray.push(mentorObject)
    //console.log(mentorArray)
    
    document.getElementById("person-table").innerHTML = ""

    mentorArray.forEach( (mentor, index ) =>  {
        
        let {mentorName, mentorLastName } = mentor 
        let personRow = document.createElement("tr" )
        //<tr></tr>
        let indexTd = document.createElement("td")
        //<td></td>
        let nameTd = document.createElement("td")
        //<td></td>
        let lastnameTd = document.createElement("td")
        //<td></td>
        let buttonTd = document.createElement("td")
    
        let nameText = document.createTextNode( mentorName )
        let lastnameText = document.createTextNode( mentorLastName )
        let indexText = document.createTextNode( index +1 )
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("btn", "btn-warning")
        deleteButton.dataset.personIndex = index
        deleteButton.addEventListener("click", event =>{
            let personIndex = event.target.dataset.personIndex
            mentorArray.splice(personIndex,1)
            //pendiente anexar todo el pintado de la tabla
        } )
       
    
        let buttonText = document.createTextNode("Borrar")
        deleteButton.appendChild(buttonText)
    
        buttonTd.appendChild(deleteButton)
    
        indexTd.appendChild(indexText)
        nameTd.appendChild(nameText)
        lastnameTd.appendChild(lastnameText)
    
        personRow.appendChild( indexTd )
        personRow.appendChild( nameTd )
        personRow.appendChild( lastnameTd )
        personRow.appendChild( buttonTd )
    
        document.getElementById("person-table").appendChild( personRow )
        
    })
     

})