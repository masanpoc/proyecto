import React from 'react'
import './Galeria.scss';

const Dot = ({active}) => {
    return (
        <div className='dot' 
            style={
                active 
                ? {'background-color': 'gray'}
                : {'background-color': 'white'}
            }
        >
            
        </div>
    )
}


export const Dots = ( {activeIndex, images}) => {
    return (
        <div className='dots' >
            {images.map((el, i) => (
                <Dot key={el} active={activeIndex===i} />
            ))}
        </div>
    )
}
