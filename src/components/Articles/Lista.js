import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import './Articulos.scss';

export const Lista = () => {
    return (
        <div className='lista' style={{'minHeight': '100vh'}}>
            <div className='intro'>
                <h1>Artículos sobre música</h1>
                <h3>Algunos de nuestros miembros han escrito artículos increíbles sobre música clásica</h3>
                <h2>Descúbrelos aquí abajo</h2>
            </div>
            <div className='article-1'>
                <h1>Titulo que sea sobre orquesta por ejemplo</h1>
                <p className='abstract-0'>Resumen</p>
                <p className='abstract' >Algunos de nuestros miembros han escrito artículos increíbles sobre música clásica</p>
                <Link className='link' to='/articulos/1'>Leer artículo</Link>
            </div>
            <br />
            hhh
           
        </div>
    )
}
