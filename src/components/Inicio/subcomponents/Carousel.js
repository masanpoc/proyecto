import React, { useState, useEffect, useRef } from 'react';
import '../Inicio.scss';
import Pic1 from '../../../Images/pic-1.jpg';
import Pic2 from '../../../Images/pic-2.jpg';
import Pic3 from '../../../Images/pic-3.jpg';
import Pic4 from '../../../Images/pic-4.jpg';
import { TweenLite, Power3 } from "gsap";

const list = [ 
    {
        title: 'sarabande',
        author: 'haendel',
        genre: 'barroque',
        src: Pic1
    },
    {
        title: 'title2',
        author: 'author2',
        genre: 'barroque',
        src: Pic2
    },
    {
        title: 'title3',
        author: 'author3',
        genre: 'barroque',
        src: Pic3
    },
    {
        title: 'title4',
        author: 'author4',
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

    // useState definitions
    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
        isActive4: false
    });
    
    // useEffect definitions
    useEffect(() => {
        TweenLite.to(contentList.children[0], 0, {
          opacity: 1
        });
        nextSlide()
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
        ease: Power3.easeOut
        });
    };

    const slideRight = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
        x: imageWidth * multiplied,
        ease: Power3.easeOut
        });
    };

    const scale = (index, duration) => {
        TweenLite.from(imageList.children[index], duration, {
        scale: 1.2,
        ease: Power3.easeOut
        });
    };

    //Content transition

    const fadeOut = (index, duration) => {
        TweenLite.to(contentList.children[index], duration, {
        opacity: 0
        });
    };

    const fadeIn = (index, duration) => {
        TweenLite.to(contentList.children[index], duration, {
        opacity: 1,
        delay: 1
        });
    };

    const nextSlide = () => {
        if (imageList.children[0].classList.contains("active")) {
          setState({ isActive1: false, isActive2: true });
          //Image transition
          slideLeft(0, 1);
          slideLeft(1, 1);
          scale(1, 1);
          slideLeft(2, 1);
          slideLeft(2, 0);
          fadeOut(0, 1);
          fadeIn(1, 1);
        } else if (imageList.children[1].classList.contains("active")) {
          setState({ isActive2: false, isActive3: true });
          //Image transition
          slideRight(0, 1);
          slideLeft(1, 1, 2);
          slideLeft(2, 1, 2);
          scale(2, 1);
          //content transition
          fadeOut(1, 1);
          fadeIn(2, 1);
        } else if (imageList.children[2].classList.contains("active")) {
          setState({ isActive1: true, isActive3: false });
          //Image transition
          slideLeft(2, 1, 3);
          slideLeft(0, 1, 0);
          slideLeft(1, 0, 0);
          scale(0, 1);
          //content transition
          fadeOut(2, 1);
          fadeIn(0, 1);
        }
    };

    return (
        <div className='carousel'>
        <button onClick={nextSlide} >here</button>
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
                    {/* <li className={state.isActive4 && "active"}>
                        <img src={list[3].src} alt={list[3].title}></img>
                    </li> */}
               </ul>
           </div>
           <div className='quotes'>
                <ul ref={el => (contentList = el)} className='content-list'>
                    <li className={state.isActive1 && "active"}>
                        <div className='content-inner'>
                            <h3>{list[0].title}</h3>
                            <h4>{list[0].author}</h4>
                            <h5>{list[0].genre}</h5>
                        </div>
                    </li>
                    <li className={state.isActive2 && "active"}>
                        <div className='content-inner'>
                            <h3>{list[1].title}</h3>
                            <h4>{list[1].author}</h4>
                            <h5>{list[1].genre}</h5>
                        </div>
                        
                    </li>
                    <li className={state.isActive3 && "active"}>
                        <div className='content-inner'>
                            <h3>{list[2].title}</h3>
                            <h4>{list[2].author}</h4>
                            <h5>{list[2].genre}</h5>
                        </div>
                        
                    </li>
                    {/* <li className={state.isActive4 && "active"}>
                        <div className='content-inner'>
                            <h3>{list[3].title}</h3>
                            <h4>{list[3].author}</h4>
                            <h5>{list[3].genre}</h5>
                        </div>   
                    </li> */}
                </ul>
           </div>
           
        </div>
    )
}
