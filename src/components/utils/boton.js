import React from "react";
import { Link } from "react-router-dom";
function ToCreateButton(props){
    return(
        <React.Fragment>
            <Link to={"/" + props.origen + "/create" } tittle="Crear" className="btn btn-primary">Crear Nuevo {props.texto}</Link>
        </React.Fragment>
    );
}

function ToDeleteButton(props){
    return(
        <React.Fragment>
            <button onClick={props.eventFunction} tittle="Crear" className="btn btn-danger">¿Seguro desea borrar {props.texto}?</button>
        </React.Fragment>
    );
}
function ToReturnButton(props){
    return(
        <React.Fragment>
            <Link to={"/" + props.origen} tittle="Volver" className="btn btn-warning">Volver al menú</Link>
        </React.Fragment>
    );
}

export { ToCreateButton, ToReturnButton, ToDeleteButton }