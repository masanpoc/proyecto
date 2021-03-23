import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../Inicio.scss';
import {HistoriaFeed} from './Feed/HistoriaFeed';
import {ArticuloFeed} from './Feed/ArticuloFeed';
import {Apuntate} from './Feed/Apuntate';
import {ObrasFeed} from './Feed/ObrasFeed';
import '../Inicio.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




export const Feed = () => {
    
    // constant variables
    // useState definitions

    // useRef definitions

    // useEffect definitions
    

    
    // functions
   

    return (
        <div className='feed'>
            {/* ultima noticia de articulos --+enlace*/}
            <div className='info' ><HistoriaFeed  /></div>
            {/* nosotros y obras en breve --+enlaces*/}
                <ArticuloFeed  />
            {/* video de nosotros tocando */}
            <div  ><Apuntate /></div>
            {/* instrumentos +enlace a conocenos */}
            <div  ><ObrasFeed /></div>
        </div>
    )
}
