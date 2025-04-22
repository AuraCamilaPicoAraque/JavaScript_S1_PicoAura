//import * as opcion_Ver_coordinador from './opciones-t-ca-co/opcionescoordinador/opcionescoordinador';

export function Coordinador() {
    const Coordinador = [
        { Nombre: "Karen", Apellido: "Celis" }
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
            `5- Agregar camper a ruta disponible\n` +
            `6- Salir al menu`
        );

        switch (opcion) {
            // OPCION 1 - VER CAMPERS // TRAINERS
            case "1":
                alert("Has elegido: Ver campers // Trainers");

                //opciones a elegir de cual quiere visualizar
                const opc = prompt("¿Cuál elijes?\n 1~Ver Trainer\n 2~Ver Campers\n");
                switch (opc) {
                    case "1":
                        alert("Ver Trainer");
                        opcion_Ver_coordinador();
                        break;

                    case "2":
                        alert("Ver Campers");
                        opcion_VerCamper_coordinador();
                        break;

                    default:
                        break;
                }
                break;

            // OPCION 2 - AGREGAR NUEVO CAMPERS // TRAINERS
            case "2":
                alert("Has elegido: Agregar nuevo camper // Trainer");

                //opciones a elegir de cual quiere agregar
                const opcAgregar = prompt("¿Cuál elijes?\n 1~Agregar Trainer\n 2~Agregar Campers\n");
                switch (opcAgregar) {
                    case "1":
                        alert("Agregar Trainer");
                        opcion_Ver_coordinador();
                        break;

                    case "2":
                        alert("Agregar Campers");
                        opcion_VerCamper_coordinador();
                        break;

                    default:
                        break;
                }
                break;

            // OPCION 3 - EDITAR CAMPERS // TRAINERS
            case "3":
                alert("Has elegido: Editar camper // Trainer");

                //opciones a elegir de cual quiere agregar
                const opcEditar = prompt("¿Cuál elijes?\n 1~ Editar Trainer\n 2~ Editar Campers\n");
                switch (opcEditar) {
                    case "1":
                        alert("Editar Trainer");
                        opcion_Ver_coordinador();
                        break;

                    case "2":
                        alert("Editar Campers");
                        opcion_VerCamper_coordinador();
                        break;

                    default:
                        break;
                }
                break;


            // OPCION 4 - ELIMINAR CAMPERS // TRAINERS
            case "4":
                alert("Has elegido: Eliminar camper // Trainer");

                //opciones a elegir de cual quiere agregar
                const opcEliminar = prompt("¿Cuál elijes?\n 1~ Eliminar Trainer\n 2~ Eliminar Campers\n");
                switch (opcEliminar) {
                    case "1":
                        alert("Eliminar Trainer");
                        opcion_Ver_coordinador();
                        break;

                    case "2":
                        alert("Eliminar Campers");
                        opcion_VerCamper_coordinador();
                        break;

                    default:
                        break;
                }
                break;


            // OPCION 5 - ASIGNAR RUTA A CAMPERS
            case "5":
                alert("Has elegido: Agregar camper a ruta disponible");
                break;

                
            // OPCION 6 - SALIENDO DEL MENU
            case "6":
                alert("Saliendo del menú~~~");
                break;

            default:
                alert("Opcion Invalida~~");
        }

        if (opcion === "6") break;

    }
}