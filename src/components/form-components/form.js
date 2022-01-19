import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseApiURL } from "../../utils/utils";
import { useHistory } from "react-router-dom";
import { BaseSaveFormButton } from "./button";
import { BaseInputFieldForm } from "./field";
import { push } from "connected-react-router";

function BaseForm(props){

    const [stateElement, setStateElement] = useState(props.initialElement);
    let history = useHistory();

    const onChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name)
        setStateElement((v) => ({
            ...v,
            [name]: value
        }))
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(stateElement);
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
            </form>
        </React.Fragment>
    );
}

export { BaseForm }