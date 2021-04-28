import React, { useState, useEffect, useRef } from 'react';
import '../Inicio.scss';
import Pic1 from '../../../Images/pic-1.jpg';
import Pic2 from '../../../Images/pic-2.jpg';
import Pic3 from '../../../Images/pic-3.jpg';
import Pic4 from '../../../Images/pic-4.jpg';
// import { Power3 } from "gsap";
import gsap from 'gsap';
// not necessary any Tweenlite since new version works with gsap !!
// import { TweenLite } from 'gsap';

const list = [ 
    {
        title: '"La imaginación crea la realidad."',
        author: '- RICHARD WAGNER',
        genre: 'barroque',
        src: Pic1
    },
    {
        title: '"Si no fuera por la música, habría más razones para volverse loco."',
        author: '- TCHAIKOVSKY',
        genre: 'barroque',
        src: Pic2
    },
    {
        title: '"El músico es tal vez el más modesto de los animales, pero también es el más orgulloso."',
        author: '- ERIK SATIE',
        genre: 'barroque',
        src: Pic3
    },
    {
        title: '"La música es el acto social de comunicación entre personas. Es un gesto de amistad. El más fuerte que existe."',
        author: '- MALCOLM ARNOLD',
        genre: 'barroque',
        src: Pic4
    }
];

export const Carousel = () => {
    
    // constant variables
    const vw = (coef) => window.innerWidth * (coef/100)
    // const imageWidth=vw(10);
    const imageWidth=vw(100);

    // useRef definitions
    let imageList = useRef();
    let contentList = useRef();
    let limits = useRef();
    const mouse = useRef(null);
    const mouse2 = useRef(null);

    // useState definitions
    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
        isActive4: false
    });
    
    // useEffect definitions
    useEffect(() => {
        // request animation frame -> look for another solution (this is to prevent the carousel to stop moving when leaving the page)
        gsap.ticker.lagSmoothing(false);
        gsap.to(contentList.children[0], {
          opacity: 1,
          duration: 0
        });
        const interval = setInterval(() => {
            mouse.current.click();
        }, 9000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // timeoutId for debounce mechanism
        let timeoutId = null;
        const resizeListener = () => {
          // prevent execution of previous setTimeout
          clearTimeout(timeoutId);
          // change width from the state object after 150 milliseconds
          timeoutId = setTimeout(() => mouse2.current.click(), 150);
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);
    
        // clean up function
        return () => {
          // remove resize listener
          window.removeEventListener('resize', resizeListener);
        }
    }, [])



    // functions
    //Image transition
    const slideLeft = (index, duration, multiplied = 1) => {
        gsap.to(imageList.children[index], {
            duration: duration,
            x: `-=${imageWidth * multiplied}`,
            ease: 'power1.inOut'
        });
    };

    const slideRight = (index, duration, multiplied = 1, delayed=0) => {
        gsap.to(imageList.children[index], {
            duration: duration,
            x: `+=${imageWidth * multiplied}`,
            ease: 'power1.inOut',
            delay: delayed
        });
    };

    //Content transition

    const fadeOut = (index, duration) => {
        gsap.to(contentList.children[index], {
            duration: duration,
            opacity: 0
        });
    };

    const fadeIn = (index, duration) => {
        gsap.to(contentList.children[index], {
            duration: duration,
            opacity: 1,
            delay: 4
        });
    };

    const nextSlide = () => {
        if (imageList.children[0].classList.contains("active")) {
            setState({ isActive1: false, isActive2: true });

            //Image transition
            slideLeft(0, 4);
            slideLeft(1, 4);
            slideLeft(2, 0);
            slideLeft(3, 0);
            slideRight(0, 0, 3, 5);

            //content transition
            fadeOut(0, 0.5);
            fadeIn(1, 1);

        } else if (imageList.children[1].classList.contains("active")) {
            setState({ isActive2: false, isActive3: true });

            //Image transition
            
            slideLeft(1, 4);
            slideLeft(2, 4);
            slideLeft(3, 0);
            slideRight(1, 0, 3, 5);

            //content transition
            fadeOut(1, 0.5);
            fadeIn(2, 1);

        } else if (imageList.children[2].classList.contains("active")) {
            setState({ isActive3: false, isActive4: true });

            //Image transition
            
            slideLeft(2, 4);
            slideLeft(3, 4);
            slideLeft(0, 0);
            slideRight(2, 0, 3, 5);

            //content transition
            fadeOut(2, 0.5);
            fadeIn(3, 1);

        } else if (imageList.children[3].classList.contains("active")) {
            setState({ isActive1: true, isActive4: false });

            //Image transition
            
            slideLeft(3, 4);
            slideLeft(0, 4);
            slideLeft(1, 0);
            slideRight(3, 0, 4, 5);

            //content transition
            fadeOut(3, 0.5);
            fadeIn(0, 1);
        }   else {
            // console.log('resized');
            setState({isActive1: true});
            for(let i=0; i<4; i++) {
                gsap.to(imageList.children[i], {
                    duration: 0,
                    x: 0
                })
            }
            fadeOut(0, 0.5);
            fadeOut(1, 0.5);
            fadeOut(2, 0.5);
            fadeOut(3, 0.5);
        }

    };

    // adjust position when resizing
    const restartPosition = () => {

        setState({ isActive1: false, isActive2: false, isActive3: false, isActive4: false });
        
    }

    return (
        <div className='background-carousel'>
            <div className='carousel'>
                <button ref={mouse} onClick={nextSlide} className='carousel-bttn'>here</button>
                <button ref={mouse2} onClick={restartPosition} className='carousel-bttn'>here</button>
                
                <div className='slider'>
                    <ul ref={el => (imageList = el)} className='image-list'>
                    {/* we can't use && in classname because the not true is read as boolean */}
                            <li id='img1' className={state.isActive1 ? "active" : "" }>
                                <img src={list[0].src} alt={list[0].title}></img>
                            </li>
                            <li id='img2' className={state.isActive2 ? "active" : "" }>
                                <img src={list[1].src} alt={list[1].title}></img>
                            </li>
                            <li id='img3' className={state.isActive3 ? "active" : "" }>
                                <img src={list[2].src} alt={list[2].title}></img>
                            </li>
                            <li id='img4' className={state.isActive4 ? "active" : "" }>
                                <img src={list[3].src} alt={list[3].title}></img>
                            </li>
                    </ul>
                    {/* testing elements */}
                    {/* <div ref={el => (limits = el)}>
                    <div className='limit' id='l0'></div>
                    <div className='limit' id='l1'></div>
                    <div className='limit' id='l2'></div>
                    <div className='limit' id='l3'></div>
                    <div className='limit' id='l4'></div>
                    </div> */}
                </div>
                
                <div className='quotes'>
                        <ul ref={el => (contentList = el)} className='content-list'>
                            <li id='item' className={state.isActive1 ? "active" : "" }>
                                <div className='content-inner'>
                                    <h3>{list[0].title}</h3>
                                    <h4>{list[0].author}</h4>
                                </div>
                            </li>
                            <li id='item' className={state.isActive2 ? "active" : "" }>
                                <div className='content-inner'>
                                    <h3>{list[1].title}</h3>
                                    <h4>{list[1].author}</h4>
                                </div>
                                
                            </li>
                            <li id='item' className={state.isActive3 ? "active" : "" }>
                                <div className='content-inner'>
                                    <h3>{list[2].title}</h3>
                                    <h4>{list[2].author}</h4>
                                </div>
                                
                            </li>
                            <li id='item' className={state.isActive4 ? "active" : "" }>
                                <div className='content-inner'>
                                    <h3>{list[3].title}</h3>
                                    <h4>{list[3].author}</h4>
                                </div>   
                            </li>
                        </ul>
                </div>
                
            </div>
        </div>
    )
}
