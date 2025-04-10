export function Coordinador() {
    const Coordinador = [
        { Nombre: "Karen" , Apellido: "Celis" }
    ];

    // toca utilizar el ` para que funcione la concatenacion de las variables
    alert(`Bienvenida Coordinadora ${Coordinador[0].Nombre} ${Coordinador[0].Apellido}`);

    while (true) {
        const opcion = prompt(
            `##########################################\n` +
            `########## MENU COORDINADOR ##############\n` +
            `##########################################\n` +
            `1- Ver campers // Trainers\n` +
            `2- Agregar nuevo camper // Trainer\n` +
            `3- Editar camper // Trainer\n` +
            `4- Eliminar camper // Trainer\n` +
            `5- Asignar ruta a campers\n` +
            `6- Agregar camper a ruta disponible\n` +
            `7- Agregar nueva ruta\n` +
            `8- Salir`
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