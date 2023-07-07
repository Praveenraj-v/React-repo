import React from "react";
import './Superoverleague.css'
import Csk from './csk-img.png';
import Rcb from './rcb-img.png';

function Superoverleague(){
    return(
        <>
        <div className="Container-fluid superOverLeagueClass p-5 text-center">
        <h1 className="text-light">Super Over League</h1>
        <div className="mt-5">
            <img src={Rcb} className="cskimg"/>
            <img src={Csk} className="rcbimg"/>
        </div>
        </div>
        </>
    );
}

export default Superoverleague;