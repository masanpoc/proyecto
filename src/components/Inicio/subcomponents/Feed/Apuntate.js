import React, { useRef, useState, useEffect } from 'react';
import '../../Inicio.scss';
import apuntate from './Images/rehearsal.jpg';
import gsap from 'gsap';

export const Apuntate = () => {
    return (
        <div className='item4'>
            Apuntate
            <div className='mask'>
                {/* <div ref={el=>(display0=el)} className='bg'></div> */}
                <img 
                // ref={el=>(display=el)}
                 alt='info' src={apuntate} className='item4-image' />
            </div>
        </div>
    )
}
