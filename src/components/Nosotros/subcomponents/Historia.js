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
import { wrap } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const list = [
    {
        song: 'Canción referente a ese año - Autores - genero de la cancion o año ...',
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
        song: 'Canción referente a ese año - Autores',
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
        song: 'Canción referente a ese año - Autores',
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
    let wrapper = useRef();
    let wrapper2 = useRef();
    let sound = useRef();
    let stories = useRef();
    let line = useRef();
    let years = useRef();
    


    // useEffect definitions
    useEffect(() => {
        slide()
        return () => {
            ScrollTrigger.getAll().forEach((instance) => {
              instance.kill();
            });
            // This in case a scroll animation is active while the route is updated
            gsap.killTweensOf(window);
          };
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

        const vh = (coef) => window.innerHeight * (coef/100);
        const vw = (coef) => window.innerWidth * (coef/100);

        // console.log(stories.offsetWidth);


        // playing songs/moving them
        // gsap.to(sound.children[0].children, {
        //     x: -vw(27.5),
        //     duration: 10,
        //     repeat: -1,
        //     ease: 'none'
        // })

        // // timeline
        // const scrollTimeline = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: wrapper,
        //         start: 'top top',
        //         end: 'bottom top-=8000',
        //         markers: true,
        //         scrub: 2,
        //         snap: 1 / (4 - 1)
        //     }
        // });

        // scrollTimeline

        // // fading out first story
        // .to(wrapper, {
        //     ease: 'none',
        //     xPercent: -25,
        //     duration: 2
        // })
        // .to(sound.children[0], {
        //     autoAlpha: 0,
        //     duration: 2
        // }, '>-2')
        // .to(stories.children[0], {
        //     autoAlpha: 0,
        //     duration: 2
        // }, '>-2')
        // .to(years.children[0], {
        //     scale: 0.2,
        //     duration: 2
        // }, '>-2')
        

        // // fading in second story
        // .from(sound.children[1], {
        //     autoAlpha: 0,
        //     duration: 2
        // }, '>-2')
        // .from(stories.children[1], {
        //     autoAlpha: 0,
        //     duration: 2
        // }, '>-2')
        // .from(years.children[1], {
        //     scale: 2,
        //     duration: 2
        // }, '>-2')
        
        
        
        // // esto para la mobile version
        // // .to(stories.children[1].children, {
        // //     duration: 2,
        // //     y: -900,
        // // })

        // // fading out second story
        // .to(wrapper, {
        //     ease: 'none',
        //     xPercent: -50,
        //     duration: 2
        // })
        // .to(sound.children[1], {
        //     autoAlpha: 0,
        //     duration: 2
        // }, '>-2')
        // .to(stories.children[1], {
        //     autoAlpha: 0,
        //     duration: 2
        // }, '>-2')
        // .to(years.children[1], {
        //     scale: 0.2,
        //     duration: 2
        // }, '>-2')

        // // fading in third story
        // .from(sound.children[2], {
        //     scale: 2,
        //     duration: 2
        // }, '>-2')
        // .from(years.children[2], {
        //     scale: 2,
        //     duration: 2
        // }, '>-2')
        // .from(stories.children[2], {
        //     autoAlpha: 0,
        //     duration: 2
        // }, '>-2')

        // // fading out third story
        // .to(wrapper, {
        //     ease: 'none',
        //     xPercent: -75,
        //     duration: 2
        // })
        // .to(sound.children[2], {
        //     autoAlpha: 0,
        //     duration: 2
        // }, '>-2')
        // .to(stories.children[2], {
        //     autoAlpha: 0,
        //     duration: 2
        // }, '>-2')
        // .to(years.children[2], {
        //     scale: 0.2,
        //     duration: 2
        // }, '>-2')
        
        // // fading in fourth story
        // .from(sound.children[3], {
        //     scale: 2,
        //     duration: 2
        // }, '>-2')
        // .from(years.children[3], {
        //     scale: 2,
        //     duration: 2
        // }, '>-2')
        // .from(stories.children[3], {
        //     autoAlpha: 0,
        //     duration: 2
        // }, '>-2')

        // if we add an ending // more slides
        // .to(stories.children[3], {
        //     autoAlpha: 0,
        //     duration: 2
        // })
        // .to(years.children[3], {
        //     scale: 0.2,
        //     duration: 2
        // }, '>-2')
        // .to(wrapper, {
        //     ease: 'none',
        //     xPercent: -100,
        //     duration: 2
        // }, '>-2')
        // .from(years.children[4], {
        //     scale: 2,
        //     duration: 2
        // }, '>-2')
        // .from(stories.children[4], {
        //     autoAlpha: 0,
        //     duration: 2
        // }, '>-2')


        // testing
        // gsap.to(line, {
        //     duration: 3,
        //     x: 550,
        //     scrollTrigger: {
        //         trigger: line,
        //         markers: true,
        //         end: '+=9000'
        //     }
        // })
        // gsap.to(sound, {
        //     scrollTrigger: {
        //         trigger: sound,
        //         pin: true,
        //         markers: true
        //     }
        // })

        // pinning the whole page
        if(window.innerWidth>760) {
            // pinning
            gsap.to('.App', {
                scrollTrigger: {
                    trigger: '.App',
                    pin: true,
                    // markers: true,
                    start: 'top+=' + vh(90) + ' top',
                    end: '+=9000'
                }
            })
            // running timeline
             // timeline
            const scrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper,
                    start: 'top top',
                    end: 'bottom top-=8000',
                    // markers: true,
                    scrub: 2,
                    snap: 1 / (4 - 1)
                }
            });

            scrollTimeline

            // fading out first story
            .to(wrapper, {
                ease: 'none',
                xPercent: -25,
                duration: 2
            })
            .to(sound.children[0], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .to(stories.children[0], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .to(years.children[0], {
                scale: 0.2,
                duration: 2
            }, '>-2')
            
            // fading in second story
            .from(sound.children[1], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .from(stories.children[1], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .from(years.children[1], {
                scale: 2,
                duration: 2
            }, '>-2')

            // fading out second story
            .to(wrapper, {
                ease: 'none',
                xPercent: -50,
                duration: 2
            })
            .to(sound.children[1], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .to(stories.children[1], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .to(years.children[1], {
                scale: 0.2,
                duration: 2
            }, '>-2')

            // fading in third story
            .from(sound.children[2], {
                scale: 2,
                duration: 2
            }, '>-2')
            .from(years.children[2], {
                scale: 2,
                duration: 2
            }, '>-2')
            .from(stories.children[2], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')

            // fading out third story
            .to(wrapper, {
                ease: 'none',
                xPercent: -75,
                duration: 2
            })
            .to(sound.children[2], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .to(stories.children[2], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .to(years.children[2], {
                scale: 0.2,
                duration: 2
            }, '>-2')
            
            // fading in fourth story
            .from(sound.children[3], {
                scale: 2,
                duration: 2
            }, '>-2')
            .from(years.children[3], {
                scale: 2,
                duration: 2
            }, '>-2')
            .from(stories.children[3], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
        }


        if(window.innerWidth<760) {
            // pinning
            gsap.to('.App', {
                scrollTrigger: {
                    trigger: '.App',
                    pin: true,
                    markers: true,
                    start: 'top+=' + vh(120) + ' top',
                    end: '+=9000'
                }
            })

            // running timeline
            
            // timeline
            const scrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper,
                    start: 'top top',
                    end: 'bottom top-=4000',
                    markers: true,
                    scrub: 1,
                    // snap: 1 / (4 - 1)
                }
            });

            scrollTimeline

            // scrolling up first story
            .to(stories.children[0].children, {
                duration: 20,
                y: -vh(150),
                ease: 'power2.in'
            })

            // fading out first story
            .to(wrapper, {
                ease: 'none',
                xPercent: -25,
                duration: 2
            })
            .to(sound.children[0], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .to(stories.children[0], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .to(years.children[0], {
                scale: 0.2,
                duration: 2
            }, '>-2')
            

            // fading in second story
            .from(sound.children[1], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .from(stories.children[1], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .from(years.children[1], {
                scale: 2,
                duration: 2
            }, '>-2')

            // scrolling up second story
            .to(stories.children[1].children, {
                duration: 20,
                y: -vh(150),
                ease: 'power2.in'
            })

            // fading out second story
            .to(wrapper, {
                ease: 'none',
                xPercent: -50,
                duration: 2
            })
            .to(sound.children[1], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .to(stories.children[1], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .to(years.children[1], {
                scale: 0.2,
                duration: 2
            }, '>-2')

            // fading in third story
            .from(sound.children[2], {
                scale: 2,
                duration: 2
            }, '>-2')
            .from(years.children[2], {
                scale: 2,
                duration: 2
            }, '>-2')
            .from(stories.children[2], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')

            // scrolling up third story
            .to(stories.children[2].children, {
                duration: 20,
                y: -vh(150),
                ease: 'power2.in'
            })

            // fading out third story
            .to(wrapper, {
                ease: 'none',
                xPercent: -75,
                duration: 2
            })
            .to(sound.children[2], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .to(stories.children[2], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')
            .to(years.children[2], {
                scale: 0.2,
                duration: 2
            }, '>-2')
            
            // fading in fourth story
            .from(sound.children[3], {
                scale: 2,
                duration: 2
            }, '>-2')
            .from(years.children[3], {
                scale: 2,
                duration: 2
            }, '>-2')
            .from(stories.children[3], {
                autoAlpha: 0,
                duration: 2
            }, '>-2')

            // scrolling up fourth story
            .to(stories.children[3].children, {
                duration: 20,
                y: -vh(150),
                ease: 'power2.in'
            })

        }    

        
    }




    return (
        <div className='wrapping' ref={el => (wrapper2 = el)}>
            <div className='intro-historia'>
                <h2 className='intro-title'>Nuestra historia</h2>
                <h3 className='intro-subtitle'>Descubre algunos de los eventos que hemos llevado a cabo a lo largo de la agrupación </h3>
            </div>

            <div 
            ref={el => (wrapper = el)}
            className='historia' style={{'minHeight': '100vh'}}>

                {/* cancion del año */}
                <div className='sound' ref={el => (sound = el)}>
                    {/* song */}
                    {list.map((el) => (
                        <div className='group-song'>
                            <svg className='note' viewBox="0 0 24 24">
                                <path fill="currentColor" d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z" />
                            </svg>
                            <Single song={el.song} />
                        </div>
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