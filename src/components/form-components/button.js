import React from "react";

function BaseSaveFormButton(props){
    return (
        <React.Fragment>
            <div className="mb-3">
                <button type="submit" className= "btn btn-success">
                    {props.text}
                </button>
            </div>
        </React.Fragment>
    );
}

export {BaseSaveFormButton}