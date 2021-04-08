import React from 'react';
import './Conocenos/Conocenos.scss';
import obj from './images/learn.jpg';
import directora from './images/director.jpg';
import intro from './images/intro.jpg';

export const Conocenos = () => {
    return (
        <div className='conocenos' style={{'minHeight': '100vh'}}>
            <div className='c-intro'> 
                <h1 className='c-title'>La Asociación</h1>
                <div className='c-sections'>
                    <span className='c-element'>Objetivos</span>
                    <span className='c-element'>-</span>
                    <span className='c-element'>Equipo</span>
                    <span className='c-element'>-</span>
                    <span className='c-element'>Actividades</span>
                </div>
            </div>
            <div className='conocenos-wrapper'>
                <div className='c-objetivos'>
                    <h2 className='c-header'>Objetivos de la Asociación</h2>
                    <div className='content'>
                        <p className='p-content'>
                            Dar a conocer la música, fomentar la formación de los jóvenes en música clásica, ... 
                        </p>
                    </div>
                    <img className='img' alt='img-objetivos' src={obj} />
                    <div className='content'>
                        <p className='p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh viverra tempus gravida euismod et massa imperdiet at. Rutrum aliquet id quam maecenas urna nunc semper. Lacus morbi nibh eu placerat quis habitasse quam pellentesque </p>
                        <p className='p-content'>accumsan. Posuere ut diam arcu neque accumsan nisi. Amet duis feugiat id massa. Diam risus habitasse dis donec ac quam amet. Ultrices ut amet nec, et mauris. Donec sapien ut odio malesuada risus. </p>
                        <p className='p-content'>Ultricies ultrices nunc dignissim pretium, adipiscing dui. <br />
                                Sapien tellus diam adipiscing ut mattis. Sapien egestas lobortis pellentesque.
                        </p>
                    </div>
                    <img className='img' alt='img-objetivos' src={obj}></img>
                    <div className='content'>
                        <p className='p-content'>Posuere ut diam arcu neque accumsan nisi. Amet duis feugiat id massa. Diam risus habitasse dis donec ac quam amet. Ultrices ut amet nec, et mauris. Donec sapien ut odio malesuada risus. </p>
                        <p className='p-content'>Ultricies ultrices nunc dignissim pretium, adipiscing dui. <br />
                                Sapien tellus diam adipiscing ut mattis. Sapien egestas lobortis pellentesque.
                        </p>
                        <p className='p-content'>Accumsan. Posuere ut diam arcu neque accumsan nisi. Amet duis feugiat id massa. Diam risus habitasse dis donec ac quam amet. Ultrices ut amet nec, et mauris. Donec sapien ut odio malesuada risus. </p>
                    </div>
                </div>


                <div className='c-equipo'>
                    <h2 className='c-header'>Equipo</h2>
                    <div className='content'>
                        <p className='description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique cum lorem gravida velit magna etiam. 
                        </p>
                    </div>
                    <h3 className='c-subheading' >La directora</h3>
                    <div className='content'>
                        <p className='p-content'>
                            Posuere ut diam arcu neque accumsan nisi. Amet duis feugiat id massa. Diam risus habitasse dis donec ac quam amet. Ultrices ut amet nec, et mauris. Donec sapien ut odio malesuada risus. 
                        </p>
                    </div>
                    <img className='img-2' src={directora} alt='directora' />
                    <div className='content'>
                        <p className='p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh viverra tempus gravida euismod et massa imperdiet at. Rutrum aliquet id quam maecenas urna nunc semper. Lacus morbi nibh eu placerat quis habitasse quam pellentesque  </p>
                        <p className='p-content'>Ultricies ultrices nunc dignissim pretium, adipiscing dui. <br />
                                Sapien tellus diam adipiscing ut mattis. Sapien egestas lobortis pellentesque.
                        </p>
                    </div>
                    <h3 className='c-subheading' >Los músicos</h3>
                    <div className='content'>
                        <p className='p-content'>Ultricies ultrices nunc dignissim pretium, adipiscing dui. <br />
                                    Sapien tellus diam adipiscing ut mattis. Sapien egestas lobortis pellentesque.
                        </p>
                    </div>
                    <img className='img-2' alt='img-musicos' src={intro} />
                    <div className='content'>
                        <p className='p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh viverra tempus gravida euismod et massa imperdiet at. Rutrum aliquet id quam maecenas urna nunc semper. Lacus morbi nibh eu placerat quis habitasse quam pellentesque  </p>
                        <p className='p-content'>
                            Ultricies ultrices nunc dignissim pretium, adipiscing dui.
                        </p>
                        <p className='p-content'>Si estás interesado manda un correo al ejemplo@gmail.com (enlace) </p>
                    </div>
                </div>


                <div className='c-actividades'>
                    <h2 className='c-header'>Actividades</h2>
                    <div className='content'>
                        <p className='p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh viverra tempus gravida euismod et massa imperdiet at. Rutrum aliquet id quam maecenas urna nunc semper. Lacus morbi nibh eu placerat quis habitasse quam pellentesque  </p>
                        <p className='p-content'>Accumsan. Posuere ut diam arcu neque accumsan nisi. Amet duis feugiat id massa. Diam risus habitasse dis donec ac quam amet. Ultrices ut amet nec, et mauris. Donec sapien ut odio malesuada risus. </p>
                        <p className='p-content'>Ultricies ultrices nunc dignissim pretium, adipiscing dui. <br />
                                Sapien tellus diam adipiscing ut mattis. Sapien egestas lobortis pellentesque.
                        </p>
                    </div>
                    <img className='img' alt='img-actividad-1' src={obj} ></img>
                    <div className='content'>
                        <p className='p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio quis enim vestibulum velit, nec. Dui quis cras condimentum urna turpis a. Tincidunt cursus mauris diam eu tortor. Malesuada tempor consectetur urna, eu urna, consequat mi, pellentesque habitant. Iaculis </p>
                        <p className='p-content'> Tristique lobortis a sollicitudin cras. Ultrices ultrices sit in eleifend leo nulla augue. Non egestas sodales hac blandit orci duis et, neque mattis. Urna, at a placerat porta eleifend magna porttitor. Fames adipiscing facilisis molestie tempor mus morbi pulvinar porta. Magna orci, rutrum nibh vestibulum. Amet, arcu euismod faucibus viverra nunc aliquet. Posuere ut facilisi mi volutpat. </p>
                        <p className='p-content'>Faucibus ullamcorper turpis amet duis felis. Mi dictum volutpat, imperdiet turpis turpis pellentesque. Dui dolor mauris eu nulla. Egestas a ut leo eu tincidunt leo massa nisl. Volutpat pulvinar nec quam mi. Odio tortor morbi mattis vel augue amet </p>
                        <p className='p-content'>Augue cursus. Posuere turpis et habitant turpis odio mus augue nullam amet. Parturient tempor, lectus placerat scelerisque sollicitudin adipiscing eleifend. Ut ut sagittis adipiscing id orci volutpat platea lacus. Et, laoreet ipsum fermentum purus viverra auctor.  </p>
                    </div>
                    <img className='img' alt='img-actividad-2' src={directora} ></img>
                    <div className='content'>
                        <p className='p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus amet ornare et commodo. Proin at tellus posuere v </p>
                        <p className='p-content'> Convallis dictum. Tellus et, amet eros, amet morbi posuere enim, quis.Auctor enim cursus vel sociis ultricies magna libero eget. Commodo vitae sit leo pellentesque proin habitant. Elementum sed tincidunt curabitur. </p>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
