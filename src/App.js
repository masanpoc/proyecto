import './App.scss';
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {Inicio} from './components/Inicio/Inicio';
import {Articulos} from './components/Articulos';
import {Obras} from './components/Obras';
import {Nosotros} from './components/Nosotros/Nosotros';
import {Historia} from './components/Nosotros/subcomponents/Historia';
import {Conocenos} from './components/Nosotros/subcomponents/Conocenos';
import {Proyectos} from './components/Nosotros/subcomponents/Proyectos';
// import intro_pic from './Images/intro.jpg';
// import intro_pic2 from './Images/pic-intro2.jpg'; 
import gsap from 'gsap';

function App() {
   // constant variables

   // useRef definitions
   let intro = useRef();
   let introImg = useRef();
   let introMag = useRef();
   let introTitle = useRef();
   let introSubtitle = useRef();

   // useState definitions
  const [options, setOptions] = useState(false);
  const [active, setActive] = useState(false);

   // useEffect definitions
  //  useEffect(() => {
  //   console.log('hey');
    // introAnimation();
  //  }, []);

  // functions
  function vwToPx(value) {
    return window.innerWidth * (value/100)
  }

  function vhToPx(value) {
    return window.innerHeight * (value/100)
  }

  // const introAnimation = () => {
    // const timeline = gsap.timeline({duration: 3});
    // timeline
    // .from(introTitle, {
    //   autoAlpha: 0,
    //   y: 100
    // })
    // .from(introSubtitle, {
    //   autoAlpha: 0,
    //   y: 200
    // })
    // gsap.to(introImg, {
    //   x: vwToPx(35),
    //   y: vhToPx(15),
    //   duration: 3,
    //   delay: 2
    // });
    // gsap.to(introMag, {
    //   x:  vwToPx(-35),
    //   y: vhToPx(-15),
    //   duration: 3,
    //   delay: 2
    // });
  // }
   
  return ( 
    // we use router to render the matching route (handle different pages) 
    <Router >
      <div className="App">
      {/* <div ref={el => (intro = el)} className='intro'>
          
          <div ref={el => (introImg = el)} className='glass'>
            <div ref={el => (introMag = el)} className='intro-image'></div>
          </div>
          
          <h1 ref={el => (introTitle = el)}  className='titleAnimation'>Título de entrada a la animacion</h1>
          <h2 ref={el => (introSubtitle = el)} className='subtitleAnimation'>Slogan o cualquier otra idea</h2>
          
          <div className='authors'>
            <span>HAENDEL</span>
            <span>Bach</span>
            <span>Vivaldi</span>
            <span>Haydn</span>
            <span>Mozart</span>
            <span>Beethoven</span>
          </div>

      </div> */}
        {/* header */}
        <header className='header'>
          {/* logo */}
          <Link className='link' to='/' id='logo'><span onClick={() => setActive(false)} >logo y nombre (Agrupación Musical Coruña)</span></Link>
          <input className='buscador' placeholder='buscar'></input>
        </header>
        
        {/* navbar */}
        <nav id='navbar'>
          
          {/* menu de opciones desktop friendly*/}
          <div id='menu-desktop'>
            {/* we have to Link the tags home, about, users... */}
            <Link className='link' to='/'><li>Inicio</li></Link>
            <span>|</span>
            <Link className='link' to='/articulos'><li>Artículos</li></Link>
            <span>|</span>
            <Link className='link' to='/obras'><li>Obras</li></Link>
            <span>|</span>
            <span className='nosotros' onMouseOver={() => setOptions(true)} onClick={() => setOptions(false)} >
              <Link to='/nosotros' className='link'>Sobre Nosotros</Link>
              <div className={options ? 'desplegable' : 'none'}>
                <Link className='link' to='/nosotros/historia' onClick={() => setOptions(false)} >Nuestra historia</Link>
                <Link className='link' to='/nosotros/conocenos' onClick={() => setOptions(false)} >Conócenos</Link>
                <Link className='link' to='/nosotros/proyectos' onClick={() => setOptions(false)} >Proyectos</Link>
              </div>
            </span>
          </div>

          {/* menu de opciones mobile friendly */}
          <div id='menu-mobile'>
             <button onClick={() => setActive(!active)} >
               <svg className='svg-menu' viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
               </svg>
             </button>
             <input className='buscador' placeholder='buscar'></input>
          </div>
          <div className={active ? 'mobile-links' : 'none'} >
              <Link className='f1 link underline' to='/' onClick={() => setActive(!active)}>Inicio</Link>
              <Link className='f1 link underline' to='/articulos' onClick={() => setActive(!active)}>Artículos</Link>
              <Link className='f1 link underline' to='/obras' onClick={() => setActive(!active)}>Obras</Link>
              <span className='nosotros-mobile extra-border'>
                <Link to='/nosotros' className='link f1 underline extra-padding' onClick={() => setActive(!active)}>
                  Sobre Nosotros
                </Link>
                <div className='desplegable-mobile'>
                  <Link className='link-2' to='/nosotros/historia' onClick={() => setActive(!active)}>Nuestra historia</Link>
                  <Link className='link-2' to='/nosotros/conocenos' onClick={() => setActive(!active)}>Conócenos</Link>
                  <Link className='link-2' to='/nosotros/proyectos' onClick={() => setActive(!active)}>Proyectos</Link>
                </div>
              </span>
              
                
               
          </div>

        </nav>

       

     

        {/* we start the routing process with a switch --> once exact name is found --> routing stops and react renders the matched component */}
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/articulos' component={Articulos} />
          <Route path='/obras' component={Obras} />
          <Route path='/nosotros' exact component={Nosotros} />
          <Route path='/nosotros/historia' component={Historia} />
          <Route path='/nosotros/conocenos' component={Conocenos} />
          <Route path='/nosotros/proyectos' component={Proyectos} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      

        {/* footer */}
        <footer className='footer'>
          <li>Logo</li>
          <li>Información de contacto</li>
          <li>Enlace a redes</li>

        </footer>

      </div>
    </Router>
  );
}

export default App;
