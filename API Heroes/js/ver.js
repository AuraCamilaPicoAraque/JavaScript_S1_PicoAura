// Esperamos a que la página cargue
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Obtener datos de la API
        const api = await fetch('https://681bd7ee6ae7c794cf6ff13d.mockapi.io/heroes');
        const heroes = await api.json();
        // Mostrar los héroes en el contenedor
        const container = document.getElementById('heroes');
        container.innerHTML = ''; // Limpiar contenedor

        container.classList.add('container');

        if (heroes.length === 0) {
            return;
        }

        const row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);

        // Crear y agregar cards para cada héroe
        heroes.forEach(hero => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';

            const card = document.createElement('div');
            card.className = 'card character-card bg-white mb-5 h-100 w-100';
            card.innerHTML = `
                <img src="${hero.Poster}" class="card-img-top" alt="${hero.Nombre_Personaje}">
                <div class="card-body">
                    <h5 class="card-title">${hero.Nombre_Personaje}</h5>
                    <p><strong>Actor:</strong> <span class="actor-name">${hero.Nombre_Actor}</span></p>
                    <p><strong>Edad:</strong> <span class="actor-age">${hero.Edad_Actor}</span></p>
                    <p><strong>Ubicación:</strong> <span class="location">${hero.Ubicacion}</span></p>
                    <p><strong>Nacimiento:</strong> <span class="birthdate">${hero.Fecha_Nacimiento}</span></p>
                    <p><strong>Productora:</strong> <span class="studio">${hero.Productora}</span></p>
                    <button class="btn btn-danger btn-eliminar w-100" data-id="${hero.id}">Eliminar</button>
                </div>
            `;
            col.appendChild(card);
            row.appendChild(col);
        });

        // Event listeners para los botones de eliminar
        document.querySelectorAll('.btn-eliminar').forEach(button => {
            button.addEventListener('click', async function() {
                const heroId = this.getAttribute('data-id');
                const heroName = this.closest('.card-body').querySelector('.card-title').textContent;
                
                // Mostrar confirmación nativa del navegador
                const confirmar = confirm(`¿Estás seguro que deseas eliminar a ${heroName}?`);
                
                if (confirmar) {
                    try {
                        const response = await fetch(`https://681bd7ee6ae7c794cf6ff13d.mockapi.io/heroes/${heroId}`, {
                            method: 'DELETE'
                        });
                        
                        if (response.ok) {
                            // Recargar la página para mostrar los cambios
                            location.reload();
                        } else {
                            console.error('Error al eliminar el héroe');
                            alert('No se pudo eliminar el héroe');
                        }
                    } catch (error) {
                        console.error('Error al eliminar el héroe:', error);
                        alert('Ocurrió un error al eliminar el héroe');
                    }
                }
            });
        });

    } catch (error) {
        console.error('Error al cargar los héroes:', error);
    }
});