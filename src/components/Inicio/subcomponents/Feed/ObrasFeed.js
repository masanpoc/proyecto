import React, { useRef, useState, useEffect } from 'react';
import '../../Inicio.scss';
import img_1 from './Images/genre3.jpg';
import img_2 from './Images/genre2.jpg';
import img_3 from './Images/genre1.jpg';
import gsap from 'gsap';

export const ObrasFeed = () => {
    
    // useEffect definitions
    useEffect(() => {
        slide();
        
    }, [])

    // useRef definitions
    let img1 = useRef();
    let img2 = useRef();
    let img3 = useRef();

    // useState definitions
    

    // functions
    const slide = () => {
        gsap.from(img1, {
            // delay: 2,
            autoAlpha: 0,
            // scale: 1.5,
            xPercent: 50,
            // ease: 'power2.in',
            duration: 0.5
        })
        gsap.from(img2, {
            delay: 0.5,
            autoAlpha: 0,
            xPercent: 50,
            // ease: 'power1.in',
            duration: 0.5
        })
        gsap.from(img3, {
            delay: 1,
            autoAlpha: 0,
            xPercent: 50,
            // ease: 'power1.in',
            duration: 0.5
        })
    }

    return (
        <div className='item5'>
            ObrasFeed

            <div className='wrap'>
                <div ref={el=>(img1=el)} className='mask1'>
                    <img  alt='info' src={img_1} className='info-image' />
                </div>
                <div ref={el=>(img2=el)} className='mask2'>
                    <img  alt='info' src={img_2} className='info-image' />
                </div>
                <div ref={el=>(img3=el)} className='mask3'>
                    <img  alt='info' src={img_3} className='info-image' />
                </div>
            </div>

            
        </div>
    )
}
