const pokemonImage = document.querySelector('.pokemon__image');



function fetchPoke(){
    let id= document.getElementById("pokeId").value;
    let solicitud = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    solicitud.open('GET',url);
    solicitud.onreadystatechange = (function(){
        if(this.readyState === 4 && this.status===200){
            let response = JSON.parse(this.responseText);
            console.log(response["name"]);
            displayPoke(response);}
        });

    solicitud.send();
}


function displayPoke(data){
    let pokemon = document.getElementById("showUp");
    let nombre = (data["name"].charAt(0).toUpperCase())+(data["name"].slice(1));
    console.log(nombre) ;
    pokemon.innerHTML = `${data["id"]} - ${nombre}`;
}


function displaydata (data) {

    let sprite =document.getElementById('Pokemon_Image');
    
    if (data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] --- null ) {
    sprite.innerHTML - ` 
        <div style=" position: absolute; top: 30%" 
        ></div>'
    `
}
}   





function anterior_id(){
    console.log("Testing");
}

function siguiente_id(){
    console.log("Testing");
}

const input=document.getElementById("pokeId");
input.addEventListener("keydown", function (event)  {
    if(event.key==="Enter"){
        fetchPoke();
        input.value = "";
    }
});
