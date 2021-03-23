import React, { useRef, useState, useEffect } from 'react';
import '../../Inicio.scss';
import articulo from './Images/concert.jpg';
import gsap from 'gsap';


export const ArticuloFeed = () => {
    return (
        <div className='item2'>
            ArticuloFeed
            <div className='mask'>
                {/* <div ref={el=>(display0=el)} className='bg'></div> */}
                <img 
                // ref={el=>(display=el)}
                 alt='info' src={articulo} className='item2-image' />
            </div>
        </div>
    )
}
