import React, { useState, useEffect, useRef } from 'react';
import '../Inicio.scss';
import Pic1 from '../../../Images/pic-1.jpg';
import Pic2 from '../../../Images/pic-2.jpg';
import Pic3 from '../../../Images/pic-3.jpg';
import Pic4 from '../../../Images/pic-4.jpg';
// import { Power3 } from "gsap";
import gsap from 'gsap';
import { TweenLite } from 'gsap';

const list = [ 
    {
        title: '"La imaginación crea la realidad."',
        author: 'Richard Wagner',
        genre: 'barroque',
        src: Pic1
    },
    {
        title: '"Si no fuera por la música, habría más razones para volverse loco."',
        author: 'Tchaikovski',
        genre: 'barroque',
        src: Pic2
    },
    {
        title: '"El músico es tal vez el más modesto de los animales, pero también es el más orgulloso."',
        author: 'Erik Satie',
        genre: 'barroque',
        src: Pic3
    },
    {
        title: '"La música es el acto social de comunicación entre personas. Es un gesto de amistad. El más fuerte que existe."',
        author: 'Malcolm Arnold',
        genre: 'barroque',
        src: Pic4
    }
];

export const Carousel = () => {

    // constant variables
    const vw = (coef) => window.innerWidth * (coef/100)
    const imageWidth=vw(100);

    // useRef definitions
    let imageList = useRef();
    let contentList = useRef();
    const mouse = useRef(null);

    // useState definitions
    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
        isActive4: false
    });
    
    // useEffect definitions
    useEffect(() => {
        // request animation frame
        gsap.ticker.lagSmoothing(false);
        TweenLite.to(contentList.children[0], 0, {
          opacity: 1
        });
        const interval = setInterval(() => {
            mouse.current.click();
        }, 10000);
        return () => clearInterval(interval);
        // nextSlide()
        // const interval = setInterval(
        //     // console.log('This will run every second!');
        //     nextSlide
        // , 4000);
        // return () => clearInterval(interval);
    }, []);



    // functions
    //Image transition
    const slideLeft = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
        x: -imageWidth * multiplied,
        ease: 'ease-out'
        });
    };

    const slideRight = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
        x: imageWidth * multiplied,
        ease: 'ease-out'
        });
    };

    // const scale = (index, duration) => {
    //     TweenLite.from(imageList.children[index], duration, {
    //     scale: 1.2,
    //     ease: Power3.easeOut
    //     });
    // };

    //Content transition

    const fadeOut = (index, duration) => {
        TweenLite.to(contentList.children[index], duration, {
        opacity: 0
        });
    };

    const fadeIn = (index, duration) => {
        TweenLite.to(contentList.children[index], duration, {
        opacity: 1,
        delay: 3
        });
    };

    const nextSlide = () => {
        if (imageList.children[0].classList.contains("active")) {
            setState({ isActive1: false, isActive2: true });

            //Image transition
            slideRight(3, 0, 0);
            slideLeft(0, 3);
            slideLeft(1, 3);
            slideLeft(2, 3);
            slideLeft(3, 3);

            //   scale(1, 3);

            fadeOut(0, 1);
            fadeIn(1, 2);

        } else if (imageList.children[1].classList.contains("active")) {
            setState({ isActive2: false, isActive3: true });

            //Image transition
            slideLeft(1, 3, 2);
            slideLeft(2, 3, 2);
            slideLeft(3, 3, 2);

            //   scale(2, 3);

            //content transition
            fadeOut(1, 1);
            fadeIn(2, 2);

        } else if (imageList.children[2].classList.contains("active")) {
            setState({ isActive3: false, isActive4: true });

            //Image transition
            
            slideLeft(2, 3, 3);
            slideLeft(3, 3, 3);
            
            slideRight(0, 0, 1);

            //   scale(0, 3);

            //content transition
            fadeOut(2, 1);
            fadeIn(3, 2);

        } else if (imageList.children[3].classList.contains("active")) {
            setState({ isActive1: true, isActive4: false });

            //Image transition
            // slideRight(0, 0, 1);
            slideLeft(3, 3, 4);
            slideLeft(0, 3, 0);
            
            slideRight(1, 0, 0);
            slideRight(2, 0, 0);

          //   scale(0, 3);

            //content transition
            fadeOut(3, 1);
            fadeIn(0, 2);

          }
    };

    return (
        <div className='background-carousel'>
            <div className='carousel'>
                <button ref={mouse} onClick={nextSlide} className='carousel-bttn'>here</button>
                
                <div className='slider'>
                    <ul ref={el => (imageList = el)} className='image-list'>
                            <li className={state.isActive1 && "active"}>
                                <img src={list[0].src} alt={list[0].title}></img>
                            </li>
                            <li className={state.isActive2 && "active"}>
                                <img src={list[1].src} alt={list[1].title}></img>
                            </li>
                            <li className={state.isActive3 && "active"}>
                                <img src={list[2].src} alt={list[2].title}></img>
                            </li>
                            <li className={state.isActive4 && "active"}>
                                <img src={list[3].src} alt={list[3].title}></img>
                            </li>
                    </ul>
                </div>
                
                <div className='quotes'>
                        <ul ref={el => (contentList = el)} className='content-list'>
                            <li id='item' className={state.isActive1 && "active"}>
                                <div className='content-inner'>
                                    <h3>{list[0].title}</h3>
                                    <h4>{list[0].author}</h4>
                                    {/* <h5>{list[0].genre}</h5> */}
                                </div>
                            </li>
                            <li id='item' className={state.isActive2 && "active"}>
                                <div className='content-inner'>
                                    <h3>{list[1].title}</h3>
                                    <h4>{list[1].author}</h4>
                                    {/* <h5>{list[1].genre}</h5> */}
                                </div>
                                
                            </li>
                            <li id='item' className={state.isActive3 && "active"}>
                                <div className='content-inner'>
                                    <h3>{list[2].title}</h3>
                                    <h4>{list[2].author}</h4>
                                    {/* <h5>{list[2].genre}</h5> */}
                                </div>
                                
                            </li>
                            <li id='item' className={state.isActive4 && "active"}>
                                <div className='content-inner'>
                                    <h3>{list[3].title}</h3>
                                    <h4>{list[3].author}</h4>
                                    {/* <h5>{list[3].genre}</h5> */}
                                </div>   
                            </li>
                        </ul>
                </div>
                
            </div>
        </div>
    )
}
