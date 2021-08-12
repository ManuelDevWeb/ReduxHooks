//Importamos los tipos de acciones de creamos
import { ADD, DECREASE } from "../types/types";

//Acción para añadir un contador
export const addCounter = (payload) => ({
    //Caso a ejecutar
    type: ADD,
    //Información que enviamos al reducer
    payload,
});

//Acción para disminuir un contador
export const decreaseCounter = (payload) => ({
    //Caso a ejecutar
    type: DECREASE,
    //Información que enviamos al reducer
    payload,
});