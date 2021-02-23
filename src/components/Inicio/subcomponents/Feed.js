import React from 'react';
import '../Inicio.scss';
import {Noticia} from './Feed/Noticia';
import {Info} from './Feed/Info';
import {Programa} from './Feed/Programa';
import {Video} from './Feed/Video';
import {Instrumento} from './Feed/Instrumento';
import '../Inicio.scss';

export const Feed = () => {
    return (
        <div className='feed'>
            {/* ultima noticia de articulos --+enlace*/}
            <Noticia  />
            {/* nosotros y obras en breve --+enlaces*/}
            <div className='sub-feed'>
                <Info  />
                <Programa />
            </div>
            {/* video de nosotros tocando */}
            <Video />
            {/* instrumentos +enlace a conocenos */}
            <Instrumento />
        </div>
    )
}
