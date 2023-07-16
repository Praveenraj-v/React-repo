import React from "react";
import './FeedBackApp.css'
import Reality from './Reality.png';
import Originality from './Originality.png';
import Fakeness from './Fakeness.png';
import { Link } from "react-router-dom";

export function FeedBackApp(){
    return(
        <>
            <div className="FeedBackAppBg p-5">
            <div className="FeedBackAppClass bg-dark col-lg-4 text-center mx-auto mt-5 rounded-5 ">
                <div className="row text-align-center">
                <h5 className="mt-5 text-light">How satisfied are you with our customer support performer</h5>
                <p className="mt-5">
                    <button className="m-3 w-25 border-0 bg-dark">
                        <Link to="/Response"><img src={Reality} className="emojiIcons" /> </Link></button>
                    <button className="m-3 w-25 border-0 bg-dark">
                        <Link to="/Response"> <img src={Originality} className="emojiIcons" /></Link></button>
                    <button className=" m-3 w-25 border-0 bg-dark">
                        <Link to="/Response"> <img src={Fakeness} className="emojiIcons" /></Link></button></p>
                </div>
            </div >
        </div >
        </>
    );
}