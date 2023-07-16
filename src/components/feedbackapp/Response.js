import React from "react";
import HeartImg from './HeartinImg.png';
import Return from './Return.png';
import './FeedBackApp.css'
import { Link } from "react-router-dom";

export function Response(){
    return(
        <>
        <div className="FeedBackAppBg p-5">
            <div className="p-3 bg-dark col-lg-4 FeedBackAppClass text-center text-light mx-auto mt-5 rounded-5">
                <img src={HeartImg} className="w-25 mt-3"/>
                <h4>Thank You!</h4>
                <h5>We will use your feedback to imporove our customer support performance</h5>
                <button className="border-0 returnBtn"><Link to="/FeedBackApp"> <img src={Return} className="returnImg"/></Link></button>
            </div>
        </div>     
        </>
    );
}