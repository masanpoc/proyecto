import React, { useState, useEffect } from 'react';
import '../Inicio.scss';
import {SliderContent} from './Galeria/SliderContent';
import {Arrow} from './Galeria/Arrow';
import {Dots} from './Galeria/Dots';
import './Galeria/Galeria.scss';
import Pic1 from '../../../Images/pic-1.jpg';
import Pic2 from '../../../Images/pic-2.jpg';
import Pic3 from '../../../Images/pic-3.jpg';
import Pic4 from '../../../Images/pic-4.jpg';


export const Galeria = () => {

    // variables
    const images = [ Pic1, Pic2, Pic3, Pic4 ];
    // ver tema width en las funciones
    const width = window.innerWidth;

    // useState definitions
    const [transition, setTransition] = useState(2.5);
    const [translate, setTranslate] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    
    // useEffect definitions
    // useEffect(() => {
    //     console.log(activeIndex);
    // }, [activeIndex]);

    // useEffect(() => {
    //     console.log(translate);
    // }, [translate])

    // functions
    const getWidth = () => {
        return (
            window.innerWidth
        )
    }

    const nextSlide = () => {
        // last slide case --> go back to first slide
        if(activeIndex===images.length-1) {
            // setTranslate(0);
            // setActiveIndex(0);
        }
        // other slides -->
        else {
            setActiveIndex(prevIndex => prevIndex+1); 
            setTranslate(prevWidth => prevWidth+width);
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
            setTranslate(prevWidth => prevWidth-width)
        }
    }

    return (
        <div className='slider'>
            <SliderContent transition={transition} translate={translate} width={getWidth()} length={images.length} />
            <Arrow direction={'left'}  handleClick={prevSlide}/>
            <Arrow direction={'right'} handleClick={nextSlide}/>
            <Dots activeIndex={activeIndex} images={images}/> 
        </div>
    )
}
