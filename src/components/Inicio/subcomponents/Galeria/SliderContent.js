import React from 'react'
import './Galeria.scss';
import {Slide} from './Slide';
// import Pic1 from '../../../../Images/pic-1.jpg';
// import Pic2 from '../../../../Images/pic-2.jpg';
// import Pic3 from '../../../../Images/pic-3.jpg';
// import Pic4 from '../../../../Images/pic-4.jpg';

export const SliderContent = ({translate, transition, width, length, slides}) => {
    
    // const images = [ Pic1, Pic2, Pic3, Pic4 ];
    
    return (
        <div className='slider-content'
         style={{ 'transform': `translateX(-${translate}px)`,
          'transition': `transform ease-out ${transition}s`,
          'width': `${width*length}px` }}
        >
            {/* transicion {translate} {transition} {width} {length} */}
            {slides.map((el, i) => (
                    <Slide key={i} content={el} />
                ))}
        </div>
    )
}
