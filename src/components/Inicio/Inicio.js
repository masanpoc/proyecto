import React from 'react'
import '../../App.scss';
import {Introduccion} from './subcomponents/Introduccion';
import {Galeria} from './subcomponents/Galeria';
import {Feed} from './subcomponents/Feed';
import './Inicio.scss';

export const Inicio = () => {
    return (
        <div className='inicio'>
            {/* <Introduccion /> */}
            <Galeria autoPlay={6} />
            <Feed />

        </div>
    )
}
