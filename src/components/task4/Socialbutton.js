import React from "react";
import './Socialbutton.css';
function Socialbutton() {
    return (
        <>
            <body>
                <div className="container-fluid socialButtonClass text-center w-100 vh-100">
                    <div className="position-relative top-50 start-50 translate-middle">
                        <p className="heading text-light">Social Button</p>
                            <button className="text-light bg-warning rounded-4 m-3 p-2 ps-4 pe-4">Like</button>
                            <button className="text-black bg-light rounded-4 m-3 p-2 ps-4 pe-4"> Comment </button>
                            <button className="text-light bg-primary rounded-4 m-3 p-2 ps-4 pe-4">Share</button>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Socialbutton;