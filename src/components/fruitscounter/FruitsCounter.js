import React, { useState } from 'react';
import  BananaImg  from './BananaImg.png';
import  MangoImg  from './MangoImg.png';
import './FruitsCounter.css'



export function FruitsCounter(){
    const[bananaCount,setBananaCount]=useState(0);
    const[mangoCount,setMangoCount]=useState(0);
    return(
        <>
            <body className='FruitCounterBg '>
            <div className="card container FruitCounterClass rounded-4">
                <div>
                    <h1 className='text-center p-2'>VPR ate {bananaCount} Bananas & {mangoCount} Mangoes</h1>
                </div>
                <div className="row g-0">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <img src={BananaImg} className="img-fluid rounded-start" alt="Card-Image" />
                        <div>
                            <button className='btn btn-primary mb-5 fruit-btn' onClick={()=>setBananaCount(bananaCount+1)}>Eat Banana</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <img src={MangoImg} className="img-fluid rounded-start mx-auto" alt="Card-Image" />
                        <div >
                            <button className='btn btn-primary mt-5 fruit-btn' onClick={()=>setMangoCount(mangoCount+1)}>Eat Mango</button>
                        </div>    
                    </div>
                </div>
            </div>
        </body>
        </>
    );
}