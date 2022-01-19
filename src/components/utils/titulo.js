import React from 'react';

function TituloGeneral(props){
    return(
        <h1 className="mt-3 mb-3 ml-5">{props.titulo}</h1>
    );
}

export { TituloGeneral }