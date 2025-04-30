let titulo = document.getElementById('titulazo');
let variable = "Campuslands"
titulo.innerHTML = `Gatico ${variable}`;

//Con XML
function obtenerXML(){
    let edgar = new XMLHttpRequest();
    let numeritoAfuera = document.getElementById('numeritoCool').value;
    console.log(numeritoAfuera);
    let url= `https://http.cat/${numeritoAfuera}`;
    console.log(url);
    
    
    edgar.open('GET',url,true);
    edgar.onreadystatechange= (function(){
        console.log(this.status);
        if(this.readyState== 4 && this.status === 200){
            console.log(`aja`);
            document.getElementById(`imagenNueva`).src=url;
            document.getElementById(`errorsito`).innerHTML = ``;
        }else{
            console.log(`aja2`);
            document.getElementById(`errorsito`).innerHTML = `Mal! Vuelvelo a intentar!`;
        }
    });
    edgar.send();
}



window.onload = function(){
    document.querySelector('form').addEventListener('submit', function(event){
        event.preventDefault();
        cat();
    });
};

function cat(){
    let imgContainer = document.getElementById("img_new");
    let val = document.getElementById("status").value;
    
    let url = `https://http.cat/${val}`;
    
    const img = new Image();

    img.onload = function() {
        console.log("Imagen cargada correctamente");
        imgContainer.innerHTML = ''; 
        imgContainer.innerHTML = `<img src="${url}"/>`;
    };
    
    img.onerror = function() {
        console.log("Error al cargar la imagen");
        imgContainer.innerHTML = `<p>Error al cargar la imagen para el código ${val}. 
                               Asegúrate de que sea un código HTTP válido.</p>`;
    };
    
    img.src = url;
}