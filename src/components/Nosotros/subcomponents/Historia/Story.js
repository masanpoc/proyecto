import React from 'react';
import intro from '../images/intro.jpg';
import './Historia.scss';


export const Story = ({ title, paragraph, image }) => {
    
    return (
        <div className='story'>
            <div className='story-title'>
                {title}
            </div>
            {paragraph}
            <div className='img-group'>
                <img alt='img-story' src={image.reference} className='img-story' />
                <figcaption className='caption-story'>{image.caption}</figcaption>
            </div>
        </div>
    )
}
