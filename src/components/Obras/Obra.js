import React, { useRef, useEffect, useState, useContext } from 'react';
import {PlayingContext} from './PlayingContext';
import './Obra.scss';
import gsap from 'gsap';

export const Obra = ({obra, number}) => {
    const [active, setActive] = useContext(PlayingContext);
    // constant variables

    // useRef definitions
    let card = useRef();
    let disc = useRef();
    let playButton = useRef();

    // useState definitions
    const [hovering, setHovering] = useState(false);
    const [playing, setPlaying] = useState(false);

    // useEffect(() => {
    //     if(obra.play) {
    //     }
    // }, [])

    useEffect(() => {
        if(hovering) {
            songIn()
        } else {
            songOut()    
        }
    }, [hovering])

    // functions
    const songIn = () => {
        // gsap.to(playButton, {
        //     scale: 1.1,
        //     duration: 1
        // })
    }


    const songOut = () => {
        // gsap.to(playButton, {
        //     scale: 1,
        //     duration: 1
        // })
    }

    const handleClick = () => {
        setPlaying(!playing)
        
        if(playing) {
            setActive(prevState => ({
                ...prevState,
                number: true
            }))
            
            console.log(active, number)
        }
        else {
            // setActive(prevState => ({

            // }))
            
            console.log(active, number)
        }
    }

    return (
        <div className='obra-wrapper'>
            {obra.play ?
                <div className='obra' >
                    <div ref={el => (disc = el)} className='photo shadow' style={{'backgroundImage': `url(${obra.url})` }} 
                        onMouseOver={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
                    >   
                        
                        <button ref={el => (playButton = el)} className='button-to-play' onClick={handleClick}>
                            
                            <div className='outline'>
                                {playing ?
                                    <svg className='pause-figure' viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                                    </svg>
                                    :
                                    <svg className='play-figure' viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                    </svg>
                                }
                                
                            </div>
                        </button>
                    </div>
                    <div className='titulo'>{obra.titulo}</div>
                    <div className='autor'>{obra.autor}</div>
                </div>

                :
                <div className='obra' >
                    <div ref={el => (disc = el)} className='photo' style={{'backgroundImage': `url(${obra.url})` }}></div>
                    <div className='titulo'>{obra.titulo}</div>
                    <div className='autor'>{obra.autor}</div>
                </div>
            }
        </div>
       
    )
}
