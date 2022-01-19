import React from "react";
import { Route } from "react-router-dom";
import { BaseForm, DeleteForm } from "./form-components/form";
import { ToCreateButton } from "./utils/boton";
import { BaseTable } from "./utils/table";
import { TituloGeneral } from "./utils/titulo";

function ProductosMain(){
    
    const headersRow = [{key: 1,texto: "Codigo", valueType: "hidden", mapeo: "codigo"},
                        {key: 2, texto:"descripcion", valueType: "text", mapeo: "descripcion"},
                        {key: 3, texto:"monto", valueType: "number", mapeo: "monto"},
                        {key: 4, texto:"distribuidor", valueType: "number", mapeo: "distribuidor", displayName: "nombre"}];
    const referenceValues = ["distribuidor"]
    const initialElement = {
        descripcion: "",
        monto: "",
        distribuidor: ""
    }
    return (
        <React.Fragment>
            <Route exact path="/productos">
                    <TituloGeneral titulo="Productos" />
                    <ToCreateButton texto="Producto" origen="productos" />
                    <BaseTable titles={headersRow} itemsSource="producto" base="productos" displayName={"nombre"}/>
                </Route>
                <Route exact path="/productos/create">
                    <TituloGeneral titulo="Nuevo Producto" />
                    <BaseForm titles={headersRow} initialElement={initialElement} itemsSource="producto" origen="productos" referenceValues={referenceValues} />
                </Route>
                <Route path="/productos/editar/:codigo">
                    <TituloGeneral titulo="Editar Producto"/>
                    <BaseForm titles={headersRow} itemsSource="producto" initialElement={initialElement}/>
                </Route>
                <Route path="/productos/eliminar/:codigo">
                    <TituloGeneral titulo="Eliminar Producto"/>
                    <DeleteForm texto={"el distribuidor"} origen="productos" itemsSource="producto"/>
                </Route>
        </React.Fragment>
    );
}

export { ProductosMain }