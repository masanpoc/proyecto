import React from 'react';
import '../Inicio.scss';
import {HistoriaFeed} from './Feed/HistoriaFeed';
import {ArticuloFeed} from './Feed/ArticuloFeed';
import {Apuntate} from './Feed/Apuntate';
import {ObrasFeed} from './Feed/ObrasFeed';




export const Feed = () => {


    return (
        <div className='feed'>
            <HistoriaFeed  />
            <ObrasFeed />
            <Apuntate />
            <ArticuloFeed  />
        </div>
    )
}
