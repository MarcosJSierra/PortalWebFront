import React from "react";
import { Route, useHistory} from "react-router-dom";
import { Routes } from "react-router";
import { BaseForm, DeleteForm } from "./form-components/form";
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
                    <BaseForm titles={headersRow} initialElement={initialElement} itemsSource="distribuidor" origen="distribuidores"   />
                </Route>
                <Route path="/distribuidores/editar/:codigo">
                    <TituloGeneral titulo="Editar Distribuidor"/>
                    <BaseForm titles={headersRow} itemsSource="distribuidor" initialElement={initialElement}/>
                </Route>
                <Route path="/distribuidores/eliminar/:codigo">
                    <TituloGeneral titulo="Eliminar Distribuidor"/>
                    <DeleteForm texto={"el distribuidor"} origen="distribuidores" itemsSource="distribuidor"/>
                </Route>
        </React.Fragment>
    );
}

export { DistribuidoresMain }