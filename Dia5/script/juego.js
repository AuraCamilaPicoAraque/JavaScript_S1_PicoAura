function trae_api() {
    /* Esto trae las fucnion de la api para que se muestre */
    const api = new XMLHttpRequest();
    // trae la libreria de la api con algo en especifico
    const url = "https://deckofcardsapi.com/api/deck/lf5jr5lihcfw/draw/?count=2";
    api.open("GET", url);
    api.onreadystatechange = (function () {
        if (this.readyState === 4 && this.status === 200) {

            let guardar_data = JSON.parse(this.responseText);
            const imagen_carta1 = document.getElementById("seccion2__Carta1");
            const imagen_carta2 = document.getElementById("seccion2__Carta2");
            imagen_carta1.innerHTML = ` <img src="${guardar_data["cards"][0]["image"]}" class="seccion2_cartas1"> `;
            imagen_carta2.innerHTML = ` <img src="${guardar_data["cards"][1]["image"]}" class="seccion2_cartas2"> `;
        };
        console.log(this.status);
    });
api.send();
}

trae_api();


function botones_mayor () {
    
}


