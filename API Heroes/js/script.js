
const api = 'https://681bd7ee6ae7c794cf6ff13d.mockapi.io/heroes';

// Función para validar campos obligatorios
function validarCampos() {
    let valido = true;
    const camposObligatorios = [
        { id: 'nombrepersonaje' },
        { id: 'Actor' },
        { id: 'edad_actor' },
        { id: 'location' },
        { id: 'poster' },
        { id: 'nacimiento' },
    ];

    camposObligatorios.forEach(campo => {
        const input = document.getElementById(campo.id);
        if (!input.value.trim()) {
            input.classList.add('is-invalid');
            valido = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    return valido;
}


// Nuevo Heroe

const nuevo = document.getElementById('nuevo_heroe');

nuevo.addEventListener('click', NUEVO);

function NUEVO() {
    document.querySelectorAll('.input_habilitado').forEach(habilitado => {
        habilitado.removeAttribute('disabled');
    });
}




// funcion que aparesca el traje

document.getElementById("nuevo_heroe").addEventListener('click', function (e) {
    e.preventDefault();
    const container = document.getElementById("añadir_name_trajes")
    container.style.display = "block";
});
document.getElementById("botonmas").addEventListener("click", function (e) {
    e.preventDefault();

    const solicitud = document.getElementById("añadir_traje")

    solicitud.innerHTML += `    
    <div class="container_nuevo_traje">
        <label for="nombre_traje" class="textoo">Nombre traje</label><br><br> 
        <div class="paquesealinee"><input id="input_traje" class="form-control" type="text" /> <br> <br>
        <button class="btn btn-danger borrar">-</button></div>
    </div>`
})



// FUNCION PARA QUE ELIMINE (DELEGACIÓN DE EVENTOS)
document.getElementById("añadir_traje").addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        e.target.closest('.container_nuevo_traje').remove();
    }
});



// Función para guardar un nuevo héroe
async function guardarHeroe(event) {
    event.preventDefault();

    if (!validarCampos()) {
        return;
    }

    // Obtener todos los trajes añadidos
    const inputsTrajes = document.querySelectorAll('#input_traje');
    const trajes = Array.from(inputsTrajes).map(input => input.value).filter(traje => traje.trim() !== '');

    // Obtener valores del formulario
    const nuevoHeroe = {
        Nombre_Personaje: document.getElementById('nombrepersonaje').value,
        Nombre_Actor: document.getElementById('Actor').value,
        Edad_Actor: document.getElementById('edad_actor').value,
        Ubicacion: document.getElementById('location').value,
        Poster: document.getElementById('poster').value,
        Fecha_Nacimiento: document.getElementById('nacimiento').value,
        Productora: document.getElementById('productora').options[document.getElementById('productora').selectedIndex].value,
        traje: trajes, // Esto guardará un array con todos los trajes
        id: Date.now().toString()
    };

    try {
        const response = await axios.post(api, nuevoHeroe);
        console.log('Héroe guardado:', response.data);

        // Mostrar modal de éxito
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        document.querySelector('form').reset();
        // Limpiar también los trajes añadidos dinámicamente
        document.getElementById('añadir_traje').innerHTML = '';
    } catch (error) {
        console.error('Error al guardar:', error);
        const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
        errorModal.show();
    }
}


// Validación en tiempo real
document.querySelectorAll('[required]').forEach(input => {
    input.addEventListener('input', function () {
        if (this.value.trim()) {
            this.classList.remove('is-invalid');
        }
    });
});


// Botón "Guardar Héroe"
document.getElementById('guardar_heroe').addEventListener('click', guardarHeroe);

// Botón "Cancelar"  para limpiar el formulario
document.getElementById('cancelar').addEventListener('click', function (e) {
    e.preventDefault(); // Esto es crucial para evitar comportamientos no deseados

    // Resetear el formulario
    const form = document.querySelector('form');
    if (form) {
        form.reset();
    } else {
        console.error('No se encontró el formulario pipipi');
    }
});