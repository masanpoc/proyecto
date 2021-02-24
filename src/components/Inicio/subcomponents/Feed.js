import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../Inicio.scss';
import {Noticia} from './Feed/Noticia';
import {Info} from './Feed/Info';
import {Programa} from './Feed/Programa';
import {Video} from './Feed/Video';
import {Instrumento} from './Feed/Instrumento';
import '../Inicio.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




export const Feed = () => {
    gsap.registerPlugin(ScrollTrigger);
    // constant variables
    // useState definitions
    // useRef definitions
    const revealRefs = useRef([]);
    // revealRefs.current = [];

    // useEffect definitions
    useEffect(() => {
        revealRefs.current.forEach((el, index) => {
            gsap.fromTo(el, {
                autoAlpha:0
            }, {
                duration: 1,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index+1}`,
                    trigger: el,
                    start: 'top-=100 center',
                    end: 'top+=200 center',
                    scrub: true,
                    // markers: true
                } 
            });
        });
        
    }, []);
    // functions
    const addToRefs = (el) => {
        if(el && !revealRefs.current.includes(el)){
         revealRefs.current.push(el)
        }
    }

    return (
        <div className='feed'>
            {/* ultima noticia de articulos --+enlace*/}
            <div ref={addToRefs} ><Noticia  /></div>
            {/* nosotros y obras en breve --+enlaces*/}
            <div ref={addToRefs} className='sub-feed'>
                <Info  />
                <Programa />
            </div>
            {/* video de nosotros tocando */}
            <div ref={addToRefs} ><Video /></div>
            {/* instrumentos +enlace a conocenos */}
            <div ref={addToRefs} ><Instrumento /></div>
        </div>
    )
}
