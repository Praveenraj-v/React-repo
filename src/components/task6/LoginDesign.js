import React from 'react';
import './LoginDesign.css'
import CardImage from './logincardimg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function LoginDesign() {
    return (
        <>
        <body className='loginBg position-relative'>
            <div className="card container LoginDesignClass position-absolute top-50 start-50 translate-middle  rounded-4">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={CardImage} className="img-fluid rounded-start" alt="Card-Image" />
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="card-body d-flex flex-column ">
                            <h1 className="card-title">Member Login</h1>
                                <div className="input-group mt-3 mb-3">
                                    <span className="input-group-text rounded-start-5 bg-light" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></span>
                                    <input type="text" className="form-control inputlogin rounded-end-5 border-start-0 bg-light" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mt-2 mb-3">
                                    <span className="input-group-text rounded-start-5" id="basic-addon1"><FontAwesomeIcon icon={faLock} /></span>
                                    <input type="password" className="form-control inputlogin rounded-end-5 border-start-0 bg-light" placeholder="* * * * *" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                                <button type="button" className="btn LoginButton mt-2 rounded-5">Log in</button>
                                <p className='mt-4'>Forgot <a href='#' className='userlink'>Username / Password ?</a></p>
                            <p className='mt-2'><a href='#' className='createaccount'>Create Your Account</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </>
    );
}

export default LoginDesign;