import React from 'react';
import intro from '../images/intro.jpg';

export const Story = ({ story }) => {
    return (
        <div className='story'>
            <div className='story-title'>
                title
            </div>
            {story}
            <img alt='img-story' src={intro} className='story-img' />
            
        </div>
    )
}
