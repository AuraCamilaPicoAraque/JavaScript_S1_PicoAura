document.addEventListener('DOMContentLoaded', () => {
    const datosContenedor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskInput');
    const addButton = document.querySelector('.boton button');

    async function fetchData() {
        const res = await fetch('https://68143c17225ff1af1628405a.mockapi.io/tareas');
        data = await res.json();
        return data;
    }

    // Eliminar
    async function deleteTask(id) {
        try {
            await fetch(`https://68143c17225ff1af1628405a.mockapi.io/tareas/${id}`, {
                method: 'DELETE'
            });
            return true;
        } catch (error) {
            console.error('Error eliminando tarea:', error);
            return false;
        }
    }

    // Añadir
    async function addTask(taskText) {
        try {
            const response = await fetch('https://68143c17225ff1af1628405a.mockapi.io/tareas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    task: taskText,
                    status: "On hold"
                })
            });
            return await response.json();
        } catch (error) {
            console.error('Error añadiendo tarea:', error);
            return null;
        }
    }

    // Finalizado 
    async function completeTask(id, currentStatus) {
        try {
            const newStatus = currentStatus === "On hold" ? "ready" : "On hold";
            await fetch(`https://68143c17225ff1af1628405a.mockapi.io/tareas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: newStatus
                })
            });
            return newStatus;
        } catch (error) {
            console.error('Error actualizando tarea:', error);
            return null;
        }
    }

    function displayCapsula(data) {
        datosContenedor.innerHTML = ``;
        data.forEach(cap => {
            const capDiv = document.createElement('div');
            // Añadir clase 'completed' si el estado es "ready"
            const isCompleted = cap.status === "ready";
            capDiv.innerHTML = `        
                <div class="capsula ${isCompleted ? 'completed' : ''}">
                    <div class="infoText">
                        <p>${cap.task}</p>
                    </div>
                    <div class="botones">
                        <div class="terminado">
                            <img src="./img/pngwing.com (2).png" 
                                 data-id="${cap.id}" 
                                 data-status="${cap.status}" 
                                 class="completado">
                        </div>
                        <div class="eliminado">
                            <img src="./img/pngwing.com (4).png" 
                                 data-id="${cap.id}" 
                                 class="eliminado">
                        </div>
                    </div>
                </div>`;
            datosContenedor.appendChild(capDiv);
        });

        // Eventos para eliminar
        document.querySelectorAll('.eliminado').forEach(btn => {
            btn.addEventListener('click', async function () {
                const taskId = this.getAttribute('data-id');
                if (confirm('¿Estás seguro de eliminar esta tarea?')) {
                    const success = await deleteTask(taskId);
                    if (success) {
                        this.closest('.capsula').remove();
                    }
                }
            });
        });

        // Eventos para completar
        document.querySelectorAll('.completado').forEach(btn => {
            btn.addEventListener('click', async function () {
                const taskId = this.getAttribute('data-id');
                const currentStatus = this.getAttribute('data-status');
                const newStatus = await completeTask(taskId, currentStatus);

                if (newStatus) {
                    const taskElement = this.closest('.capsula');
                    // Actualizar visualmente
                    taskElement.classList.toggle('completed', newStatus === "ready");
                    taskElement.classList.toggle('elimination', newStatus === "ready");
                    taskElement.classList.toggle('listo', newStatus === "ready");
                    // Actualizar el atributo data-status para futuros clicks
                    this.setAttribute('data-status', newStatus);
                    // Opcional: Actualizar el botón visualmente
                    if (newStatus === "ready") {
                        this.style.filter = "grayscale(100%)";
                    } else {
                        this.style.filter = "none";
                    }
                }
            });
        });
    }

    // Evento para añadir tarea
    async function handleAddTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const newTask = await addTask(taskText);
            if (newTask) {
                taskInput.value = '';
                const data = await fetchData();
                displayCapsula(data);
            }
        }
    }

    // Configurar eventos
    addButton.addEventListener('click', handleAddTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    });

    // Carga inicial
    fetchData().then(data => {
        console.log(data);
        displayCapsula(data);
    });
});