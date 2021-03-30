import React, { useState, useEffect, useRef } from 'react';
import './Historia/Historia.scss';
import gsap from 'gsap';


const list = [
    {
        song: 'Vivaldi',
        content: 'lorem ipsum',
        date: 'May 2015'
    },
    // {
    //     song: 'Vivaldi',
    //     content: 'lorem ipsum',
    //     date: 'May 2015'
    // }
]

export const Historia = () => {
    // constant definitions

    // useRef definitions
    let sound = useRef();
    let stories = useRef();
    let line = useRef();


    // useEffect definitions
    useEffect(() => {
        slide()
    }, [])

    // useState definitions


    // functions
    const slide = () => {
        const tlStory = gsap.timeline({
            scrollTrigger: {
                trigger: stories,
                start: 'center-=45% center-=5%',
                end: 'center+=15% center+=5%',
                markers: true,
                scrub: true,
                // once: true
            }
        });

        tlStory
        .from(sound, {
            duration: 1,
            autoAlpha: 0  
        })
        .from(stories, {
            duration: 1,
            autoAlpha: 0  
        }, 0)
        .from(line, {
            duration: 1,
            autoAlpha: 0  
        }, 0)
    }



    return (
        <div className='historia' style={{'minHeight': '100vh'}}>
            {/* historia
            Archivo multimedia vease video o linea cronologica del tiempo con 
            Contenido: 
            Para una fecha:


            Carteles escaneados/digitales con los conciertos
            Fotos de conciertos en sitios representativos, distinguiendo:
            Viajes-
            Conciertos
            Ensayos
            Otros
            Se interactua con la linea:
            Acercas el raton o haces click se hace mas grande : 
            aparece una foto y un texto por ejemplo
            acabas de leer todo  con el raton vuelvo a la linea
            Bajas con el raton y va apareciendo el contenido debajo de la linea y la linea se queda arriba y vas viendo como avanza la linea con la fecha:
            cuando se llega a una fecha aparece foto y texto: https://goodmeat.co/ (ejemplo uso scroll para ir cambiando contenido y canciones  */}
            
            {/* we can
            create components: song, story and date, and
             map the list to extract songs, stories and dates and 
             put them in their corresponding order 
             synchronised with the others */}

            {/* cancion del año */}
            <div className='sound' ref={el => (sound = el)}>
                song
            </div>

            {/* para cada fecha */}
            <div className='stories' ref={el => (stories = el)}>
                <div className='story'>Story 1</div>
                {/* <div className='story'>Story 2</div> */}
                
            </div>

            {/* linea de fechas */}
            <div className='line' ref={el => (line = el)}>
            -
                <div className='years'>
                    <div className='circle'>2009</div>
                    <div className='circle'>2010</div>
                    <div className='circle'>2011</div>
                    <div className='circle'>2012</div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                </div>
            </div>
        </div>
    )
}
