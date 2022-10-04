import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import FirstApp from './FirstApp';
import './index.css'

// *Pasos para renderizar
// *En ReactDOM se crea un root, se toma del html creado
// *se renderiza el componene funcional

ReactDOM.createRoot( document.getElementById('root') ).render(
    // Compoonente padre
    <React.StrictMode>
        {/* componente hijo */}
        {/* <CounterApp
            value={ 0 }
        /> */}
        <FirstApp subTitle="testing alv"/>
    </React.StrictMode>
);