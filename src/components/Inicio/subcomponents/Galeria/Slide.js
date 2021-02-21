import React from 'react'
import './Galeria.scss';

export const Slide = ({ content }) => {
    return (
        <div className='slide' style={{'background-image': `url(${content})`}}>
        </div>
    )
}
