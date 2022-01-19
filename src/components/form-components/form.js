import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseApiURL } from "../../utils/utils";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BaseSaveFormButton } from "./button";
import { BaseInputFieldForm } from "./field";
import { ToDeleteButton, ToReturnButton } from "../utils/boton";



function BaseForm(props){
    let initialElement
    initialElement = props.initialElement;
    const [stateElement, setStateElement] = useState(initialElement);
    const history = useHistory();
    const onChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setStateElement((v) => ({
            ...v,
            [name]: value
        }))
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const promesa = axios.post(baseApiURL + props.itemsSource, stateElement);
        promesa
            .then(Response => {
                history.push("/distribuidores");
                return Response.data;
            })
            .catch(()=>{
                console.log("on errors")
            })

    }
    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                {
                    props.titles.map(element => {
                        if(element.mapeo !== "codigo"){
                            return <BaseInputFieldForm key={element.key} title={element.texto} 
                                    valueType={element.valueType} fieldValue={ stateElement[element.mapeo] || ""}
                                    onChangeEvent={onChange} mapeo={element.mapeo}/>
                        } else {
                            return "";
                        }
                    })
                }
                <BaseSaveFormButton text="Guardar" />
                <ToReturnButton origen={props.origen}/>
            </form>
        </React.Fragment>
    );
}

function DeleteForm(props){
    const history = useHistory();
    const {codigo} = useParams();
    const deleteAction = ()=>{
        console.log("eliminar", codigo)
        const promesa = axios.delete(baseApiURL + props.itemsSource+ "/" + codigo);
        promesa
            .then(Response => {
                history.push("/distribuidores");
            })
            .catch(()=>{
                console.log("on errors")
            })

    }
    return(
        <React.Fragment>
            <ToDeleteButton texto={props.texto} eventFunction={deleteAction} />
            <ToReturnButton origen={props.origen}/>
        </React.Fragment>
    )
}

export { BaseForm, DeleteForm }