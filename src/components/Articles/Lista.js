import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation } from 'react-router-dom';
import './Articulos.scss';
import gsap from 'gsap';

export const Lista = () => {
    // constant variables

    // useRef definitions
    let arrow = useRef();
    let crop1 = useRef();
    let shadow1 = useRef();
    let crop2 = useRef();
    let crop3 = useRef();
    let shadow3 = useRef();
    let crop4 = useRef();

    // useState definitions

    // useEffect definitions
    useEffect(() => {
        // scrolling intro animations
        // gsap.from(crop1, {
        //     // autoAlpha: 0,
        //     rotateY: '50deg',
        //     rotateX: '-15deg',
        //     // rotateZ: '10deg',
        //     duration: 1.5
        // })
        // gsap.from(crop1.children, {
        //     stagger: {
        //         each: 0.1,
        //         ease: 'circ.out',
        //         // from: 'edges'
        //     },
        //     delay: 2,
        //     autoAlpha: 0,
        //     duration: 1
        // })
        // gsap.from(shadow1, {
        //     xPercent: 50,
        //     duration: 1.5
        // })
        // gsap.from(arrow, {
        //     yPercent: 40,
        //     yoyo: true,
        //     repeat:-1,
        //     duration: 1
        // })
        // gsap.from(crop2, {
        //     delay: 1,
        //     // scale: 1.2,
        //     // autoAlpha: 0,
        //     duration: 1.5,
        //     yPercent: 30,
        // })
    }, [])

    // useEffect(() => {
    //     // hover animations
    // inspiration of portfolio yesterday
    // }, [whateverStateOnMouse])

    // function definitions

    return (
        <div className='lista'>

            <div className='intro-articles'>
                <h1 className='heading'>Artículos sobre música</h1>
                <p className='description'>Algunos de nuestros miembros han escrito artículos increíbles sobre música clásica</p>
                <div className='wrap-arrow'>
                    <h2 className='info'>Descúbrelos aquí abajo</h2>
                    <svg ref={el=>(arrow=el)} style={{"width":"24px", "height":"24px"}} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z" />
                    </svg>
                </div>
                
            </div>

            {/* articulos --> a medida que se añaden ir poniendo classname 1, 2, 3, 4,... 1, 2, 3, 4-... */}
            <div className='article-1'>
                <div ref={el=>(crop1=el)} className='cropped-1'>
                    <h3 className='title'>Titulo que sea sobre orquesta por ejemplo</h3>
                    <p className='abstract-0'>Resumen:</p>
                    <p className='abstract' >Algunos de nuestros miembros han escrito artículos increíbles sobre música clásica</p>
                    <Link className='link' to='/articulos/1'> {'>> '}Leer artículo</Link>
                </div>
                <div ref={el=>(shadow1=el)} className='shadowing'></div>
            </div>
            <div className='article-2'>
                <div ref={el=>(crop2=el)} className='cropped-2'>
                    <h3 className='title'>Titulo que sea sobre orquesta por ejemplo</h3>
                    <p className='abstract-0'>Resumen</p>
                    <p className='abstract' >Algunos de nuestros miembros han escrito artículos increíbles sobre música clásica</p>
                    <Link className='link' to='/articulos/2'>{'>> '}Leer artículo</Link>
                </div>
            </div>
            <div className='article-3'>
                <div ref={el=>(crop3=el)} className='cropped-3'>
                    <h3 className='title'>Titulo que sea sobre orquesta por ejemplo</h3>
                    <p className='abstract-0'>Resumen</p>
                    <p className='abstract' >Algunos de nuestros miembros han escrito artículos increíbles sobre música clásica</p>
                    <Link className='link' to='/articulos/3'>{'>> '}Leer artículo</Link>
                </div>
                <div ref={el=>(shadow3=el)} className='shadowing'></div>
            </div>
            <div className='article-4'>
                <div ref={el=>(crop4=el)} className='cropped-4'>
                    <h3 className='title'>Titulo que sea sobre orquesta por ejemplo</h3>
                    <p className='abstract-0'>Resumen</p>
                    <p className='abstract' >Algunos de nuestros miembros han escrito artículos increíbles sobre música clásica</p>
                    <Link className='link' to='/articulos/4'>{'>> '}Leer artículo</Link>
                </div>
            </div>

            
            {/* <div className='loader'>
                Botón de cargar más (aparece si hay más)
            </div> */}
           
        </div>
    )
}