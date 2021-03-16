import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation } from 'react-router-dom';
import './Articulos.scss';

export const Lista = () => {
    return (
        <div className='lista'>
            <div className='intro-articles'>
                <h1 className='heading'>Artículos sobre música</h1>
                <p className='description'>Algunos de nuestros miembros han escrito artículos increíbles sobre música clásica</p>
                <h2 className='info'>Descúbrelos aquí abajo</h2>
                <svg style={{"width":"24px", "height":"24px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z" />
                </svg>
            </div>
            <div className='article-1'>
                <div className='cropped-1'>
                    <h3 className='title'>Titulo que sea sobre orquesta por ejemplo</h3>
                    <p className='abstract-0'>Resumen:</p>
                    <p className='abstract' >Algunos de nuestros miembros han escrito artículos increíbles sobre música clásica</p>
                    <Link className='link' to='/articulos/1'> {'>> '}Leer artículo</Link>
                </div>
                <div className='shadowing'></div>
            </div>
            <div className='article-2'>
                <div className='cropped-2'>
                    <h3 className='title'>Titulo que sea sobre orquesta por ejemplo</h3>
                    <p className='abstract-0'>Resumen</p>
                    <p className='abstract' >Algunos de nuestros miembros han escrito artículos increíbles sobre música clásica</p>
                    <Link className='link' to='/articulos/1'>{'>> '}Leer artículo</Link>
                </div>
            </div>
            <div className='article-3'>
                <div className='cropped-3'>
                    <h3 className='title'>Titulo que sea sobre orquesta por ejemplo</h3>
                    <p className='abstract-0'>Resumen</p>
                    <p className='abstract' >Algunos de nuestros miembros han escrito artículos increíbles sobre música clásica</p>
                    <Link className='link' to='/articulos/1'>{'>> '}Leer artículo</Link>
                </div>
                <div className='shadowing'></div>
            </div>
            <div className='article-4'>
                <div className='cropped-4'>
                    <h3 className='title'>Titulo que sea sobre orquesta por ejemplo</h3>
                    <p className='abstract-0'>Resumen</p>
                    <p className='abstract' >Algunos de nuestros miembros han escrito artículos increíbles sobre música clásica</p>
                    <Link className='link' to='/articulos/1'>{'>> '}Leer artículo</Link>
                </div>
            </div>

            <div className='loader'>
                Botón de cargar más
            </div>
           
        </div>
    )
}
