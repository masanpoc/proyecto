import './App.scss';
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation, withRouter} from 'react-router-dom';
import {Intro} from './components/Intro/Intro';
import {Inicio} from './components/Inicio/Inicio';
import {Obras} from './components/Obras';
import {Historia} from './components/Nosotros/subcomponents/Historia';
import {Conocenos} from './components/Nosotros/subcomponents/Conocenos';
import {Proyectos} from './components/Nosotros/subcomponents/Proyectos';
import {Lista} from './components/Articles/Lista';
import {Articulo1} from './components/Articles/Lista/Articulo1';
import {Articulo2} from './components/Articles/Lista/Articulo2';
import {Articulo3} from './components/Articles/Lista/Articulo3';
import {Articulo4} from './components/Articles/Lista/Articulo4';
import gsap from 'gsap';




function App() {
   // constant variables

   // useRef definitions
   let App = useRef();

   // useState definitions
  const [options, setOptions] = useState(false);
  const [active, setActive] = useState(false);

   // useEffect definitions
  

  //  commented out this and the <intro /> element
  //  useEffect(() => {
  //    intro();
  //  }, [])
  

  // functions
  // function vwToPx(value) {
  //   return window.innerWidth * (value/100)
  // }

  // function vhToPx(value) {
  //   return window.innerHeight * (value/100)
  // }
  function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        // console.log(window.innerWidth);
    }, [pathname]);
    return props.children
  }
  const ScrollToTop = withRouter(_ScrollToTop);
  
   const intro = () => {
    gsap.set(App, {
      css: {
        overflow: 'hidden',
        height: '100vh'
      }
    })
   //  total duration of the intro animation == duration of the delay
    gsap.set(App, {
      delay: 15.5,
     css: {
       overflow: 'visible',
       height: 'auto'
     }
   })
   };

   
   
  return ( 
    // we use router to render the matching route (handle different pages) 
    <Router >
      {/* <Intro /> */}
      <div ref={el => (App=el)} className="App">
        
        {/* header */}
        <header className='header'>
          {/* logo */}
          <Link onClick={() => setActive(false)} className='logo' to='/' id='logo'>logo y nombre (Agrupación Musical Coruña)</Link>
          {/* <input className='buscador' placeholder='buscar'></input> */}
        </header>
        
        {/* navbar */}
        <nav id='navbar'>
          
          {/* menu de opciones desktop friendly*/}
          <div id='menu-desktop'>
            {/* we have to Link the tags home, about, users... */}
            <Link className='link' to='/'><li>Inicio</li></Link>
            <span>|</span>
            <span className='nosotros' onMouseOver={() => setOptions(true)} onClick={() => setOptions(false)} >
              {/* <Link to='/nosotros' className='link'>Sobre Nosotros</Link> */}
              <span>Sobre nosotros</span>
              <div className={options ? 'desplegable' : 'none'}>
                <Link className='link' to='/nosotros/historia' onClick={() => setOptions(false)} >Nuestra historia</Link>
                <Link className='link' to='/nosotros/conocenos' onClick={() => setOptions(false)} >Conócenos</Link>
                {/* <Link className='link' to='/nosotros/proyectos' onClick={() => setOptions(false)} >Proyectos</Link> */}
              </div>
            </span>
            <span>|</span>
            <Link className='link' to='/articulos'><li>Artículos</li></Link>
            <span>|</span>
            <Link className='link' to='/obras'><li>Obras</li></Link>
           
            
          </div>

          {/* menu de opciones mobile friendly */}
          <div id='menu-mobile'>
             <button className='mobile-button' onClick={() => setActive(!active)} >
               <svg className='svg-menu' viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
               </svg>
             </button>
             {/* <input className='buscador' placeholder='buscar'></input> */}
          </div>
          <div className={active ? 'mobile-links' : 'none'} >
              <div className='glassy'></div>
              <Link className='link' to='/' onClick={() => setActive(!active)}>Inicio</Link>
              <Link className='link' to='/nosotros/historia' onClick={() => setActive(!active)}>Nuestra historia</Link>
              <Link className='link' to='/nosotros/conocenos' onClick={() => setActive(!active)}>Conócenos</Link>
              <Link className='link' to='/articulos' onClick={() => setActive(!active)}>Artículos</Link>
              <Link className='link' to='/obras' onClick={() => setActive(!active)}>Obras</Link>
          </div>

        </nav>

       

     

        {/* we start the routing process with a switch --> once exact name is found --> routing stops and react renders the matched component */}
      <ScrollToTop>
        <Switch>
         
          <Route path='/' exact component={Inicio} />
          {/* <Route path='/articulos' exact component={Articulos} /> */}
          <Route path='/obras' component={Obras} />
          {/* <Route path='/nosotros' exact component={Nosotros} /> */}
          <Route path='/nosotros/historia' component={Historia} />
          <Route path='/nosotros/conocenos' component={Conocenos} />
          <Route path='/nosotros/proyectos' component={Proyectos} />
          
          <Route path='/articulos' exact component={Lista} />
          <Route path='/articulos/1'  component={Articulo1} />
          <Route path='/articulos/2' component={Articulo2} />
          <Route path='/articulos/3' component={Articulo3} />
          <Route path='/articulos/4' component={Articulo4} />
          <Route path="/articulos/*">
            <Redirect to="/articulos" />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </ScrollToTop>

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
