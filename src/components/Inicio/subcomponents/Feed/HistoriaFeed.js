import React, { useRef, useState, useEffect } from 'react';
import '../../Inicio.scss';
import historia from './Images/article.jpg';
import gsap from 'gsap';

export const HistoriaFeed = () => {


    // useEffect definitions
    useEffect(() => {
        slide();
        
    }, [])

    // useRef definitions
    let display = useRef();
    let display0 = useRef();

    // useState definitions
    

    // functions
    const slide = () => {
        gsap.from(display, {
            delay: 2,
            scale: 1.5,
            yPercent: -150,
            ease: 'power2.in',
            duration: 1.5
        })
        gsap.from(display0, {
            delay: 1,
            yPercent: -110,
            ease: 'power1.in',
            duration: 1
        })
    }
 
    return (
        <div className='item1'>
            HistoriaFeed
            <div className='mask'>
                <div ref={el=>(display0=el)} className='bg'></div>
                <img ref={el=>(display=el)} alt='info' src={historia} className='info-image' />
            </div>
        </div>
    )
}
