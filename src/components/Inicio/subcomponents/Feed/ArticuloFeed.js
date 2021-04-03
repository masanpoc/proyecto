import React, { useRef, useState, useEffect } from 'react';
import '../../Inicio.scss';
import articulo from './Images/concert.jpg';
import gsap from 'gsap';


export const ArticuloFeed = () => {
    return (
        <div className='item-4'>
            <h2 className='header-4'>Echa un vistazo a nuestro último artículo publicado</h2>
           
            <div className='content-4'>
                <h3 className='head'>La importancia de aprender música</h3>
                <div className='text'>
                    <p>iam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim iptione voluptatem sequi nesciunt. </p>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
                </div>
            </div>
            
            <div className='mask'>
                <div 
                // ref={el=>(display0=el)}

                 className='bg'></div>
                <img 
                // ref={el=>(display=el)}
                 alt='info' src={articulo} className='item-4-image' />
            </div>
            <span className='link-4'>
                <svg className='arrow' viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                </svg>
                <a href='#none'>Ver artículo </a>
            </span>
        </div>
    )
}
