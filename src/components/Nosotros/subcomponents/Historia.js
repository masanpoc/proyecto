import React, { useState, useEffect, useRef } from 'react';
import './Historia/Historia.scss';
import gsap from 'gsap';
import { Single } from './Historia/Single';
import { Story } from './Historia/Story';
import { Date } from './Historia/Date';
import { Content1, Content2, Content3, Content4 } from './Historia/Content';
import mix from './Historia/Sounds/mix-historia.mp3';
import useSound from 'use-sound';
import intro from './images/intro.jpg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
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

    const spriteMap = {
        one: [2000, 152000],
        two: [153000, 215000],
        three: [367000, 141000],
        four: [507000, 83000]
    };

    // useState definitions
    const [progression, setProgression] = useState(0);
    const [active, setActive] = useState(false);
    const [selection, setSelection] = useState(0);

    
    const [play, { stop }] = useSound(mix, { sprite: spriteMap, volume: 0.25 });

    // useRef definitions
    let wrapper = useRef();
    let wrapper2 = useRef();
    let sound = useRef();
    let stories = useRef();
    let line = useRef();
    let years = useRef();
    let firstSlide = useRef();
    


    // useEffect definitions
    useEffect(() => {
        // slide();
        return () => {
            ScrollTrigger.getAll().forEach((instance) => {
              instance.kill();
            });
            // This in case a scroll animation is active while the route is updated
            gsap.killTweensOf(window);
          };
    }, [])


    // useEffect(() => {
    //     // timeoutId for debounce mechanism
    //     let timeoutId = null;
    //     const resizeListener = () => {
    //       // prevent execution of previous setTimeout
    //       clearTimeout(timeoutId);
    //       // refresh after 150 milliseconds
    //       timeoutId = setTimeout(() => window.location.reload(false), 150);
    //     };
    //     // set resize listener
    //     window.addEventListener('resize', resizeListener);
    
    //     // clean up function
    //     return () => {
    //       // remove resize listener
    //       window.removeEventListener('resize', resizeListener);
    //     }
    // }, [])

    useEffect(() => {
        if(selection==1) {
            console.log('play song 1');
            stop();
            play({ id: 'one'})
        }
        else if(selection==2) {
            console.log('play song 2');
            stop();
            play({ id: 'two'})
        }
        else if(selection==3) {
            console.log('play 3')
            stop();
            play({ id: 'three'})
        }
        else if(selection==4) {
            console.log('play 4')
            stop();
            play({ id: 'four'})
        }
        else {
            stop();
        }
    }, [selection])

    useEffect(() => {

        console.log(progression);

        // intervals
        // we are playing with pause and play, maybe fade?


        if(window.innerWidth>760) {

            // if we are on the first slide
            if(progression>0 && progression<0.3) {
                setSelection(1);
            }
            
            else if(progression>0.3 && progression<0.5) {
                setSelection(2);
            }

            else if(progression>0.5 && progression<0.7) {
                setSelection(3);
            }

            else if(progression>0.7 && progression<0.9) {
                setSelection(4);
            }

            else {
                setSelection(0);
            }
        }
        if(window.innerWidth<760) {
            // if we are on the first slide
            if(progression>0 && progression<0.18) {
                setSelection(1);
            }
            
            else if(progression>0.18 && progression<0.4) {
                setSelection(2);
            }

            else if(progression>0.4 && progression<0.65) {
                setSelection(3);
            }

            else if(progression>0.65 && progression<0.9) {
                setSelection(4);
            }

            else {
                setSelection(0);
            }
        }

    }, [progression])

    useEffect(() => {
        console.log(active);

        // if it is active -> volume: 0.4 and play

        // if it is not active -> volume: 0 and stop

    }, [active])

    // useState definitions
    

    // functions
    const slide = () => {

        const vh = (coef) => window.innerHeight * (coef/100);
        const vw = (coef) => window.innerWidth * (coef/100);

        if(window.innerWidth>760) {
            // playing songs/moving them
            gsap.fromTo(sound.children[0].children, {
                    x: vw(30),
                    duration: 25,
                    ease: 'none'
                },
                {
                    x: -vw(50),
                    duration: 25,
                    repeat: -1,
                    ease: 'none'
            });
            gsap.fromTo(sound.children[1].children, {
                    x: vw(30),
                    duration: 25,
                    ease: 'none'
                },
                {
                    x: -vw(50),
                    duration: 25,
                    repeat: -1,
                    ease: 'none'
            });
            gsap.fromTo(sound.children[2].children, {
                    x: vw(30),
                    duration: 25,
                    ease: 'none'
                },
                {
                    x: -vw(50),
                    duration: 25,
                    repeat: -1,
                    ease: 'none'
            });
            gsap.fromTo(sound.children[3].children, {
                    x: vw(30),
                    duration: 25,
                    ease: 'none'
                },
                {
                    x: -vw(50),
                    duration: 25,
                    repeat: -1,
                    ease: 'none'
            });
            // pinning
            gsap.to('.App', {
                scrollTrigger: {
                    trigger: '.App',
                    pin: true,
                    // markers: true,
                    start: 'top+=' + vh(90) + ' top',
                    // default end is bottom top
                    end: '+=8000',
                    onUpdate: ({progress, isActive}) => {
                        setProgression(progress);
                        setActive(isActive);
                    }
                }
            })
            // running timeline
             // timeline
            const scrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper,
                    start: 'top+=500 top',
                    // end: 'bottom top-=6000',
                    end: 'bottom+=6000 top',
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
                duration: 2,
                // onComplete: () => {console.log('fading out 1')}
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

            // playing songs/moving them
            gsap.fromTo(sound.children[0].children, {
                x: vw(60),
                duration: 15,
                ease: 'none'
            },
            {
                x: -vw(120),
                duration: 30,
                repeat: -1,
                ease: 'none'
            });
            gsap.fromTo(sound.children[1].children, {
                x: vw(30),
                duration: 25,
                ease: 'none'
            },
            {
                x: -vw(50),
                duration: 25,
                repeat: -1,
                ease: 'none'
            });
            gsap.fromTo(sound.children[2].children, {
                x: vw(30),
                duration: 25,
                ease: 'none'
            },
            {
                x: -vw(50),
                duration: 25,
                repeat: -1,
                ease: 'none'
            });
            gsap.fromTo(sound.children[3].children, {
                x: vw(30),
                duration: 25,
                ease: 'none'
            },
            {
                x: -vw(50),
                duration: 25,
                repeat: -1,
                ease: 'none'
            });

            // pinning
            gsap.to('.App', {
                scrollTrigger: {
                    trigger: '.App',
                    pin: true,
                    // markers: true,
                    start: 'top+=' + vh(120) + ' top',
                    end: '+=10000',
                    onUpdate: ({progress, isActive}) => {console.log(progress, isActive)}
                }
            })

            // running timeline
            
            // timeline
            const scrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper,
                    start: 'top+=50 top',
                    end: 'bottom top-=8000',
                    // markers: true,
                    scrub: 0.5
                }
            });

            scrollTimeline

            // scrolling up first story
            .to(stories.children[0].children, {
                duration: 10,
                y: -vh(150),
                ease: 'none'
            })

            // fading out first story
            .to(wrapper, {
                ease: 'power2.inOut',
                xPercent: -25,
                duration: 5
            })
            .to(sound.children[0], {
                ease: 'power2.inOut',
                autoAlpha: 0,
                duration: 5
            }, '>-5')
            .to(stories.children[0], {
                ease: 'power2.inOut',
                autoAlpha: 0,
                duration: 5
            }, '>-5')
            .to(years.children[0], {
                ease: 'power2.inOut',
                scale: 0.2,
                duration: 5
            }, '>-5')
            

            // fading in second story
            .from(sound.children[1], {
                ease: 'power2.inOut',
                autoAlpha: 0,
                duration: 5
            }, '>-5')
            .from(stories.children[1], {
                ease: 'power2.inOut',
                autoAlpha: 0,
                duration: 5
            }, '>-5')
            .from(years.children[1], {
                ease: 'power2.inOut',
                scale: 2,
                duration: 5
            }, '>-5')

            // scrolling up second story
            .to(stories.children[1].children, {
                duration: 10,
                y: -vh(150),
                ease: 'none'
            })

            // fading out second story
            .to(wrapper, {
                ease: 'power2.inOut',
                xPercent: -50,
                duration: 5
            })
            .to(sound.children[1], {
                ease: 'power2.inOut',
                autoAlpha: 0,
                duration: 5
            }, '>-5')
            .to(stories.children[1], {
                ease: 'power2.inOut',
                autoAlpha: 0,
                duration: 5
            }, '>-5')
            .to(years.children[1], {
                ease: 'power2.inOut',
                scale: 0.2,
                duration: 5
            }, '>-5')

            // fading in third story
            .from(sound.children[2], {
                ease: 'power2.inOut',
                scale: 2,
                duration: 5
            }, '>-5')
            .from(years.children[2], {
                ease: 'power2.inOut',
                scale: 2,
                duration: 5
            }, '>-5')
            .from(stories.children[2], {
                ease: 'power2.inOut',
                autoAlpha: 0,
                duration: 5
            }, '>-5')

            // scrolling up third story
            .to(stories.children[2].children, {
                duration: 10,
                y: -vh(150),
                ease: 'none'
            })

            // fading out third story
            .to(wrapper, {
                ease: 'power2.inOut',
                xPercent: -75,
                duration: 5
            })
            .to(sound.children[2], {
                ease: 'power2.inOut',
                autoAlpha: 0,
                duration: 5
            }, '>-5')
            .to(stories.children[2], {
                ease: 'power2.inOut',
                autoAlpha: 0,
                duration: 5
            }, '>-5')
            .to(years.children[2], {
                ease: 'power2.inOut',
                scale: 0.2,
                duration: 5
            }, '>-5')
            
            // fading in fourth story
            .from(sound.children[3], {
                ease: 'power2.inOut',
                scale: 2,
                duration: 5
            }, '>-5')
            .from(years.children[3], {
                ease: 'power2.inOut',
                scale: 2,
                duration: 5
            }, '>-5')
            .from(stories.children[3], {
                ease: 'power2.inOut',
                autoAlpha: 0,
                duration: 5
            }, '>-5')

            // scrolling up fourth story
            .to(stories.children[3].children, {
                duration: 10,
                y: -vh(150),
                ease: 'none'
            })

        }    

        
    }

    const fadeOut = () => {
        
        gsap.to(firstSlide, {
            autoAlpha: 0,
            duration: 1
        })
        slide();
        setSelection(1);
    }




    return (
        <div className='wrapping' ref={el => (wrapper2 = el)}>
            <div className='intro-historia'>
                <h2 className='intro-title'>Nuestra historia</h2>
                <h3 className='intro-subtitle'>Descubre algunos de los eventos que hemos llevado a cabo a lo largo de la agrupación </h3>
            </div>

            <div className='first-slide' ref={el => (firstSlide = el)}>
                <div className='first-headers'>
                    <h2 className='first-h2'>Nuestro recorrido musical</h2>
                    <h3 className='first-h3'>Conciertos, viajes, obras... y mucho más!</h3>
                </div>
                <div className='first-button' onClick={fadeOut}>
                    <h5 className='first-h5'>Ver</h5>
                </div>
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