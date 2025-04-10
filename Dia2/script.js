// Simulación del menú principal de CampusLand
import * as menu from './menu'


menus.menu();
// CONST -> sirve para que esta variable funcione sin importar nada 
let opcion = prompt(
    `##########################################\n` +
    `----- Bienvenidos al CampusLand --------\n` +
    `##########################################\n` +
    `¿Quien eres?\n` +
    `1- Trainer\n` +
    `2- Camper\n` +
    `3- Coordinador\n` +
    `4- Salir del sistema`
  );


  function menu(opciones) {
      if (opciones === "1") {
        alert ("Bienvenido Profesor pedro");
      }
      else if (opciones === "2") {
        alert ("Bienvenido tuputamdre");
      }
      else if (opciones === "3") {
        alert ("Bienvenido cookie");
      }
      else if (opciones === "4") {
        alert ("Saliendo");
      };
  };

  menu(opcion);



