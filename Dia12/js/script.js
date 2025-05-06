function traer(eleccion, respuesta) {
    axios.get('https://68143c17225ff1af1628405a.mockapi.io/campeones')
        .then((response) => {
            // campeones sera donde saquemos la info
            let campeones = response.data;
            let acumulador = '';
            // este for me recorrera todos los campeones en la api
            for (let i = 0; i < campeones.length; i++) {
                // el if nos verificara si la eleccion de region es igual a la region del campeon
                if (eleccion == campeones[i]["region"]) {
                    // muestra la informaci{on en el css
                    acumulador += `<br><br><br> 
                        <div class="contenedor_informacion">
                            <div class="contenedor__informacion_debajodelaimagen"> 
                                <div class="id"><p>${campeones[i]["id"]} ~ </p>
                                <p class="nombre">${campeones[i]["nombre"]}</p> </div>
                                <p>${campeones[i]["region"]}</p>
                                <p>${campeones[i]["tipo"]}</p>
                                <div class="container_descripcion"> <p>${campeones[i]["descripcion"]}</p> </div>
                            </div>
                                <img src="${campeones[i]["imagen"]}" class="imagen_campeon"/>
                        </div>
                        <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>

                    `;
                }
            }
            
            // Verificar si se encontraron campeones
            if (acumulador === '') {
                respuesta.innerHTML = `<p>No se encontraron campeones para la región seleccionada.</p>`;
            } else {
                respuesta.innerHTML = acumulador;
            }
        })


        .catch((error) => {
            console.error("Error en la petición:", error);
            respuesta.innerHTML = `<p>Error al cargar los datos. Inténtalo de nuevo más tarde.</p>`;
        });
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    let eleccion = document.getElementById("eleccion").value;
    let respuesta = document.getElementById("region");
    traer(eleccion, respuesta);
});