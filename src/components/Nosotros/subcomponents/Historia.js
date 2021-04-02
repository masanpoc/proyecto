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
    let years = useRef();
    let wrapper = useRef();


    // useEffect definitions
    useEffect(() => {
        slide()
    }, [])

    useEffect(() => {
        // timeoutId for debounce mechanism
        let timeoutId = null;
        const resizeListener = () => {
          // prevent execution of previous setTimeout
          clearTimeout(timeoutId);
          // change width from the state object after 150 milliseconds
          timeoutId = setTimeout(() => window.location.reload(false), 150);
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);
    
        // clean up function
        return () => {
          // remove resize listener
          window.removeEventListener('resize', resizeListener);
        }
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
                invalidateOnRefresh: true,
                scrub: 1,
                // markers: true,
                // snap: 1 / (sections.length - 1),
                start: 'top top',
                // end: 'bottom center',
                // still have to fix the end
                end: () =>  '+=' + (1.4*stories.offsetWidth - document.documentElement.clientWidth)
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
                // markers: true,
                start: 'top top',
                snap: 1 / (stories.children.length - 1),
                // end after scrolling the whole width of stories from the start
                end: () => '+=' + (stories.offsetWidth),
            }
        })
        gsap.from(sound.children[0], {
            duration: 2,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: stories.children[0],
                start: () => 'top+=' + (stories.scrollWidth / 4) + ' center',
                end: 'top+=' + (2 * (stories.scrollWidth / 4)) +  ' center',
                // scrub: 2,
                markers: true,
                toggleActions: "play reverse play reverse"
            }
        })
        // gsap.to(sound.children[0], {
        //     duration: 6,
        //     x: '-' + (window.innerWidth / 5) ,
        //     repeat: -1,
        //     scrollTrigger: {
        //         trigger: stories.children[0],
        //         start: () => 'top+=' + (stories.scrollWidth / 4) + ' center',
        //         end: 'top+=' + (2 * (stories.scrollWidth / 4)) +  ' center',
        //         // scrub: 2,
        //         markers: true,
        //         toggleActions: "play reverse play reverse"
        //     }
        // })
        // loop over sound children
        // gsap.from(sound.children[1], {
        //     duration: 2,
        //     autoAlpha: 0,
        //     scrollTrigger: {
        //         trigger: stories.children[0],
        //         start: 'top+= top',
        //         end: 'bottom+= top',
        //         scrub: 2,
        //         markers: true
        //     }
        // })
        // and now with the circles -
        // OJO HAY QUE PONER LA POSICION EN ABSOLUTE PARA QUE COJA LA REFERENCIA ANTERIOR!
        gsap.to(years.children[0], {
            duration: 5,
            scale: 0.8,
            x: '-=100',
            scrollTrigger: {
                trigger: stories.children[0],
                start: () => 'top+=' + (stories.scrollWidth / 4) + ' center',
                end: 'top+=' + (2 * (stories.scrollWidth / 4)) +  ' center',
                scrub: true,
                // markers: true,
                // toggleActions: "play none restart reverse",

            }
        })
        gsap.to(years.children[0], {
            duration: 5,
            autoAlpha: 0,
            x: '-=100',
            scrollTrigger: {
                immediateRender: false, 
                trigger: stories.children[0],
                start: () => 'top+=' + (2.2 * (stories.scrollWidth / 4)) + ' center',
                end: 'top+=' + (3 * (stories.scrollWidth / 4)) +  ' center',
                scrub: true,
                markers: true,
                // toggleActions: "play none restart reverse",

            }
        })

        gsap.from(stories.children[1], {
            duration: 2,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: stories.children[1],
                start: () => 'top+=' + (stories.scrollWidth / 4) + ' center',
                end: 'top+=' + (2 * (stories.scrollWidth / 4)) +  ' center',
                // scrub: 2,
                markers: true,
                toggleActions: "play reverse play reverse"
            }
        })
        


    }

    


    // const starting = (i) => {
    //     gsap.from(sound, {
    //         duration: 2,
    //         autoAlpha: 0
    //     })
    // }

    // const ending = (i) => {
        // gsap.to(sound.children[i], {
        //     duration: 2,
        //     autoAlpha: 0
        // })
    // }



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
                <div className='years' ref={el => (years = el)}>
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