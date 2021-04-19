import React, { useRef, useEffect } from 'react';
import './Intro.scss';
import gsap from 'gsap';
import IntroPic from '../../Images/pic-intro2.jpg';
// import intro_pic2 from './Images/intro.jpg'; 
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

export const Intro = () => {

    // useRef definitions 
    let intro = useRef();
    let lamina = useRef();
    let magnifier = useRef();
    let image = useRef();
    let sentences = useRef();
    let subtitle = useRef();
    let subtitle2 = useRef();
    let authors = useRef();
    let letter1 = useRef();
    let letter2 = useRef();
    let letter3 = useRef();
    let letter4 = useRef();
    let letter5 = useRef();
    let letter6 = useRef();
    let letter7 = useRef();
    let letter8 = useRef();
    let letter9 = useRef();
    let letter10 = useRef();
    let letter11 = useRef();
    let letter12 = useRef();
    let letter13 = useRef();
    let letter14 = useRef();
    let letter15 = useRef();
    let letter16 = useRef();
    let letter17 = useRef();
    let letter18 = useRef();
    let letter19 = useRef();
    let letter20 = useRef();
    let letter21 = useRef();
    let letter22 = useRef();
    let letter23 = useRef();
    let letter24 = useRef();

    // useEffect definitions
    useEffect(() => {
        gsap.to(magnifier, {
            duration: 0, 
            motionPath: {
              path: [{x:-200, y:-500}],
            }
        })
        gsap.to(image, {
            duration: 0, 
            motionPath: {
              path: [{x:+200, y:500}],
      
            }
        })

        const timeline = gsap.timeline(
            // {ease: 'bounce-out'}
            )
        timeline
        .to(magnifier, {
        delay: 1.5,
        scale: 1,
        duration: 3, 
        motionPath: {
            path: [{x:-250, y:0}, {x:-20, y:100}],
            curviness: 2
        }
        })
        .to(image, {
        scale: 1,
        duration: 3, 
        motionPath: {
            path: [{x:250, y:0}, {x:20, y:-100}],
            curviness: 2
        }
        }, '>-3')
        .from(letter1, {
        scale: 2,
        autoAlpha: 0,
        duration: 2,
        x: -1000,
        y: 200,
        skewX: 50
        }, '>-3')
        .from(letter2, {
        scale: 2,
        autoAlpha: 0,
        duration: 1.5,
        x: -500,
        y: -100,
        skewX: 70
        }, '>-2')
        .from(letter3, {
        scale: 2,
        autoAlpha: 0,
        duration: 3,
        x: 20,
        y: 400,
        skewY: 30 
        }, '>-1.5')
        .from(letter4, {
        scale: 2,
        autoAlpha: 0,
        duration: 1.5,
        x: -200,
        y: -700,
        skewX: 45
        }, '>-3')
        .from(letter5, {
        scale: 2,
        autoAlpha: 0,
        duration: 3,
        x:1400 ,
        y: -402,
        skewY: 36
        }, '>-1.5')
        .from(letter6, {
        scale: 2,
        autoAlpha: 0,
        duration: 3,
        x: -587,
        y:52 ,
        skewY: 58
        }, '>-3')
        .from(letter7, {
        scale: 2,
        autoAlpha: 0,
        duration: 3,
        x:205 ,
        y: 547,
        skewX: 45
        }, '>-3')
        .from(letter8, {
        scale: 2,
        autoAlpha: 0,
        duration: 2,
        x: 100,
        y: -200,
        skewX: 50
        }, '>-3')
        .from(letter9, {
        scale: 2,
        autoAlpha: 0,
        duration: 2,
        x: -500,
        y: 100,
        skewX: 70
        }, '>-2')
        .from(letter10, {
        scale: 2,
        autoAlpha: 0,
        duration: 1.5,
        x: 200,
        y: -400,
        skewY: 30 
        }, '>-2')
        .from(letter11, {
        scale: 2,
        autoAlpha: 0,
        duration: 3,
        x: -20,
        y: 550,
        skewX: 45
        }, '>-1.5')
        .from(letter12, {
        scale: 2,
        autoAlpha: 0,
        duration: 2,
        x:400 ,
        y: 1220,
        skewY: 36
        }, '>-3')
        .from(letter13, {
        scale: 2,
        autoAlpha: 0,
        duration: 3,
        x: 287,
        y:52 ,
        skewY: 58
        }, '>-2')
        .from(letter14, {
        scale: 2,
        autoAlpha: 0,
        duration: 2,
        x:259 ,
        y: 747,
        skewX: 45
        }, '>-3')
        .from(letter15, {
        scale: 2,
        autoAlpha: 0,
        duration: 1.5,
        x: -800,
        y: 1100,
        skewX: 50
        }, '>-2')
        .from(letter16, {
        scale: 2,
        autoAlpha: 0,
        duration: 3,
        x: 50,
        y: -60,
        skewX: 70
        }, '>-1.5')
        .from(letter17, {
        scale: 2,
        autoAlpha: 0,
        duration: 2,
        x: 200,
        y: 250,
        skewY: 30 
        }, '>-3')
        .from(letter18, {
        scale: 2,
        autoAlpha: 0,
        duration: 3,
        x: 20,
        y: -360,
        skewX: 45
        }, '>-2')
        .from(letter19, {
        scale: 2,
        autoAlpha: 0,
        duration: 3,
        x:445 ,
        y: -4002,
        skewY: 36
        }, '>-3')
        .from(letter20, {
        scale: 2,
        autoAlpha: 0,
        duration: 3,
        x: -287,
        y:52 ,
        skewY: 58
        }, '>-3')
        .from(letter21, {
        scale: 2,
        autoAlpha: 0,
        duration: 2,
        x:25 ,
        y: 547,
        skewX: 45
        }, '>-3')
        .from(letter22, {
        scale: 2,
        autoAlpha: 0,
        duration: 2,
        x:44 ,
        y: -402,
        skewY: 36
        }, '>-2')
        .from(letter23, {
        scale: 2,
        autoAlpha: 0,
        duration: 3,
        x: 587,
        y:1020 ,
        skewY: 58
        }, '>-2')
        .from(letter24, {
        scale: 2,
        autoAlpha: 0,
        duration: 2,
        x:25 ,
        y: 547,
        skewX: 45
        }, '>-3')

        .from(subtitle, {
        delay: 1,
        duration: 1,
        y: 50,
        autoAlpha: 0,
        })
        .from(subtitle2, {
        delay: 1,
        duration: 1,
        y: 50,
        autoAlpha: 0
        })

        .to(magnifier, {
            delay: 2,
            autoAlpha: 0,
            duration: 1
        })
        .to(sentences, {
            autoAlpha: 0,
            duration: 1
        }, '>-1')
        .to(authors, {
        autoAlpha: 0,
        duration: 1
        }, '>-1')
        .to(lamina.children, {
            yPercent: -60,
            scaleY: 0,
            autoAlpha: 0,
            duration: 2
        })
        .set(intro, {
            className: 'none'
        })
        
    }, [])

    return (
        <div ref={el => (intro=el)} className='intro'>
            {/* transicion de efecto lamina */}
            <div ref={el => (lamina=el)} className='lamina'>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
                <div className='segment'></div>
            </div>
            {/* animacion de efecto lupa */}
            <div ref={el => (magnifier=el)} className='magnifier'>
                <img ref={el => (image=el)} className='image' src={IntroPic} alt='header' />
            </div>
            {/* transicion de letras de autores x4 */}
            <div ref={el => (authors=el)} className='authors' >
                <div className='wraper align1'>
                    <div ref={el=>(letter1=el)} className='letter'>H</div>
                    <div ref={el=>(letter2=el)} className='letter'>A</div>
                    <div ref={el=>(letter3=el)} className='letter'>E</div>
                    <div ref={el=>(letter4=el)} className='letter'>N</div>
                    <div ref={el=>(letter5=el)} className='letter'>D</div>
                    <div ref={el=>(letter6=el)} className='letter'>E</div>
                    <div ref={el=>(letter7=el)} className='letter'>L</div>
                </div>
                <div className='wraper align2'>
                    <div ref={el=>(letter12=el)} className='letter'>M</div>
                    <div ref={el=>(letter13=el)} className='letter'>O</div>
                    <div ref={el=>(letter14=el)} className='letter'>Z</div>
                    <div ref={el=>(letter15=el)} className='letter'>A</div>
                    <div ref={el=>(letter16=el)} className='letter'>R</div>
                    <div ref={el=>(letter17=el)} className='letter'>T</div>
                </div>
                <div className='wraper align3'>
                    <div ref={el=>(letter8=el)} className='letter'>B</div>
                    <div ref={el=>(letter9=el)} className='letter'>A</div>
                    <div ref={el=>(letter10=el)} className='letter'>C</div>
                    <div ref={el=>(letter11=el)} className='letter'>H</div>
                </div>
                <div className='wraper align4'>
                    <div ref={el=>(letter18=el)} className='letter'>V</div>
                    <div ref={el=>(letter19=el)} className='letter'>I</div>
                    <div ref={el=>(letter20=el)} className='letter'>V</div>
                    <div ref={el=>(letter21=el)} className='letter'>A</div>
                    <div ref={el=>(letter22=el)} className='letter'>L</div>
                    <div ref={el=>(letter23=el)} className='letter'>D</div>
                    <div ref={el=>(letter24=el)} className='letter'>I</div>
                </div>
            </div>
            {/* transicion de subtitulos 1 y 2 */}
            <div ref={el => (sentences=el)} className='sentences'>
                <h3 ref={el => (subtitle=el)} className='subtitle1' >Sientes curiosidad por la música clásica?</h3>
                <h5 ref={el => (subtitle2=el)} className='subtitle2' >Descubre quiénes somos</h5>
            </div>
        </div>
    )
}
