import React from 'react';
import '../../App.scss';
import {Carousel} from './subcomponents/Carousel.js';
import {Feed} from './subcomponents/Feed';
import './Inicio.scss';

export const Inicio = () => {
    return (
        <div className='inicio'>
            <Carousel />    
            <Feed />

        </div>
    )
}
