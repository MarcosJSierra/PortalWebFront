import React from "react";
import { Link } from "react-router-dom";
function ToCreateButton(props){
    return(
        <React.Fragment>
            <Link to={"/" + props.origen + "/create" } tittle="Crear" className="btn btn-primary">Crear Nuevo {props.texto}</Link>
        </React.Fragment>
    );
}

export { ToCreateButton }