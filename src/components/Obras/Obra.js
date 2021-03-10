import React from 'react';
import './Obra.scss';
import Bach from './Images/Bach.jpg';
import Vivaldi from './Images/Vivaldi.jpg';

export const Obra = ({obra}) => {
    return (
        <div className='obra'>
            <div className='photo' style={{'background-image': `url(${obra.url})` }}></div>
            <div className='titulo'>{obra.titulo}</div>
            <div className='autor'>{obra.autor}</div>
            {/* <h4>#{obra.genero}</h4> */}
            {/* <img src={obra.url} alt={`${obra.titulo} imagen`} /> */}
        </div>
    )
}
