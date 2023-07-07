import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{useState} from "react";

function HooksAssignment(){
    const [value,setValue]=useState(0);
    
    return(
        <div className="bg-dark vh-100 position-relative container-fluid">
            <div className="text-center position-absolute top-50 start-50 translate-middle w-100">
                <div className="border bg-dark text-white p-2 border-primary border-3 w-50 mx-auto">
                    <h1>{value}</h1>
                </div>
                <div className="d-flex w-50 mx-auto">
                    <div className="border border-primary border-3 p-3 w-50 mt-3"><button className="bg-dark text-white border border-0 w-100" onClick={()=>setValue(value+1)}>+</button></div>
                    <div className="border border-primary border-3 p-3 ms-4 w-50 mt-3"><button className="bg-dark text-white border border-0 w-100" onClick={()=>setValue(value-1)}>-</button></div>
                    <div className="border border-primary border-3 p-3 ms-4 w-50 mt-3"><button className="bg-dark text-white border border-0 w-100" onClick={()=>setValue(value*0)}><FontAwesomeIcon icon={faArrowsRotate}/></button></div>
                </div>
            </div>
        </div>
    );
}

export default HooksAssignment;