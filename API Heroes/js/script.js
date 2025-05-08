
const api = 'https://681bd7ee6ae7c794cf6ff13d.mockapi.io/heroe';

// Función para validar campos obligatorios
function validarCampos() {
    let valido = true;
    const camposObligatorios = [
        { id: 'nombrepersonaje'},
        { id: 'Actor'},
        { id: 'edad_actor'},
        { id: 'location'},
        { id: 'poster'},
        { id: 'nacimiento'},
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


// Función para guardar un nuevo héroe
async function guardarHeroe(event) {
    event.preventDefault(); // Evita que el formulario se recargue

    if (!validarCampos()) {
        return;
    }

    // Obtener valores del formulario
    const nuevoHeroe = {
        Nombre_Personaje: document.getElementById('nombrepersonaje').value,
        Nombre_Actor: document.getElementById('Actor').value,
        Edad_Actor: document.getElementById('edad_actor').value,
        Ubicacion: document.getElementById('location').value,
        Poster: document.getElementById('poster').value,
        Fecha_Nacimiento: document.getElementById('nacimiento').value,
        Productora: document.getElementById('productora').value,
        traje: "",
        id: Date.now().toString()
    };

    try {
        // Enviar datos al servidor con Axios (POST)
        const response = await axios.post(api, nuevoHeroe);
        console.log('Héroe guardado:', response.data);
        // Limpiar el formulario después de guardar
        document.querySelector('form').reset();
    } catch (error) {
        console.error('Error al guardar:', error);
    }
}


// Validación en tiempo real
document.querySelectorAll('[required]').forEach(input => {
    input.addEventListener('input', function() {
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