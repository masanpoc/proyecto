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

    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach((instance) => {
              instance.kill();
            });
            // This in case a scroll animation is active while the route is updated
            gsap.killTweensOf(window);
          };
    }, [])

    return (
        <div className='feed'>
            <HistoriaFeed  />
            <ObrasFeed />
            <Apuntate />
            <ArticuloFeed  />
        </div>
    )
}
