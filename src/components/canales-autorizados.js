import React from "react";
import { Route } from "react-router-dom";
import { BaseForm, DeleteForm } from "./form-components/form";
import { ToCreateButton } from "./utils/boton";
import { BaseTable } from "./utils/table";
import { TituloGeneral } from "./utils/titulo";

function CanalesAutorizadosMain(){
    
    const headersRow = [{key: 1,texto: "Codigo", valueType: "hidden", mapeo: "codigo"},
                        {key: 2, texto:"nombre", valueType: "text", mapeo: "nombre"},
                        {key: 4, texto:"distribuidor", valueType: "number", mapeo: "distribuidor", displayName: "nombre"}];
    const referenceValues = ["distribuidor"]
    const initialElement = {
        nombre: "",
        distribuidor: ""
    }
    return (
        <React.Fragment>
            <Route exact path="/canalesautorizados">
                    <TituloGeneral titulo="Canales Autorizados" />
                    <ToCreateButton texto="Canal Autorizado" origen="canalesautorizados" />
                    <BaseTable titles={headersRow} itemsSource="canalautorizado" base="canalesautorizados" displayName={"nombre"}/>
                </Route>
                <Route exact path="/canalesautorizados/create">
                    <TituloGeneral titulo="Nuevo Canal Autorizado" />
                    <BaseForm titles={headersRow} initialElement={initialElement} itemsSource="canalautorizado" origen="canalesautorizados" referenceValues={referenceValues} />
                </Route>
                <Route path="/canalesautorizados/editar/:codigo">
                    <TituloGeneral titulo="Editar Canal Autorizado"/>
                    <BaseForm titles={headersRow} itemsSource="canalautorizado" initialElement={initialElement}/>
                </Route>
                <Route path="/canalesautorizados/eliminar/:codigo">
                    <TituloGeneral titulo="Eliminar Canal Autorizado"/>
                    <DeleteForm texto={"el canal"} origen="canalesautorizados" itemsSource="canalautorizado"/>
                </Route>
        </React.Fragment>
    );
}

export { CanalesAutorizadosMain }