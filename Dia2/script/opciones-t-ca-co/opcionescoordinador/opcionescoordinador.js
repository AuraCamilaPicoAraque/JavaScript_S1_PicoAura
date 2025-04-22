import * as trainer from "./trainer.js";
import * as camper from "./camper.js";

// OPCION VER TRAINER

export function opcion_Ver_coordinador() {

    const vertrainer = trainer();

    let mensaje = 'Entrenadores disponibles:\n\n';
    vertrainer.forEach(entrenadores => {  mensaje += `ID: ${entrenadores.ID} ~~ ${entrenadores.Nombre} ${entrenadores.Apellido} ~~ ${entrenadores.Grupo} ~~ ${entrenadores.riesgo} \n`;    });

    alert(mensaje);

};

// OPCION VER TRAINER

export function opcion_VerCamper_coordinador() {

    const vercamper = camper();

    let mensajeCamper = 'Campers incritos en el campus:\n\n';
    vercamper.forEach(campers => {  mensajeCamper += `ID: ${campers.ID} ~~ ${campers.Nombre} ${campers.Apellido} ~~ ${campers.Grupo} \n`;    });

    alert(mensajeCamper);

};



