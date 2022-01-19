import React from "react";
import { Link } from "react-router-dom";

function TarjetaMain(props) {
  return(
    <React.Fragment>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{props.titulo}</h5>
            <p class="card-text">
              Una pagina para consultar e interactuar con información de {props.texto}.
            </p>
            <Link to={props.ruta} class="btn btn-primary">
              {props.textoBoton}
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { TarjetaMain }