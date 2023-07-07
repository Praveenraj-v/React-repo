import React from 'react';
import './TechnologyCard.css'
import DataImg from './datascientist.png'
import IotImg from './iot.png'
import VrImg from './vrdev.png'
import MlImg from './mldev.png'

function TechnologyCard() {
    return (
        <>
            <div className="technologybg">
                <div className="cardbg container m-auto">
                <div className="Maintechnology justify-content-center align-items-center d-flex">
                <div className="sub w-75">
                    <div className="text-center mt-3">
                        <h1>Learn 4.0 Technologies</h1>
                    </div>
                    <div className="text-center">
                        <p>Get trained by alumni of IITs and top comapanies like Amazon, Microsoft, Intel, Nvidia, Qualcomm, etc. Learn directly proffessionals involved in Product Developement.</p>
                    </div>
                    <div className="row gap-2 justify-content-center align-items-center d-flex">
                        <div className="card col-lg-5 col-md-5 m-3 rounded-3 col-sm-12 card-tech Datashad ">
                            <div className="card-body ">
                                <h5 className="card-title">Data Scientist</h5>
                                <p className="card-text">Data Scientist gather and analyse large sets of structured and unstructured data</p>
                            </div>
                            <div className="float-end">
                                <img src={DataImg} className="card-img-bottom w-25 float-end" />
                            </div>
                        </div>
                        <div className="card col-lg-5 m-3  rounded-3 col-sm-12 card-tech Iotshad">
                            <div className="card-body ">
                                <h5 className="card-title">IOT Developer</h5>
                                <p className="card-text">IOT developers are proffesionals who can develop,manage and monitor IoT devices</p>
                            </div>
                            <div className="float-end">
                                <img src={IotImg} className="card-img-bottom w-25 float-end " />
                            </div>
                        </div>
                        <div className="card col-lg-5 m-3  rounded-3 col-sm-12 card-tech Vrshad">
                            <div className="card-body ">
                                <h5 className="card-title">VR Developer</h5>
                                <p className="card-text">A VR developer creates completely new digital environment that people can see.</p>
                            </div>
                            <div className="float-end">
                                <img src={VrImg} className="card-img-bottom w-25 float-end " />
                            </div>
                        </div>
                        <div className="card col-lg-5  m-3 rounded-3 col-sm-12 card-tech Mlshad">
                            <div className="card-body ">
                                <h5 className="card-title">ML Engineer</h5>
                                <p className="card-text">Machine Learning engineers feed data into models that are defined by data scientists.</p>
                            </div>
                            <div className="float-end">
                                <img src={MlImg} className="card-img-bottom w-25 float-end " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </>
    );
}

export default TechnologyCard;