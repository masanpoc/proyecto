import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation } from 'react-router-dom';
import './Articulos.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Lista = () => {

    // useRef definitions
    let arrow = useRef();
    let crop1 = useRef();
    let shadow1 = useRef();
    let crop2 = useRef();
    let crop3 = useRef();
    let shadow3 = useRef();
    let crop4 = useRef();


    // useEffect definitions
    useEffect(() => {
        // scrolling intro animations --> no timeline needed, just scrolltriggering
        
        gsap.from(arrow, {
            yPercent: 40,
            yoyo: true,
            repeat:-1,
            duration: 1
        })

        // first article

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: shadow1,
                start: 'top bottom',
                // markers: true
            }
        });

        tl1
        .from(shadow1, {
            xPercent: 30,
            autoAlpha: 0,
            duration: 1
        })
        .from(crop1, {
            rotateY: '50deg',
            autoAlpha: 0,
            duration: 1.5
        })
        .from(crop1.children, {
            stagger: {
                each: 0.1,
                ease: 'circ.out'
            },
            autoAlpha: 0,
            duration: 1
        })
        
        // second article
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: crop2,
                start: 'top center',
                // end: 'center center+=5%',
                // markers: true,
                // scrub: 3,
                // once: true
            }
        });

        tl2
       .from(crop2, {
            // scale: 1.2,
            autoAlpha: 0,
            duration: 1,
            yPercent: 20,
        })
        .from(crop2.children, {
            stagger: {
                each: 0.1,
                ease: 'circ.out'
            },
            autoAlpha: 0,
            duration: 2
        })

        // third article
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: shadow3,
                start: 'top bottom',
                // end: 'center center+=5%',
                // markers: true,
                // scrub: 6,
                // once: true
            }
        });

        tl3
        .from(shadow3, {
            xPercent: -30,
            autoAlpha: 0,
            duration: 1
        })
        .from(crop3, {
            rotateY: '-50deg',
            // rotateX: '25deg',
            autoAlpha: 0,
            duration: 1.5
        })
        .from(crop3.children, {
            stagger: {
                each: 0.1,
                ease: 'circ.out'
            },
            autoAlpha: 0,
            duration: 1
        })

        // fourth article
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: crop4,
                start: 'top center-=10%',
                // end: 'center center+=5%',
                // markers: true,
                // scrub: 3,
                // once: true
            }
        });

        tl4
       .from(crop4, {
            // scale: 1.2,
            autoAlpha: 0,
            duration: 1,
            yPercent: 20,
        })
        .from(crop4.children, {
            stagger: {
                each: 0.1,
                ease: 'circ.out'
            },
            autoAlpha: 0,
            duration: 2
        })

    }, [])

    // function definitions

    return (
        <div className='lista'>
            <link rel="preload" as="style" href="./Articulos.scss"></link>
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
            <div className='articles-wrapper'>
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
            </div>
            {/* <div className='loader'>
                Botón de cargar más (aparece si hay más)
            </div> */}
           
        </div>
    )
}
