import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import '../../Inicio.scss';
import apuntate from './Images/rehearsal.jpg';
import gsap from 'gsap';

export const Apuntate = () => {

    
    // useEffect definitions
    useEffect(() => {
        slide();
        
    }, [])

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
        <div className='item-3'>
             <h2 className='header-3' ref={el=>(headMove=el)}>Te gustaría formar parte de la orquesta?</h2>
            <div className='mask'>
                <div 
                ref={el=>(maskMove=el)}

                 className='bg'></div>
                <img 
                ref={el=>(imageMove=el)}
                 alt='info' src={apuntate} className='item-3-image' />
            </div>
            <div className='content-3' ref={el=>(contentMove=el)}>
                <h3 className='head'>Únete a la agrupación</h3>
                <div className='text'>
                    <p>iam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim iptione voluptatem sequi nesciunt. </p>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
                </div>
            </div>
            <span className='link-3' ref={el=>(linkMove=el)}>
                <svg className='arrow' viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                </svg>
                <Link className='link' to='/nosotros/conocenos' >Conócenos</Link>
            </span>
        </div>
    )
}
