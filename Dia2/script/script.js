// Simulación del menú principal de CampusLand
import * as trainer from "./trainer.js";
import * as camper from "./camper.js";
import * as coordinador from "./coordinador.js";

// CONST -> sirve para que esta variable funcione sin importar nada 

function menu() {
  while (true) {
    const opcion = prompt(
      `##########################################\n` +
      `----- Bienvenidos al CampusLand --------\n` +
      `##########################################\n` +
      `¿Quien eres?\n` +
      `1- Trainer\n` +
      `2- Camper\n` +
      `3- Coordinador\n` +
      `4- Salir del sistema`
    );
    
    switch (opcion) {
      // OPCION 1 - TRAINER
      case "1":
        alert("Bienvenido como Trainer");
        trainer.trainer();
        break;
      // OPCION 2 - CAMPER
        case "2":
          alert("Bienvenido como Camper");
          camper.camper();
          break;
      // OPCION 3 - COORDINADOR
          case "3":
            alert("Bienvenido como Coordinador");
            coordinador.Coordinador();
            break;
      // OPCION 4 - SALIENDO DEL SISTEMA
            case "4":
            alert("Saliendo del sistema");
    }

    // Si su opcion es 4 se saldra del sistema.
    if (opcion === "4") break;

  }

}

menu();



