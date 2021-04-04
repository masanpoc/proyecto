import React from 'react';
import './Article.scss';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

export const Articulo1 = () => {
    return (
        <div className='article-written' style={{'minHeight': '100vh'}}>
            articulo 1
            <div className='intro-article'>
                <div className='info'>
                    <span className='date'>7 Febrero, 2021</span>
                    <div className='time'>
                        svg
                        <span>4 min de Lectura</span>
                    </div>
                </div>
                <h1 className='title'>
                    La importancia de aprender música cuando somos niños, imprescindible? 
                </h1>
                <h3 className='subtitle'>
                    Arcu elementum a neque tellus ultricies id.
                </h3>
                <div className='writer'>
                    svg
                    <h4>Pablo Rodriguez</h4>
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
                <hr></hr>
                <h2 className='title-2'>
                    Est rhoncus cras
                </h2>
                <div className='content'>
                    <p className='paragraph'>
                        Massa risus sagittis, tellus at. Libero, vitae non elementum elit. Amet lacus, tellus quam consequat faucibus. “<i>Tellus quam</i>” amet quis purus vestibulum, dictum amet. Dolor at at eget ornare ut.
                    </p>
                </div>
                <div className='media'>
                    <img alt='violin pic' src='' className='image' />
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
                <hr></hr>
                <h2 className='title-2'>
                    Lectus neque quis
                </h2>
                <div className='content'>
                    <p className='paragraph'>
                        Massa risus sagittis, tellus at. Libero, vitae non elementum elit. Amet lacus, tellus quam consequat faucibus. Tellus quam amet quis purus vestibulum, dictum amet. Dolor at at eget ornare ut.
                    </p>
                    <p className='paragraph'>
                        Eget blandit id enim ultrices. Sit nascetur faucibus pellentesque malesuada amet, senectus. Neque sit nascetur et id cursus feugiat in tortor commodo. 
                    </p>
                    <ul>
                        <li>Quis orcis leo</li>
                        <li>Sic at nunc tristique</li>
                        <li>Venit in at mauris</li>
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
                        <h3 className='title-3'>
                            Arcu elementum a neque...
                        </h3>
                        <h5 className='subtitle-3'>
                            Sit tincidunt velit dapibus in...
                        </h5>
                        <span className='resource'>
                            youtube.com
                        </span>
                    </div>
                    <div className='wrapper-2'>
                        <img alt='violin pic' src='' className='image' />
                    </div>
            </div>

            <div className='extra'>
                    <div className='wrapper-1'>
                        <h3 className='title-3'>
                            Arcu elementum a neque...
                        </h3>
                        <h5 className='subtitle-3'>
                            Sit tincidunt velit dapibus in...
                        </h5>
                        <span className='resource'>
                            youtube.com
                        </span>
                    </div>
                    <div className='wrapper-2'>
                        <img alt='book pic' src='' className='image' />
                    </div>
            </div>

            <div className='part'>
                <hr></hr>
                <h2 className='title-2'>
                    Lectus neque quis
                </h2>
                <div className='content'>
                    <p className='paragraph'>
                        Massa risus sagittis, tellus at. Libero, vitae non elementum elit. Amet lacus, tellus quam consequat faucibus. Tellus quam amet quis purus vestibulum, dictum amet. Dolor at at eget ornare ut.
                    </p>
                    <hr></hr>
                    <p className='paragraph'>
                        <i>Si quieres leer una explicación más detallada sobre las partes de un violín te recomiendo que le eches un vistazo a este recurso escrito por Hannah Morgan.</i>
                    </p>
                    <p className='paragraph'>
                        Morbi vel ipsum tellus nam enim. Ut at ultrices neque sit pellentesque lorem magna quam scelerisque. Eu et dictumst facilisi leo at mattis. Etiam aenean volutpat, lacus, sit tincidunt dapibus in ut. Quam tellus lorem sit in vitae. Nisl amet viverra velit velit tellus.
                    </p>
                </div>
            </div>

            <div className='share'>
                <hr></hr>
                <div className='icons'>
                    svg1
                    svg2
                    svg3
                    svg4
                </div>
            </div>

            <div className='about'>
                <div className='flexing'>
                    <div className='mask'>
                        <img alt='face' src=''></img>
                    </div>
                    <h2 className='writer-line'>ESCRITO POR:</h2>
                    <h2 className='name-line'>Pablo Rodríguez</h2>
                </div>
                <div className='quote'>
                    <i>“Siento pasión por los instrumentos de cuerda desde que tenía 16 años. Siempre me encontrarás tocando alguna pieza de Paganini.”</i>
                </div>
            </div>

            <Link className='link' to='/articulos'>Go back</Link>
        </div>
    )
}
