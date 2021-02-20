import React from 'react'
import '../../App.scss';
import {Galeria} from './subcomponents/Galeria';
import {Feed} from './subcomponents/Feed';
import './Inicio.scss';

export const Inicio = () => {
    return (
        <div className='inicio'>
            inicio
            <Galeria />
            <Feed />
        </div>
    )
}
