import React, { useRef, useState, useEffect } from 'react';
import '../../Inicio.scss';
import articulo from './Images/concert.jpg';
import gsap from 'gsap';


export const ArticuloFeed = () => {
    return (
        <div className='item-4'>
            <h2 className='header-4'>Echa un vistazo a nuestro último artículo publicado</h2>
           
            <div className='content-4'>
                <h3>La importancia de aprender música</h3>
                <div>
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
                arrow svg
                <a href='#none'>Ver artículo </a>
            </span>
        </div>
    )
}
