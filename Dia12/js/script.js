function traer(eleccion, respuesta) {
    axios.get('https://68143c17225ff1af1628405a.mockapi.io/campeones')
        .then((response) => {
            const campeones = response.data;
            const campeonEncontrado = campeones.filter(campeon => campeon.region === eleccion);
    
            if (campeonEncontrado) {
                respuesta.innerHTML = `
                    <div class="contenedor_informacion">
                    <div class="contenedor__informacion_debajodelaimagen"> <div class="id"><p>${campeonEncontrado.id} ~ </p>
                        <p class="nombre">${campeonEncontrado.nombre}</p> </div>
                        <p>${campeonEncontrado.region}</p>
                        <p>${campeonEncontrado.tipo}</p>
                        <div class="container_descripcion"><p>${campeonEncontrado.descripcion}</p></div></div>
                        <img src="${campeonEncontrado.imagen}" class="imagen_campeon"/>
                    </div>
                    <br>
                    <br>
                    <br>
                    <br>
                `;
            } else {
                respuesta.innerHTML = `<p>No se encontró ningún campeón de la región "${eleccion}"</p>`;
            }
        })
        .catch((error) => {
            console.error("Error en la petición:", error);
            respuesta.innerHTML = `<p>Error al cargar los datos. Inténtalo de nuevo más tarde.</p>`;
        });
}

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    const eleccion = document.getElementById("eleccion").value;
    const respuesta = document.getElementById("region");
    traer(eleccion, respuesta);
});
