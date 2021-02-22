import React from 'react'
import './Galeria.scss';
import {ReactComponent as RightArrow} from './svg/right.svg';
import {ReactComponent as LeftArrow} from './svg/left.svg';

export const Arrow = ({ direction, handleClick }) => {
    return (
        <div className='arrow' onClick={handleClick} 
            style={ direction==='right'
                ? {'right': '25px'}
                : {'left': '25px'}
                }
        >
            {direction==='right' 
                ? <RightArrow className='arrow-icon' />
                : <LeftArrow className='arrow-icon' />
            }
        </div>
    )
}
