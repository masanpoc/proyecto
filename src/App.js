import './App.scss';
import React, { useState, useRef, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect, useLocation, withRouter} from 'react-router-dom';
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
   useEffect(() => {
     intro();
   }, [])
  

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
      delay: 13.5,
     css: {
       overflow: 'visible',
       height: 'auto'
     }
   })
   };

   
   
  return ( 
    // we use router to render the matching route (handle different pages) 
    <Router >
      <Intro />
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
              <Link className='link link-inicio' to='/' onClick={() => setActive(!active)}>Inicio</Link>
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
          <div className='logo-minified'>
            Logo y nombre (Agrupación Musical Coruña)
          </div>

          <div className='email'>
            <a href='mailto:agrupacioncoruña@gmail.com' className='email-link'>
            <svg xmlns="http://www.w3.org/2000/svg" className='email-icon' viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
              <h4 className='email-text'>agrupacioncoruña@gmail.com</h4>
            </a>
          </div>

          <div className='social-media'>

            <li className='facebook'>
              <a href='https://www.facebook.com/TheEUYO/' target='blank' className='facebook-link' title='facebook' >
              <svg xmlns="http://www.w3.org/2000/svg" className='facebook-icon' viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
            </li>

            <li className='instagram'>
              <a href='https://www.instagram.com/marioscp1998/' target='blank' className='instagram-link' title='instagram' >
                <svg xmlns="http://www.w3.org/2000/svg" className='instagram-icon' viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </li>
          </div> 

        </footer>

      </div>
    </Router>
  );
}

export default App;
