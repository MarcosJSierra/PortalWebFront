import React from "react";
import { Link } from "react-router-dom";

function TarjetaMain(props) {
  return(
    <React.Fragment>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
            <p className="card-text">
              Una pagina para consultar e interactuar con información de {props.texto}.
            </p>
            <Link to={props.ruta} className="btn btn-primary">
              {props.textoBoton}
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { TarjetaMain }