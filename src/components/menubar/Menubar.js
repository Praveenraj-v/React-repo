import React from "react";
import { Link } from "react-router-dom";
import './Menubar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Menubar(){
    return(
        <>
        <div className="sticky-top w-100">
            <nav className="navbar navbar-menu navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">ReactJS <FontAwesomeIcon icon={faReact}/> </a>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav menuBar">
                        <Link to='/'><li className="nav-item p-2 ">Home</li></Link>
                        <Link to='/Congratscard'><li className="nav-item p-2 ">Congrats Card</li></Link>
                        <Link to='/Superoverleague'><li className="nav-item p-2 ">Super Over League</li></Link>
                        <Link to='/Socialbutton'><li className="nav-item p-2 ">Social Button</li></Link>
                        <Link to='/Notifications'><li className="nav-item p-2 ">Notifications</li></Link>
                        <Link to='/LoginDesign'><li className="nav-item p-2 ">Login Design</li></Link>
                        <Link to='/TechnologyCard'><li className="nav-item p-2 ">Technology Card</li></Link>
                        <Link to='/HooksAssignment'><li className="nav-item p-2 ">Hooks Assign</li></Link>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    );
}

export default Menubar;