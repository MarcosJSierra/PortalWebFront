import React, { useEffect, useState } from "react";
import { baseApiURL } from "../../utils/utils"
import axios from "axios";
import { Link } from "react-router-dom";

function BaseTable(props){
    let elementosIniciales = [];
    const [elementos, setElementos] = useState(elementosIniciales);
    useEffect(() =>{
        const promesa = axios.get(baseApiURL + props.itemsSource);
        promesa
            .then(Response => {
                return Response.data;
            })
            .then((response) => {
                setElementos(response)
            })
            .catch(()=>{
                console.log("on errors")
            })
        
    }, [setElementos]);
    return(
        <React.Fragment>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    {props.titles.map(element => (
                            <ThBase key={element.key} texto={element.texto}/>
                    ))}
                    <th>Opciones</th>
                    </tr>
                    {
                            elementos.map(element => (
                                <TdBase key={element.codiigo} elemento={element} origen={props.base}/>
                            ))
                    }
                    
                </thead>
            </table>
        </React.Fragment>
    );
}

function ThBase(props){
    return(
        <th>
            {props.texto}
        </th>
    )
}

function TdBase(props){
    let valores = Object.entries(props.elemento);
    
    return(
        <React.Fragment>
            <tr>
                {valores.map(arreglo => (
                    <td key={arreglo[1]}>
                        {arreglo[1]}
                    </td>
                ))}
                <td>
                    <Link to={"/"+props.origen+"/editar/"+props.elemento.codigo}>Editar</Link>
                     |
                    <Link to={"/"+props.origen+"/eliminar/"+props.elemento.codigo}>Eliminar</Link>
                </td>
            </tr>
        </React.Fragment>
    )
}



export {BaseTable}