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
        const slidetl = gsap.timeline();
        slidetl
        .from(display0, {
            yPercent: -110,
            ease: 'power1.in',
            duration: 1
        })
        .from(display, {
            scale: 1.5,
            yPercent: -150,
            ease: 'power2.in',
            duration: 1.5
        }, '>-0.5')
    }
 
    return (
        <div className='item1'>
            <h2 className='header-1'>Agrupación de Orquesta Joven en A Coruña</h2>
            <div className='mask'>
                <div ref={el=>(display0=el)} className='bg'></div>
                <img ref={el=>(display=el)} alt='info' src={historia} className='info-image' />
            </div>
            <div className='content-1'>
                <h3>Aprendiendo música juntos desde 200X</h3>
                <div>
                    <p>iam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim iptione voluptatem sequi nesciunt. </p>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
                </div>
            </div>
            <span className='link-1'>
                arrow svg
                <a href='#none'>Ver nuestra historia </a>
            </span>

        </div>
    )
}
