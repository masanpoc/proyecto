import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import './Article.scss';
import art0 from './Fotos/art-0.jpg';
import art1 from './Fotos/art-1.jpg';
import art2 from './Fotos/art-2.jpg';
import art3 from './Fotos/art-3.jpg';

export const Articulo2 = () => {
    return (
        <div className='intro-article-wrapper'>
            <div className='introduction'>
                <h1 className='songs-header'>Tu rincón de lectura</h1>
                <h3 className='songs-subtitle'>Enriquécete leyendo sobre música</h3>
            </div>    

            <div className='article-wrapper'>
                <div className='article-bg'>
                    <div className='article-written' style={{'minHeight': '100vh'}}>
                    
                        <div className='intro-article'>
                            <div className='info'>
                                <span className='date'>7 Febrero, 2021</span>
                                <div className='time'>
                                    <svg className='clock' viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                                    </svg>
                                    <span className='estimation'>4 min de Lectura</span>
                                </div>
                            </div>
                            <h1 className='title'>
                                Tocar un instrumento tiene beneficios para la salud
                            </h1>
                            <h3 className='subtitle'>
                                Arcu elementum a neque tellus ultricies id.
                            </h3>
                            <div className='writer'>
                                <svg className='pencil' viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                                </svg>
                                <h4 className='who'>Pablo Rodriguez</h4>
                            </div>
                            <div className='content'>
                                <p className='paragraph'>
                                    Massa risus sagittis, tellus at. Libero, vitae non elementum elit. Amet lacus, tellus quam consequat faucibus. Tellus quam amet quis purus vestibulum, dictum amet. Dolor at at eget ornare ut.
                                </p>
                                <p className='paragraph'>
                                    Eget blandit id enim ultrices. Sit nascetur faucibus pellentesque malesuada amet, senectus. <b>Neque sit nascetur</b> et id cursus feugiat in tortor commodo. Quis orci leo, imperdiet interdum vitae pellentesque augue euismod. Sit ac nunc tristique velit in at mauris mauris ultricies. Volutpat aliquam metus odio elit. Mi ac est aliquam nibh. 
                                </p>
                                <p className='paragraph'>
                                    Morbi vel ipsum tellus nam enim. Ut at ultrices neque sit pellentesque lorem magna quam scelerisque. Eu et dictumst facilisi leo at mattis. Etiam aenean volutpat, lacus, sit tincidunt dapibus in ut. Quam tellus lorem sit in vitae. Nisl amet viverra velit velit tellus.
                                </p>
                            </div>
                        </div>

                        <div className='part'>
                            <hr className='hr-1'></hr>
                            <h2 className='title-2'>
                                Est rhoncus cras
                            </h2>
                            <div className='content'>
                                <p className='paragraph'>
                                    Massa risus sagittis, tellus at. Libero, vitae non elementum elit. Amet lacus, tellus quam consequat faucibus. “<i>Tellus quam</i>” amet quis purus vestibulum, dictum amet. Dolor at at eget ornare ut.
                                </p>
                            </div>
                            <div className='media'>
                                <img alt='violin pic' src={art0} className='image' />
                                <figcaption className='caption'>Image caption by Aleksandr Petrovich</figcaption>
                            </div>
                            <div className='content'>
                                <p className='paragraph'>
                                    Eget blandit id enim ultrices. Sit nascetur faucibus pellentesque malesuada amet, senectus. Neque sit nascetur et id cursus feugiat in tortor commodo. <b>Quis orci leo, imperdiet interdum vitae</b>  pellentesque augue euismod. Sit ac nunc tristique velit in at mauris mauris ultricies. Volutpat aliquam metus odio elit. Mi ac est aliquam nibh.
                                </p>
                                <p className='paragraph'>
                                    Morbi vel ipsum tellus nam enim. Ut at ultrices neque sit pellentesque lorem magna quam scelerisque. Eu et dictumst facilisi leo at mattis. Etiam aenean volutpat, lacus, sit tincidunt dapibus in ut. Quam tellus lorem sit in vitae. Nisl amet viverra velit velit tellus.
                                </p>
                            </div>
                        </div>

                        <div className='part'>
                            <hr className='hr-1'></hr>
                            <h2 className='title-2'>
                                Lectus neque quis
                            </h2>
                            <div className='content'>
                                <p className='paragraph'>
                                    Massa risus sagittis, tellus at. Libero, vitae non elementum elit. Amet lacus, tellus quam consequat faucibus. Tellus quam amet quis purus vestibulum, dictum amet. Dolor at at eget ornare ut.
                                </p>
                                <p className='paragraph'>
                                    Eget blandit id enim ultrices. Sit nascetur faucibus pellentesque malesuada amet, senectus. Neque sit nascetur et id cursus feugiat in tortor commodo: 
                                </p>
                                <ul className='list'>
                                    <li className='item'>Quis orcis leo vitae non elementum</li>
                                    <li className='item'>Sic at nunc tristique at ultrices neque sit pellentesque</li>
                                    <li className='item'>Venit in at mauris </li>
                                </ul>
                                <p className='paragraph'>
                                    Morbi vel ipsum tellus nam enim. Ut at ultrices neque sit pellentesque lorem magna quam scelerisque. Eu et dictumst facilisi leo at mattis. Etiam aenean volutpat, lacus, sit tincidunt dapibus in ut. <b>Quam tellus</b>  lorem sit in vitae. Nisl amet viverra velit velit tellus. 
                                </p>
                                <p className='paragraph'>
                                    Aquí te dejo algunos de mis blogs/videos o posts favoritos sobre Vibratto/Afinar, por si estás interesado en este tema:
                                </p>
                            </div>

                            
                        </div>

                        <div className='extra'>
                                <div className='wrapper-1'>
                                    <a href='https://www.youtube.com' target='blank' >
                                        <h3 className='title-3'>
                                            Arcu elementum a neque...
                                        </h3>
                                    </a>
                                    <h5 className='subtitle-3'>
                                        Sit tincidunt velit dapibus in...
                                    </h5>
                                    <span className='resource'>
                                        youtube.com
                                    </span>
                                </div>
                                <div className='wrapper-2'>
                                    <img alt='violin pic' src={art1} className='extra-img-1' />
                                </div>
                        </div>

                        <div className='extra'>
                                <div className='wrapper-1'>
                                    <a href='https://www.youtube.com' target='blank' >
                                        <h3 className='title-3'>
                                            Arcu elementum a neque...
                                        </h3>
                                    </a>
                                    <h5 className='subtitle-3'>
                                        Sit tincidunt velit dapibus in...
                                    </h5>
                                    <span className='resource'>
                                        youtube.com
                                    </span>
                                </div>
                                <div className='wrapper-2'>
                                    <img alt='book pic' src={art2} className='extra-img-2' />
                                </div>
                        </div>

                        <div className='part'>
                            <hr className='hr-1'></hr>
                            <h2 className='title-2'>
                                Lectus neque quis
                            </h2>
                            <div className='content'>
                                <p className='paragraph'>
                                    Massa risus sagittis, tellus at. Libero, vitae non elementum elit. Amet lacus, tellus quam consequat faucibus. Tellus quam amet quis purus vestibulum, dictum amet. Dolor at at eget ornare ut.
                                </p>
                                <div className='content-link'>
                                    <p className='paragraph'>
                                        <i>Si quieres leer una explicación más detallada sobre las partes de un violín te recomiendo que le eches un vistazo a <u>este recurso</u> escrito por Hannah Morgan.</i>
                                    </p>
                                </div>
                                
                                <p className='paragraph'>
                                    Morbi vel ipsum tellus nam enim. Ut at ultrices neque sit pellentesque lorem magna quam scelerisque. Eu et dictumst facilisi leo at mattis. Etiam aenean volutpat, lacus, sit tincidunt dapibus in ut. Quam tellus lorem sit in vitae. Nisl amet viverra velit velit tellus!
                                </p>
                            </div>
                        </div>

                        
                        <div className='share'>
                            <hr className='hr-2'></hr>
                            <div className='icons'>
                                <a href="https://www.linkedin.com/shareArticle?mini=true&url=mariocirer.com&title=Agrupaci%C3%B3n%20Orquesta%20Joven%20Coru%C3%B1a" target='blank' >
                                    <svg xmlns="http://www.w3.org/2000/svg" className='icon' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> </svg>
                                </a>
                                <a href="https://www.facebook.com/sharer.php?u=mariocirer.com" target='blank' >
                                    <svg xmlns="http://www.w3.org/2000/svg" className='icon' viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                                </a>
                                <a href="https://twitter.com/intent/tweet?url=mariocirer.com&hashtags=m%C3%BAsicacl%C3%A1sica" target='blank' >
                                    <svg xmlns="http://www.w3.org/2000/svg" className='icon' viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                                </a>
                            </div>
                        </div>
                        
                        <div className='final'>
                            <div className='about'>
                                
                                <div className='flexing'>
                                    <div className='mask'>
                                        <img alt='face' src={art3} className='author-img'></img>
                                    </div>
                                    <div className='editor'>
                                        <h2 className='writer-line'>ESCRITO POR:</h2>
                                        <h2 className='name-line'>Pablo Rodríguez</h2>
                                    </div>
                                    
                                </div>
                                <div className='quote'>
                                    <i>“Siento pasión por los instrumentos de cuerda desde que tenía 16 años. Siempre me encontrarás tocando alguna pieza de Paganini.”</i>
                                </div>
                            </div>
                        </div>
                        

                        <Link className='link' to='/articulos'>Volver</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}