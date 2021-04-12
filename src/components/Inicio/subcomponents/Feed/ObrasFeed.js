import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import '../../Inicio.scss';
import img_1 from './Images/genre3.jpg';
import img_2 from './Images/genre2.jpg';
import img_3 from './Images/genre1.jpg';
import gsap from 'gsap';

export const ObrasFeed = () => {
    
    // useEffect definitions
    // useEffect(() => {
    //     slide();
    // }, [])

    // useRef definitions
    let img1 = useRef();
    let img2 = useRef();
    let img3 = useRef();
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
                ease: 'power2.out',
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
        }, 0)
        .from(img1, {
            autoAlpha: 0,
            xPercent: 50,
            duration: 1
        }, '>0.5')
        .from(img2, {
            autoAlpha: 0,
            xPercent: 50,
            duration: 1
        })
        .from(img3, {
            autoAlpha: 0,
            xPercent: 50,
            duration: 1
        })
        .from(linkMove, {
            autoAlpha: 0,
            duration: 1,
            yPercent: 100,
        }, '>0.5')
        
    }


    return (
        <div className='item-2'>

            

            <h2 className='header-2' ref={el=>(headMove=el)}>Obras que hemos interpretado</h2>
            
            <div className='content-2' ref={el=>(contentMove=el)}>
                <h3 className='head'>Desde piezas clásicas, hasta canciones navideñas</h3>
                <div className='text'>
                    <p>iam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim iptione voluptatem sequi nesciunt. </p>
                    {/* <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p> */}
                </div>
            </div>
            <div className='wrap'>
                <div ref={el=>(img1=el)} className='mask1'>
                    <img  alt='info' src={img_1} className='info-image-1' />
                </div>
                <div ref={el=>(img2=el)} className='mask2'>
                    <img  alt='info' src={img_2} className='info-image-2' />
                </div>
                <div ref={el=>(img3=el)} className='mask3'>
                    <img  alt='info' src={img_3} className='info-image-3' />
                </div>
            </div>
            <span className='link-2' ref={el=>(linkMove=el)}>
                <svg className='arrow' viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                </svg>
                <Link className='link' to='/obras'>Ver selección de obras</Link>
                {/* <a href='#none'>Ver selección de obras </a> */}
            </span>
        </div>
    )
}
