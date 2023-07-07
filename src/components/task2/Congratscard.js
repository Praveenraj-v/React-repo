import React from "react";
import profile from './congrats-card-profile-img.png'
import watch from './congrats-card-watch-img.png'
import './Congratscard.css';

function Congratscard(){
    return(
        <>
        <div className="container-fluid congratsCardClass">
        <h1 className="text-center">Congratulations</h1>
            <div className="cards p-5 text-center position-relative start-50 translate-middle">
                <img src={profile}/>
                <h2>Kiran V</h2>
                <h5>Vishnu Institute of Computer Education and Technology, Bhimavaram</h5>
                <img src={watch}/>
            </div>
        </div>
        </>
    );
}

export default Congratscard;