import React, { useRef, useEffect } from 'react';
import './Intro.scss';
import gsap from 'gsap';
import IntroPic from '../../Images/intro.jpg';
// import intro_pic2 from './Images/pic-intro2.jpg'; 
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

export const Intro = () => {

    // useRef definitions 
    let intro = useRef();
    let lamina = useRef();

    // useEffect definitions
    useEffect(() => {
        gsap.to(lamina.children, {
            delay: 2,
            // ease: 'power1.in',
            yPercent: -60,
            scaleY: 0.1,
            autoAlpha: 0,
            duration: 1.5
        })
        gsap.set(intro, {
            delay:3.5,
            className: 'none'
        })
        
    }, [])

    return (
        <div ref={el => (intro=el)} className='intro'>
            {/* transicion de efecto lamina */}
            <div ref={el => (lamina=el)} className='lamina'>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
            </div>
            {/* animacion de efecto lupa */}

            {/* transicion de letras de autores x4 */}

            {/* transicion de subtitulos 1 y 2 */}
        </div>
    )
}
