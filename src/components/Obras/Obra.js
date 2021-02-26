import React from 'react';
import './Obra.scss'

export const Obra = ({obra}) => {
    return (
        <div className='obra'>
            <h2>{obra.titulo}</h2>
            <h3>{obra.autor}</h3>
            <h4>#{obra.genero}</h4>
            <img src={obra.url} alt={`${obra.titulo} imagen`} />
        </div>
    )
}
