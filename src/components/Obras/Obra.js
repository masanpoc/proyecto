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
    // let circleDisc = useRef();
    let playButton = useRef();

    // useState definitions
    const [hovering, setHovering] = useState(false);
    const [displaying, setDisplaying] = useState(false);

    // useEffect definitions
    useEffect(() => {
        if(hovering) {
            growCard()
            // rotateDisc()
        } else {
            shrinkCard()
            
        }
    }, [hovering])

    useEffect(() => {
        if(displaying) {
            growPlay()
        } else {
            shrinkPlay()
        }
    }, [displaying])

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
        // .set(circleDisc, {
        //     className: 'circle-disc'
        // }, '>-0.5')
        .from(playButton, {
            duration:0.5,
            autoAlpha: 0
        },'>-0.5')
        .set(playButton, {
            css: {
                display: 'block'
            }
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
        // .set(circleDisc, {
        //     className: 'none'
        // }, '>-0.5')
        .set(playButton, {
            css: {
                display: 'none'
            }
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

    const growPlay = () => {
        const timeline = gsap.timeline(
            // {ease: 'bounce-out'}
        )
        timeline
        .to(playButton, {
            duration:0.5,
            scale: 1.2,
            autoAlpha: 1
        })
        
        
    }

    const shrinkPlay = () => {
        const timeline = gsap.timeline(
            // {ease: 'bounce-out'}
        )
        timeline
        // .to()
        .to(playButton, {
            duration:0.5,
            scale: 1,
            autoAlpha: 0.5
        })
    }

    return (
        <div ref={el => (card = el)} className='obra' onMouseOver={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} >
            <div ref={el => (disc = el)} className='photo' style={{'backgroundImage': `url(${obra.url})` }} 
                onMouseOver={()=>setDisplaying(true)} onMouseLeave={()=>setDisplaying(false)}
            >
                {/* <div ref={el => (circleDisc = el)} className='none'></div> */}
                <button ref={el => (playButton = el)} className='button-to-play' >
                    <svg className='play-figure' viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                    </svg>
                </button>
            </div>
            <div className='titulo'>{obra.titulo}</div>
            <div className='autor'>{obra.autor}</div>
            
            {/* <h4>#{obra.genero}</h4> */}
            {/* <img src={obra.url} alt={`${obra.titulo} imagen`} /> */}
        </div>
    )
}
