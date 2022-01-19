import React from "react";

function BaseInputFieldForm(props){
    return (
        <React.Fragment>
            <div className="input-group mb-3 ">
                <span className="input-group-text" id="basic-addon1">{props.title}</span>
                <input type={props.valueType} className="form-control" placeholder={props.title} aria-label={props.title}
                    name={props.mapeo} aria-describedby="basic-addon1" onChange={props.onChangeEvent}/>
            </div>
        </React.Fragment>
    );
}

export {BaseInputFieldForm}