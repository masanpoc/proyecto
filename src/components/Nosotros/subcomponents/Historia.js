import React, { useState, useEffect, useRef } from 'react';
import './Historia/Historia.scss';
import gsap from 'gsap';
import { Single } from './Historia/Single';
import { Story } from './Historia/Story';
import { Date } from './Historia/Date';
import { Content1, Content2, Content3, Content4 } from './Historia/Content';

import intro from './images/intro.jpg';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const list = [
    {
        song: ' ',
        story: {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nisl leo molestie ipsum, lacus. Curabitur donec cras.',
            image: {
                reference: intro,
                caption: 'Foto de concierto en el 20XX'
            }
        },
        date: 'May 2015'
    },
    {
        song: '',
        story: {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nisl leo molestie ipsum, lacus. Curabitur donec cras.',
            image: {
                reference: intro,
                caption: 'Foto de concierto en el 20XX'
            }
        },
        date: 'May 2016s'
    },
    {
        song: 'Vivaldi - Las cuatro estaciones (Primavera)',
        story: {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nisl leo molestie ipsum, lacus. Curabitur donec cras.',
            image: {
                reference: intro,
                caption: 'Foto de concierto en el 20XX'
            }
        },
        date: 'May 2015'
    },
    {
        song: '',
        story: {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nisl leo molestie ipsum, lacus. Curabitur donec cras.',
            image: {
                reference: intro,
                caption: 'Foto de concierto en el 20XX'
            }
        },
        date: 'May 2016s'
    }
]


export const Historia = () => {
    // constant definitions

    // useRef definitions
    // let wrapper = useRef();
    let sound = useRef();
    let stories = useRef();
    let line = useRef();
    let years = useRef();
    


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
          // refresh after 150 milliseconds
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
        // testing
        // gsap.to(line, {
        //     duration: 3,
        //     x: 550,
        //     scrollTrigger: {
        //         trigger: line,
        //         markers: true
        //     }
        // })
        // gsap.to(sound, {
        //     scrollTrigger: {
        //         trigger: sound,
        //         pin: true,
        //         markers: true
        //     }
        // })


        // scrolling down current story
        // gsap.to(stories.children[0].children, {
        //     duration: 2,
        //     y: -800,
        //     scrollTrigger: {
        //         trigger: stories,
        //         markers: true,
        //         start: 'center-=100 center', 
        //         end: 'bottom-=100 center', 
        //         scrub: 1
        //     }
        // })

        // fadeIn/Out everything
            // const tlStory = gsap.timeline({
            // });
            // tlStory
            // .from(sound, {
            //     duration: 1,
            //     autoAlpha: 0  
            // })
            // .from(stories, {
            //     duration: 1,
            //     autoAlpha: 0  
            // }, 0)
            // .from(line, {
            //     duration: 1,
            //     autoAlpha: 0  
            // }, 0)
            // .to(wrapper, {
            //     duration: 2,
            //     autoAlpha: 0.5  
            // }, 2)


        // Pin the whole div during all the scrolling
            // gsap.to(wrapper, {
            //     scrollTrigger: {
            //         trigger: wrapper,
            //         pin: true,
                    // invalidateOnRefresh: true,
                    // scrub: 1,
                    // start: 'top top',
                    // end: '+=800'
                    // end: () =>  '+=' + ((1.4 * (stories.offsetWidth)) - document.documentElement.clientWidth)
            //     }
            // })
            // gsap.to(wrapper, {
            //     scrollTrigger: {
            //         trigger: wrapper,
            //         pin: true,
            //         markers: true
            //     }
            // })

        // fadeIn/Out + move the stories as we scroll
            // move stories
            // gsap.to(stories, {
            //     x: () => -((stories.scrollWidth) - document.documentElement.clientWidth) + "px",
            //     ease: 'none',
            //     scrollTrigger: {
            //         trigger: stories,
            //         // pin: true,
            //         invalidateOnRefresh: true,
            //         scrub: 1,
            //         // markers: true,
            //         start: 'top top',
            //         snap: 1 / (stories.children.length - 1),
            //         // end after scrolling the whole width of stories from the start
            //         end: () => '+=' + (stories.offsetWidth),
            //     }
            // })
            // fadeIn/Out stories
            // gsap.from(stories.children[1], {
            //     duration: 2,
            //     autoAlpha: 0,
            //     scrollTrigger: {
            //         trigger: stories.children[1],
            //         start: () => 'top+=' + (stories.scrollWidth / 4) + ' center',
            //         end: 'top+=' + (2 * (stories.scrollWidth / 4)) +  ' center',
            //         toggleActions: "play reverse play reverse"
            //     }
            // })

        // fadeIn/Out + move <--> current song
            // fadeIn/Out first song (not the svg)
            // gsap.from(sound.children[1], {
            //     duration: 2,
            //     autoAlpha: 0,
            //     scrollTrigger: {
            //         trigger: stories.children[1],
            //         start: () => 'top+=' + (stories.scrollWidth / 4) + ' center',
            //         end: 'top+=' + (2 * (stories.scrollWidth / 4)) +  ' center',
            //         // scrub: 2,
            //         // markers: true,
            //         toggleActions: "play reverse play reverse"
            //     }
            // })
            // move the current song (using useState) from right to left
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
       
        // move + scale <--> current year/date
            // first move backwards
            // gsap.to(years.children[0], {
            //     duration: 5,
            //     scale: 0.8,
            //     x: '-=100',
            //     scrollTrigger: {
            //         trigger: stories.children[0],
            //         start: () => 'top+=' + (stories.scrollWidth / 4) + ' center',
            //         end: 'top+=' + (2 * (stories.scrollWidth / 4)) +  ' center',
            //         scrub: true
            //     }
            // })
            // second move backwards
            // gsap.to(years.children[0], {
            //     duration: 5,
            //     autoAlpha: 0,
            //     x: '-=100',
            //     scrollTrigger: {
            //         immediateRender: false, 
            //         trigger: stories.children[0],
            //         start: () => 'top+=' + (2.2 * (stories.scrollWidth / 4)) + ' center',
            //         end: 'top+=' + (3 * (stories.scrollWidth / 4)) +  ' center',
            //         scrub: true
            //     }
            // })

        
    }




    return (
        <div className='wrapping'>
        <div className='intro-historia'>
            <h2 className='intro-title'>Nuestra historia</h2>
            <h3 className='intro-subtitle'>Descubre algunos de los eventos que hemos llevado a cabo a lo largo de la agrupación </h3>
        </div>
        <div 
        // ref={el => (wrapper = el)}
         className='historia' style={{'minHeight': '100vh'}}>

            {/* cancion del año */}
            <div className='sound' ref={el => (sound = el)}>
                <svg className='note' viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z" />
                </svg>
                {/* song */}
                {list.map((el) => (
                    <Single song={el.song} />
                ))}
            </div>

            {/* para cada fecha */}
            <div className='stories' ref={el => (stories = el)}>
                <Story title={list[0].story.title} paragraph={<Content1 />} image={list[0].story.image} />
                <Story title={list[1].story.title} paragraph={<Content2 />} image={list[1].story.image} />
                <Story title={list[2].story.title} paragraph={<Content3 />} image={list[2].story.image} />
                <Story title={list[3].story.title} paragraph={<Content4 />} image={list[3].story.image} />
            </div>

            {/* linea de fechas */}
            <div className='line' ref={el => (line = el)}>
                {/* fechas */}
                <div className='years' ref={el => (years = el)}>
                    {list.map((el) => (
                        <div className='circle'>
                            <Date date={el.date} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}