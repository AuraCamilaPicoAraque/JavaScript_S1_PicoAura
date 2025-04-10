export function camper() {
    const campers = [
        { ID: "1" , Nombre: "Alejandra" , Apellido: "Pinzon" , riesgo: "medio" , Grupo: "S1" },
        { ID: "2" , Nombre: "Vladimir" , Apellido: "Putin" , riesgo: "medio" , Grupo: "S1" },
        { ID: "3" , Nombre: "Daniel" , Apellido: "Guerrero" , riesgo: "alto" , Grupo: "S1" },
        { ID: "4" , Nombre: "Sara" , Apellido: "Rodriquez" , riesgo: "medio" , Grupo: "S1" }
    ];

    const id = prompt("Numero de identificacion del camper: ")
    // el find sirve para encontrar el primer elemento de un lista que cumpla con una condicion especifica. 
    const identidadcamper = campers.find(t => t.ID === id );

    if (!identidadcamper) {
      alert("Trainer no encontrado");
      return;
    }

    // toca utilizar el ` para que funcione la concatenacion de las variables
    alert (`Bienvenid@ camper ${identidadcamper.Nombre} ${identidadcamper.Apellido} del grupo ${identidadcamper.Grupo}`);

    while (true) {
        const opcion = prompt(
            `######################################\n` +
            `#########  MENU CAMPERS  #############\n` +
            `######################################\n` +
            `1- Ver información del curso en el que estoy\n` +
            `2- Ver Ruta Asignada\n` +
            `3- Ver notas\n` +
            `4- Salir`
        );

            switch (opcion) {
                // OPCION 1 - VER NOTAS
                case "1":
                  alert("Has elegido: Ver información del curso en el que estoy");
                  break;
                // OPCION 2 - ASIGNAR NOTAS
                case "2":
                    alert("Has elegido: Ver Ruta Asignada");
                  break;
                // OPCION 3 - EDITAR NOTAS
                case "3":
                    alert("Has elegido: Ver notas");
                  break;
                // OPCION 4 - VER RUTAS ASIGNADAS Y SUS CAMPERS
                case "4":
                    alert("Saliendo del sistema~~");
                  break;

                default: alert ("Opcion invalida~~~");
            }

            if (opcion === "4") break;

    }
}