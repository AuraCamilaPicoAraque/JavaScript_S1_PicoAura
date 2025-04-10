export function trainer() {
    const trainers = [
        { ID: "1" , Nombre: "Pedro" , Apellido: "Gómez" , Grupo: "S1 ,S2" },
        { ID: "2" , Nombre: "Pedro" , Apellido: "Gómez" , Grupo: "S1 ,S2" }
    ];

    const id = prompt("Numero de identificacion: ")
    // el find sirve para encontrar el primer elemento de un lista que cumpla con una condicion especifica. 
    const identidadtrainer = trainers.find(t => t.ID === id );


    if (!identidadtrainer) {
      alert("Trainer no encontrado");
      return;
    }

    // toca utilizar el ` para que funcione la concatenacion de las variables
    alert (`Bienvenid@ trainer ${identidadtrainer.Nombre} ${identidadtrainer.Apellido} del grupo ${identidadtrainer.Grupo}`);

    while (true) {
        const opcion = prompt ( 
                `##########################################\n` +
                `-------------- MENU TRAINER --------------\n` +
                `##########################################\n` +
                `1- Ver notas de los cursos\n` +
                `2- Asignar nota a campers\n` +
                `3- Editar notas\n` +
                `4- Ver rutas asignada y sus campers\n`+
                `5- Salir`
            );

            switch (opcion) {
                // OPCION 1 - VER NOTAS
                case "1":
                  alert("Has elegido: Ver notas de los cursos");
                  break;
                // OPCION 2 - ASIGNAR NOTAS
                case "2":
                    alert("Has elegido: Asignar nota a campers");
                  break;
                // OPCION 3 - EDITAR NOTAS
                case "3":
                    alert("Has elegido: Editar notas");
                  break;
                // OPCION 4 - VER RUTAS ASIGNADAS Y SUS CAMPERS
                case "4":
                    alert("Has elegido: Ver rutas asignada y sus campers");
                  break;
                // OPCION 5 - SALIENDO DEL MENU
                case "5":
                    alert("Saliendo del menú~~");
                  break;

                default: alert ("Opcion invalida~~~");
            }

            if (opcion === "5") break;

    }
}