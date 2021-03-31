import React, { useState, useEffect, useRef } from 'react';
import './Historia/Historia.scss';
import gsap from 'gsap';
import { Single } from './Historia/Single';
import { Story } from './Historia/Story';
import { Date } from './Historia/Date';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const list = [
    {
        song: 'Vivaldi',
        content: 'lorem ipsum1',
        date: 'May 2015'
    },
    {
        song: 'Bach',
        content: 'lorem ipsum',
        date: 'May 2016s'
    },
    {
        song: 'Vivaldi',
        content: 'lorem ipsum1',
        date: 'May 2015'
    },
    {
        song: 'Bach',
        content: 'lorem ipsum',
        date: 'May 2016s'
    }
]

export const Historia = () => {
    // constant definitions

    // useRef definitions
    let sound = useRef();
    let stories = useRef();
    let line = useRef();
    let wrapper = useRef();


    // useEffect definitions
    useEffect(() => {
        slide()
    }, [])

    // useState definitions


    // functions
    const slide = () => {

        const tlStory = gsap.timeline({
            // scrollTrigger: {
            //     trigger: stories,
            //     start: 'center-=45% center-=5%',
            //     end: 'center center+=5%',
            //     markers: true,
            //     scrub: true,
            //     // once: true
            // }
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
        gsap.to(wrapper, {
            scrollTrigger: {
                trigger: wrapper,
                pin: true,
                // invalidateOnRefresh: true,
                // scrub: 1,
                // markers: true,
                // snap: 1 / (sections.length - 1),
                start: 'top top',
                // end: 'bottom center',
                // still have to fix the end
                end: () => '+=' + (stories.offsetWidth)
            }
        })
        gsap.to(stories, {
            x: () => -(stories.scrollWidth - document.documentElement.clientWidth) + "px",
            ease: 'none',
            scrollTrigger: {
                trigger: stories,
                // pin: true,
                invalidateOnRefresh: true,
                scrub: 1,
                markers: true,
                start: 'top top',
                // snap: 1 / (stories.children.length - 1),
                end: () => '+=' + stories.offsetWidth
            }
        })
    }



    return (
        <div ref={el => (wrapper = el)} className='historia' style={{'minHeight': '100vh'}}>
            {/* cancion del año */}
            <div className='sound' ref={el => (sound = el)}>
                {/* song */}
                {list.map((el) => (
                    <Single song={el.song} />
                ))}
            </div>

            {/* para cada fecha */}
            <div className='stories' ref={el => (stories = el)}>
                {/* <div className='story'>Story 1</div> */}
                {/* <div className='story'>Story 2</div> */}
                {list.map((el) => (
                    <Story story={el.content} />
                ))}
            </div>

            {/* linea de fechas */}
            <div className='line' ref={el => (line = el)}>
            -
                <div className='years'>
                    {/* <div className='circle'>2009</div> */}
                    {/* <div className='circle'>2010</div>
                    <div className='circle'>2011</div>
                    <div className='circle'>2012</div>
                    <div className='circle'></div>
                    <div className='circle'></div> */}
                    {list.map((el) => (
                        <div className='circle'>
                            <Date date={el.date} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}