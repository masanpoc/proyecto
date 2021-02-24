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

    const firstSlide = images[0];
    const secondSlide = images[1];
    const lastSlide = images[images.length-1];

    // ver tema width en las funciones
    const width = window.innerWidth;

    // useState definitions
    const [transition, setTransition] = useState(4);
    const [translate, setTranslate] = useState(width);
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentSlides, setCurrentSlides] = useState([lastSlide, firstSlide, secondSlide]);

    // useRef definitions
    const autoPlayRef = useRef();
    const transitionRef = useRef();
    
    // useEffect definitions
    useEffect(() => {
        console.log(activeIndex+1);
    }, [activeIndex]);

    // useEffect(() => {
    //     console.log(translate);
    // }, [translate])

    // autoplay
    useEffect(() => {
        // storing, through re-renders, the reference to a function that contains the most up-to-date useState variables (activeIndex and translate)
        autoPlayRef.current = nextSlide
        transitionRef.current = smoothTransition
    })
    // only running once:
    useEffect(() => {
        // encapsulating the call in a function so that it never gets stored:
        const play = () => {
            // calling the function nextslide, using the updated useState variables
            // as there is no reference to autoplayref --> Js will check for it outside the scope (closure)
            autoPlayRef.current()
        }
        const smooth = (e) => {
            if(e.target.className.includes('slider-content')) {
                transitionRef.current()
            }
        }
        if(props.autoPlay !== null){
            // infinite loop:
            const interval = setInterval(play, props.autoPlay * 1000)
            const transitionEnd = window.addEventListener('transitionend', smooth)
            
            return () => {
                clearInterval(interval)
                window.removeEventListener('transitionend', transitionEnd)
            }
        }
        
    }, [])

    useEffect(() => { 
        if (transition === 0) {
            setTransition(4);
            console.log( 'transition', transition)
        }
    }, [transition])

    // functions
    const getWidth = () => {
        return (
            window.innerWidth
        )
    }

    
    const smoothTransition = () => {
        let _slides = []
        console.log('switch')
        // We're at the last slide.
        if (activeIndex === images.length - 1)
          _slides = [images[images.length - 2], lastSlide, firstSlide]
        // We're back at the first slide. Just reset to how it was on initial render
        else if (activeIndex === 0) _slides = [lastSlide, firstSlide, secondSlide]
        // Create an array of the previous last slide, and the next two slides that follow it.
        else _slides = images.slice(activeIndex - 1, activeIndex + 2)
      
        setCurrentSlides(_slides);
        setTranslate(getWidth());
        setTransition(0);
      }

    const nextSlide = () => {
        // last slide case --> go back to first slide
        // if(activeIndex===images.length-1) {
        //     setTranslate(0);
        //     setActiveIndex(0);
        // }
        // other slides --> else {
        setActiveIndex(activeIndex === (images.length-1) ? 0 : activeIndex + 1); 
        setTranslate(prevWidth => prevWidth+getWidth());
    }

    const prevSlide = () => {
        // last slide case --> go back to first slide
        // if(activeIndex===0) {
        //     // setTranslate(images.length-1);
        //     // setActiveIndex(images.length-1);
        // }
        // other slides --> else {
        setActiveIndex(activeIndex === (images.length-1) ? 0 : activeIndex - 1); 
        setTranslate(0)
    }


    return (
        <div className='slider'>
            <SliderContent className='slider-content' transition={transition} translate={translate} width={getWidth()} length={3} slides={currentSlides} />
            
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
