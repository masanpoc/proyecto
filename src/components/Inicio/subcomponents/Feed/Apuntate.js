import React, { useRef, useState, useEffect } from 'react';
import '../../Inicio.scss';
import apuntate from './Images/rehearsal.jpg';
import gsap from 'gsap';

export const Apuntate = () => {
    return (
        <div className='item4'>
             <h2 className='header-3'>Te gustaría formar parte de la orquesta?</h2>
            <div className='mask'>
                {/* <div ref={el=>(display0=el)} className='bg'></div> */}
                <img 
                // ref={el=>(display=el)}
                 alt='info' src={apuntate} className='item4-image' />
            </div>
            <div className='content-3'>
                <h3>Únete a la agrupación</h3>
                <div>
                    <p>iam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim iptione voluptatem sequi nesciunt. </p>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
                </div>
            </div>
            <span className='link-3'>
                arrow svg
                <a href='#none'>Ver audiciones</a>
            </span>
        </div>
    )
}
