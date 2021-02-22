import React, { useState, useEffect, useRef } from 'react';
import '../Inicio.scss';
import {SliderContent} from './Galeria/SliderContent';
import {Arrow} from './Galeria/Arrow';
import {Dots} from './Galeria/Dots';
import './Galeria/Galeria.scss';
import Pic1 from '../../../Images/pic-1.jpg';
import Pic2 from '../../../Images/pic-2.jpg';
import Pic3 from '../../../Images/pic-3.jpg';
import Pic4 from '../../../Images/pic-4.jpg';


export const Galeria = (props) => {

    // variables
    const images = [ Pic1, Pic2, Pic3, Pic4 ];
    // ver tema width en las funciones
    const width = window.innerWidth;

    // useState definitions
    const [transition, setTransition] = useState(2.5);
    const [translate, setTranslate] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // useRef definitions
    const autoPlayRef = useRef();
    
    // useEffect definitions
    // useEffect(() => {
    //     console.log(activeIndex);
    // }, [activeIndex]);

    // useEffect(() => {
    //     console.log(translate);
    // }, [translate])

    // autoplay
    useEffect(() => {
        // storing, through re-renders, the reference to a function that contains the most up-to-date useState variables (activeIndex and translate)
        autoPlayRef.current = nextSlide
    })
    // only running once:
    useEffect(() => {
        // encapsulating the call in a function so that it never gets stored:
        const play = () => {
            // calling the function nextslide, using the updated useState variables
            // as there is no reference to autoplayref --> Js will check for it outside the scope (closure)
            autoPlayRef.current()
        }
        if(props.autoPlay !== null){
            // infinite loop:
            const interval = setInterval(play, props.autoPlay * 1000)
            return () => clearInterval(interval)
        }
        
    }, [])

    // functions
    const getWidth = () => {
        return (
            window.innerWidth
        )
    }

    const nextSlide = () => {
        // last slide case --> go back to first slide
        if(activeIndex===images.length-1) {
            setTranslate(0);
            setActiveIndex(0);
        }
        // other slides -->
        else {
            setActiveIndex(prevIndex => prevIndex+1); 
            setTranslate(prevWidth => prevWidth+getWidth());
        }
    }

    const prevSlide = () => {
        // last slide case --> go back to first slide
        if(activeIndex===0) {
            // setTranslate(images.length-1);
            // setActiveIndex(images.length-1);
        }
        // other slides -->
        else {
            setActiveIndex(prevIndex => prevIndex-1); 
            setTranslate(prevWidth => prevWidth-getWidth())
        }
    }

    return (
        <div className='slider'>
            <SliderContent transition={transition} translate={translate} width={getWidth()} length={images.length} />
            
            {!props.autoPlay && (
                <>
                    <Arrow direction={'left'}  handleClick={prevSlide}/>
                    <Arrow direction={'right'} handleClick={nextSlide}/>
                </>
            )}
            <Dots activeIndex={activeIndex} images={images}/> 
        </div>
    )
}

Galeria.defaultProps = {
    autoPlay: null
}
