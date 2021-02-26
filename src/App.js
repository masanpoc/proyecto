import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {Inicio} from './components/Inicio/Inicio';
import {Articulos} from './components/Articulos';
import {Obras} from './components/Obras';
import {Nosotros} from './components/Nosotros/Nosotros';
import {Historia} from './components/Nosotros/subcomponents/Historia';
import {Conocenos} from './components/Nosotros/subcomponents/Conocenos';
import {Proyectos} from './components/Nosotros/subcomponents/Proyectos';

function App() {
  const [active, setActive] = useState(false);
  return ( 
    // we use router to render the matching route (handle different pages) 
    <Router >
      <div className="App">
        
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
            <Link to='/nosotros' className='link nosotros'>
              Sobre Nosotros
              <div className='desplegable'>
                <Link className='link' to='/nosotros/historia'>Nuestra historia</Link>
                <Link className='link' to='/nosotros/conocenos'>Conócenos</Link>
                <Link className='link' to='/nosotros/proyectos'>Proyectos</Link>
              </div>
            </Link>
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
              <Link to='/nosotros' className='link nosotros-mobile ' onClick={() => setActive(!active)}>
                <span className='f1 underline'>Sobre Nosotros</span>
                <div className='desplegable-mobile'>
                  <Link className='link-2' to='/nosotros/historia' onClick={() => setActive(!active)}>Nuestra historia</Link>
                  <Link className='link-2' to='/nosotros/conocenos' onClick={() => setActive(!active)}>Conócenos</Link>
                  <Link className='link-2' to='/nosotros/proyectos' onClick={() => setActive(!active)}>Proyectos</Link>
                </div>
              </Link>
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