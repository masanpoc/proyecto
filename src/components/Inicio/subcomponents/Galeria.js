import React, { useState } from 'react';
import '../Inicio.scss';
import {SliderContent} from './Galeria/SliderContent';
import {Slide} from './Galeria/Slide';
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

    // useState definitions
    const [transition, setTransition] = useState(0.45);
    const [translate, setTranslate] = useState(0);
    
    // useEffect definitions


    // functions
    const getWidth = () => {
        return (
            window.innerWidth
        )
    }

    return (
        <div className='slider'>
            <SliderContent transition={transition} translate={translate} width={getWidth()} length={images.length} >
                {/* {images.map((el, i) => (
                    <Slide key={i} content={el} />
                ))}  */}
            </SliderContent>
            {/* {images.map((el, i) => (
                    <Slide key={i} content={el} />
                ))}  */}
            <Arrow />
            <Dots /> 
        </div>
    )
}
