//Importamos los tipos de acciones de creamos
import { ADD, DECREASE } from "../types/types";

export const reducer = (state, action) => {
    switch (action.type) {
        //Retornamos todo lo que tenia en el estado, y sobreescribimos la información que tiene
        //el estado en ese momento, con la información que el action entrega.
        case ADD:
            return {
                count: state.count + 1,
            };
        case DECREASE:
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }
};