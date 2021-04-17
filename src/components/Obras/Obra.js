import React, { useRef, useEffect, useState, useContext } from 'react';
import {PlayingContext} from './PlayingContext';
import './Obra.scss';
import gsap from 'gsap';
import useSound from 'use-sound';

export const Obra = ({obra}) => {
    const [active, setActive] = useContext(PlayingContext);
    // constant variables

    // useRef definitions
    let card = useRef();
    let disc = useRef();
    let playButton = useRef();

    // useState definitions
    const [hovering, setHovering] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [play, { stop }] = useSound(obra.source, { volume: 0.25 });


    useEffect(() => {
        if(obra.play) {
            setActive(prevState => [...prevState, [obra.titulo, false]]);
        }
        
    }, [])

    useEffect(() => {
        if(obra.play) {
            if(playing) {
                 play();
            }
            else {
                stop();
            }
        }
        return () => { 
            if(obra.play) {
                stop();
            }
        }
    }, [playing])

    useEffect(() => {
         // every time we update our active numbers
        if(obra.play) {
            // console.log(active);
            // looking for this number whether it's true or false

            const matchPlaying = (el) => {
                // only once matched
                if(el[0]===obra.titulo) {
                    // if this number is active --> set the playing to true
                    if(el[1]) {
                        setPlaying(true);
                    }
                    // else set the playing to false
                    else {
                        setPlaying(false);
                    }
                }
            }

            active.forEach(matchPlaying);
             
        }
    }, [active])

    

    const handleClick = () => {
        
        // if we clicked play (it was not playing)
        if(!playing) {
            // set this number true and set the rest false
           
            let copy = active.map((el, i)=> {
                if(el[0]===obra.titulo) {
                    return [obra.titulo, true]
                }
                else {
                    return [el[0], false]
                }
            });

            setActive(copy);

        }

        // if we clicked pause (it was playing)
        else {
            // set inactive all numbers
            let copy2 = active.map((el, i) => {
                if(el[0]===obra.titulo) {
                    return [obra.titulo, false]
                }
                else {
                    return [el[0], false];
                }
                
            });

            setActive(copy2);

        }
    }

    // useEffect(() => {
    //     if(hovering) {
    //         songIn()
    //     } else {
    //         songOut()    
    //     }
    // }, [hovering])

    // functions
    // const songIn = () => {
    //     // gsap.to(playButton, {
    //     //     scale: 1.1,
    //     //     duration: 1
    //     // })
    // }


    // const songOut = () => {
    //     // gsap.to(playButton, {
    //     //     scale: 1,
    //     //     duration: 1
    //     // })
    // }

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
                                        <path fill="currentColor" d="M3,3V21H21V3" />
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
