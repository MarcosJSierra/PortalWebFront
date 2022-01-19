import React from "react";
import { Route, useHistory} from "react-router-dom";
import { BaseForm } from "./form-components/form";
import { ToCreateButton } from "./utils/boton";
import { BaseTable } from "./utils/table";
import { TituloGeneral } from "./utils/titulo";

function DistribuidoresMain(){
    const headersRow = [{key: 1,texto: "Codigo", valueType: "hidden", mapeo: "codigo"},
                        {key: 2, texto:"Nombre", valueType: "text", mapeo: "nombre"},
                        {key: 3, texto:"Correo de Notificacion", valueType: "email", mapeo: "correoNotificacion"},
                        {key: 4, texto:"Correo de Alertas", valueType: "email", mapeo: "correoAlerta"}]
    const initialElement = {
        nombre: "",
        correoNotificacion: "",
        correoAlerta: ""
    }
    return (
        <React.Fragment>
            <Route exact path="/distribuidores">
                <TituloGeneral titulo="Distribuidores" />
                <ToCreateButton texto="Distribuidor" origen="distribuidores" />
                <BaseTable titles={headersRow} itemsSource="distribuidor" base="distribuidores"/>
            </Route>
            <Route exact path="/distribuidores/create">
                <TituloGeneral titulo="Nuevo Distribuidor" />
                <BaseForm titles={headersRow} initialElement={initialElement} itemsSource="distribuidor"  />
            </Route>
            <Route exact path="/distribuidores/edit">

            </Route>

        </React.Fragment>
    );
}

export { DistribuidoresMain }