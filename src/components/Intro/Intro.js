import React, { useRef, useEffect } from 'react';
import './Intro.scss';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

export const Intro = () => {

    // useRef definitions 
    let intro = useRef();

    // useEffect definitions
    useEffect(() => {
        gsap.to(intro.children, {
            delay: 2,
            // ease: 'power1.in',
            yPercent: -60,
            scaleY: 0.1,
            autoAlpha: 0,
            duration: 2
        })
        
    }, [])

    return (
        <div ref={el => (intro=el)} className='intro'>
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
    )
}
