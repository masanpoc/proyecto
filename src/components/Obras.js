import React from 'react';
import {Obra} from './Obras/Obra';
import './Obras/Obra.scss';

const lista = [
    {
        titulo: 'Beatus Vir',
        autor: 'Vivaldi',
        url: '',
        genero: 'Barroco'
    },
    {
        titulo: 'Gloria',
        autor: 'Vivaldi',
        url: '',
        genero: 'Barroco'
    },
    {
        titulo: 'Concierto en Sol Mayor op.3 no. 3 RV 310 para violín y orquesta',
        autor: 'Vivaldi',
        url: '',
        genero: 'Barroco'
    },
    {
        titulo: 'La Primavera (I. Allegro)',
        autor: 'Vivaldi',
        url: '',
        genero: 'Barroco'
    },
    {
        titulo: 'Invierno (I. Allegro)',
        autor: 'Vivaldi',
        url: '',
        genero: 'Barroco'
    },
];

export const Obras = () => {
    return (
        <div>
            <div className='filtros'>Filtros</div>
            <div className='lista' style={{'minHeight': '100vh'}}>
            
            {lista.map((el, i) => (
                <Obra key={el.titulo} obra={el} />
            ))}
            </div>
            <div className='scrolling'>Cargar a medida que se baja más</div>
        </div>
        
    )
}
