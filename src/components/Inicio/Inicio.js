import React from 'react';
import '../../App.scss';
import {Introduccion} from './subcomponents/Introduccion';
import {Galeria} from './subcomponents/Galeria';
import {Feed} from './subcomponents/Feed';
import './Inicio.scss';

export const Inicio = () => {
    return (
        <div className='inicio'>
            {/* <Introduccion /> */}
            <h1 className='galeria'>galeria inicio--> cambiar por animación gsap</h1>
            {/* <Galeria autoPlay={10} /> */}
            <Feed />

        </div>
    )
}
