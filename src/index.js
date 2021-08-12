import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//Importamos la función para crear nuestro store
import { createStore } from 'redux';
//Importamos el Provider
import { Provider } from "react-redux";
//Importamos el reducer que creamos
import { reducer } from "./reducers/reducers";

//Estado inicial de nuestra aplicación
const initialState = {
    count: 0
}

//La función createStore primero debe recibir nuestro reducer y después el estado inicial
const store = createStore(reducer, initialState);

//Encerramos nuestra aplicación en el Provider y a este le pasamos el store
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)