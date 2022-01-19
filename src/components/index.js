import React from "react";
import {TarjetaMain} from "./main/tarjeta";

function MainPage() {
    return (
        <React.Fragment>
            <h1 className="mt-3 mb-3 ml-5">Bienvenidos a la aplicación de Portal Web</h1>
            <div className="row mt-3">
                <TarjetaMain titulo="Distruibores" texto="los distribuidores." ruta="/distribuidores" textoBoton="Ir a Distribuidores"/>
                <TarjetaMain titulo="Productos" texto="los Productos." ruta="/productos" textoBoton="Ir a Productos"/>
                <TarjetaMain titulo="Canales Autorizados" texto="los Canales Autorizados." ruta="/canalesautorizados" textoBoton="Ir a Canales Autorizados"/>
            </div>
        </React.Fragment>
    );
}


export { MainPage }