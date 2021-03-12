import React, { useRef, useEffect, useState } from 'react';
import './Obra.scss';
// import Bach from './Images/Bach.jpg';
// import Vivaldi from './Images/Vivaldi.jpg';
import gsap from 'gsap';

export const Obra = ({obra}) => {

    // constant variables

    // useRef definitions
    let card = useRef();
    let disc = useRef();
    let circleDisc = useRef();

    // useState definitions
    const [hovering, setHovering] = useState(false);

    // useEffect definitions
    useEffect(() => {
        if(hovering) {
            growCard()
            // rotateDisc()
        } else {
            shrinkCard()
            
        }
    }, [hovering])

    // functions
    const growCard = () => {
        const timelineGrow = gsap.timeline(
            // {ease: 'bounce-out'}
        )
        timelineGrow
        .to(card, {
            scale: 1.1,
            duration: 0.5,
        })
        .to(card, {
            duration: 2,
            css: {
                background: 'white'
            }
        }, '>-0.5')
        .to(disc, {
            duration: 0.5,
            css: {
                'borderRadius': '50%'
            }
        }, '>-2')
        .set(circleDisc, {
            className: 'circle-disc'
        }, '>-0.5')
    }
    const shrinkCard = () => {
        const timelineShrink = gsap.timeline(
            // {ease: 'bounce-out'}
        )
        timelineShrink
        .to(card, {
            scale: 1,
            duration: 0.5,
        })
        .to(card, {
            duration: 2,
            css: {
                background: 'gray'
            }
        }, '>-0.5')
        .to(disc, {
            duration: 0.5,
            css: {
                'borderRadius': '0',
            }
        }, '>-2')
        .set(circleDisc, {
            className: 'none'
        }, '>-0.5')

    }

    // const rotateDisc = () => {
        // timeline!!!
    //     console.log('hi')
    //     gsap.to(disc, {
    //         duration: 2,
    //         'ease': 'none',
    //         repeat: -1,
    //         css: {
    //             'rotate': '360deg'
    //         }
    //     })
    // }

    return (
        <div ref={el => (card = el)} className='obra' onMouseOver={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} >
            <div ref={el => (disc = el)} className='photo' style={{'backgroundImage': `url(${obra.url})` }}>
            <div ref={el => (circleDisc = el)} className='none'></div>
            </div>
            <div className='titulo'>{obra.titulo}</div>
            <div className='autor'>{obra.autor}</div>
            
            {/* <h4>#{obra.genero}</h4> */}
            {/* <img src={obra.url} alt={`${obra.titulo} imagen`} /> */}
        </div>
    )
}
