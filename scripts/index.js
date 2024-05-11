
//     Activity

const agregar = document.getElementById("agregar");


class Activity {
    constructor(id, title, description, imgURL) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgURL = imgURL;
    }
}

//    instancia de la clase Repository con la que trabajaremos toda la actividad.

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;    //creación de ID.
    }

//  getAllActivities

    getAllActivities = () => {
        return this.activities;
    }

//  createActivity

    createActivity(title, description, imgURL){
        const id = ++this.id;          
        const newActivity = new Activity (id, title, description, imgURL);
        this.activities.push(newActivity);
        return newActivity;
    }

//  deleteActivity //

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}



// *Actividad 1 Clase #3

const repository = new Repository();


//* Actividad 2 Clase #3

function buildActivity (activity) {

    //* DESTRUCTURING
    const {id, title, description, imgURL } = activity;

    // console.log(activity);
    const h3 = document.createElement("h3");
    h3.innerHTML = title;
    h3.classList.add("title-cardActivity"); 

    const p = document.createElement("p");
    p.innerHTML = description;
    p.classList.add("p-cardActivity");

    const img = document.createElement("img");
    img.setAttribute("src", imgURL);
    img.classList.add("img-cardActivity");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerHTML = "Eliminar Actividad";
    btn.classList.add("btnDelete");
    btn.addEventListener("click", () => {
        repository.deleteActivity(id);
        buildActivities();
    })

// *   Creo la card-activity
    const cardActivity = document.createElement("div");
    cardActivity.classList.add("card-activity");



    // * Punto 7
    cardActivity.appendChild(h3);
    cardActivity.appendChild(p);
    cardActivity.appendChild(img);
    cardActivity.appendChild(btn);

    return cardActivity;
}


function buildActivities(){
    const contenedorCartas = document.getElementById("contenedorCartas")
    contenedorCartas.innerHTML = "";
    
    // Aqui tengo mis actividades, pero es un arreglo con objetos. 

    const allActivities = repository.getAllActivities()

    //MIS ACTIVIDADES ,  las pasaré por mi buildActivity

    const HTMlActivities = allActivities.map((act) => buildActivity(act));

    HTMlActivities.forEach((activityHTML) =>
    contenedorCartas.appendChild(activityHTML)
    );
}

function handleClickSubmit(event){
    event.preventDefault();

    // Extraje los elementos del DOM

    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let imgURL = document.getElementById("imgURL");


    // Extraje los valores de mis inputs extraidos del DOM.

    const titleValue = title.value;
    const descriptionValue = description.value;
    const  imgURLValue = imgURL.value;


// VALIDACIÓN DE DATA

    if(!titleValue.trim() || !descriptionValue.trim() || !imgURLValue.trim()) {
        alert("Por favor, llene todos los campos");
        return;
    }

    repository.createActivity(titleValue, descriptionValue, imgURLValue);

    buildActivities()

    // Vaciar inputs
    title.value = "";
    description.value = "";
    imgURL.value = "";

}


agregar.addEventListener("click", handleClickSubmit);
