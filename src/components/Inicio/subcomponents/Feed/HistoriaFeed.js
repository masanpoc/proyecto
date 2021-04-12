import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import '../../Inicio.scss';
import historia from './Images/article.jpg';
import gsap from 'gsap';

export const HistoriaFeed = () => {


    // useEffect definitions
    // useEffect(() => {
    //     slide();
        
    // }, [])

    // useRef definitions
    let imageMove = useRef();
    let maskMove = useRef();
    let headMove = useRef();
    let contentMove = useRef();
    let linkMove = useRef();

    // useState definitiçons
    

    // functions
    const slide = () => {
        const slidetl = gsap.timeline({
            scrollTrigger: {
                // scrub: 1, 
                // markers: true,
                trigger: headMove,
                start: 'top center-=50',
                end: 'top top'
            }
        });
        slidetl
        .from(headMove, {
            autoAlpha: 0,
            duration: 1,
            yPercent: -50,
            xPercent: -50
        })
        .from(contentMove, {
            autoAlpha: 0,
            duration: 1,
            yPercent: 50,
            xPercent: 50
        })
        .from(linkMove, {
            autoAlpha: 0,
            duration: 1,
            yPercent: 100,
        }, '<')
        .from(maskMove, {
            yPercent: -110,
            ease: 'power1.out',
            duration: 1
        })
        .from(imageMove, {
            scale: 1.2,
            yPercent: -150,
            ease: 'power2.out',
            duration: 1.5
        })

    }
 
    return (
        <div className='item-1'>
            <h2 className='header-1' ref={el=>(headMove=el)}>Agrupación de Orquesta Joven en A Coruña</h2>
            <div className='mask'>
                <div
                 ref={el=>(maskMove=el)}

                  className='bg'></div>
                <img 
                ref={el=>(imageMove=el)}
                 alt='info' src={historia} className='info-image' />
            </div>
            <div className='content-1' ref={el=>(contentMove=el)}>
                <h3 className='head'>Aprendiendo música juntos desde 200X</h3>
                <div className='text'>
                    <p>iam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim iptione voluptatem sequi nesciunt. </p>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
                </div>
            </div>
            <span className='link-1' ref={el=>(linkMove=el)}>
                <svg className='arrow' viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                </svg>
                <Link className='link' to='/nosotros/historia'>Ver nuestra historia</Link>
            </span>

        </div>
    )
}
