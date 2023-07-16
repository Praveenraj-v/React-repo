import React, { useEffect, useState } from "react";
import './JsonAssignment.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";


export function JsonAssignment() {
    const [viewdata, setViewdata] = useState([])
    const [activeCard, setActiveCard] = useState(null);
    const handleToggleDescription = (index) => {
        setActiveCard(index === activeCard ? null : index);
    };
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then(res => res.json())
            .then(data => setViewdata(data))
    }
    )
    return (
        <>
            <div className="row justify-content-center p-2 bg-dark">
                {viewdata.map((value, index) => (
                    <>
                        <div class="card col-lg-3 col-md-3 col-sm-12 border-5 border-dark  m-3">

                            <div class="card-body p-2 rounded-5">
                                <h4 class="card-title text-start">TITLE : {value.title}</h4>
                                <h6 class="card-text fst-italic text-secondary">CATEGORY : {value.category}</h6>
                                <h4 class="card-text fw-bolder">PRICE : <FontAwesomeIcon icon={faIndianRupeeSign} />.{value.price}</h4>
                            </div>
                            <div className="float-end ">
                                <img src={value.image} className="card-img-top w-50 float-end pic" />
                            </div>
                            <div className="buttonIcon justify-content-center d-flex p-2">
                                <Link to={`/detail/${value.id}`} className="btn btn-dark w-50 rounded-5 p-1">Add to Cart</Link>
                            </div>
                            <br />
                            {index === activeCard && (
                                <p className="card-text"><b>Description : </b>
                                {value.description}</p>
                            )}
                            <div>
                                <p role="button" tabindex="0" className="float-end text-decoration-underline text-primary p-1 mb-2" onClick={() => handleToggleDescription(index)}>
                                {index === activeCard ? "Show Less" : "Show More"} <FontAwesomeIcon icon={faAnglesRight} />
                                </p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}