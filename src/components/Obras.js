import React, { useState, useEffect, useRef } from 'react';
import {Obra} from './Obras/Obra';
import { PlayingProvider } from './Obras/PlayingContext';
import './Obras/Obra.scss';
import gsap from 'gsap';
import {Pagination} from './Obras/Pagination';
import Vivaldi from './Obras/Images/Vivaldi.jpg';
import Bach from './Obras/Images/Bach.jpg';
import Haendel from './Obras/Images/Haendel.jpg';
import Albinoni from './Obras/Images/Albinoni.jpg';
import Barroco from './Obras/Images/Barroco.jpg';
import Cervantes from './Obras/Images/Cervantes.jpg';
import Charpentier from './Obras/Images/Charpentier.jpg';
import Corelli from './Obras/Images/Corelli.jpg';
import Herbeck from './Obras/Images/Herbeck.jpg';
import Lecuona from './Obras/Images/Lecuona.jpg';
import Lully from './Obras/Images/Lully.jpg';
import Mozart from './Obras/Images/Mozart.jpg';
import Piñeiro from './Obras/Images/Pineiro.jpg';
import Roig from './Obras/Images/Roig.jpg';
import Tradicional from './Obras/Images/Tradicional.jpg';
import Morricone from './Obras/Images/Morricone.jpg';
import Rodgers from './Obras/Images/Rodgers.jpg';
import Saens from './Obras/Images/Saens.jpg';
import Berlin from './Obras/Images/Berlin.jpg';
import Blanck from './Obras/Images/Blanck.jpg';
import Berlioz from './Obras/Images/Berlioz.jpg';
import Spilman from './Obras/Images/Spilman.jpg';
import Navidad from './Obras/Images/Christmas.jpg';
import Adam from './Obras/Images/Adam.jpg';
import Breton from './Obras/Images/Breton.jpg';
import Barbieri from './Obras/Images/Barbieri.jpg';
import Vives from './Obras/Images/Vives.jpg';
import Guerrero from './Obras/Images/Guerrero.jpg';
import Alonso from './Obras/Images/Alonso.jpg';
import Torroba from './Obras/Images/Torroba.jpg';
import Serrano from './Obras/Images/Serrano.jpg';
import Penella from './Obras/Images/Penella.jpg';
import Chueca from './Obras/Images/Chueca.jpg';
import Valverde from './Obras/Images/Valverde.jpg';
import Chapi from './Obras/Images/Chapi.jpg';
import Purcell from './Obras/Images/Purcell.jpg';
import Pachelbel from './Obras/Images/Pachelbel.jpg';
import Capua from './Obras/Images/Capua.jpg';
import Gaos from './Obras/Images/Gaos.jpg';
import Brahms from './Obras/Images/Brahms.jpg';
import Otros from './Obras/Images/Otros.jpg';
import Cortona from './Obras/Images/Cortona.jpg';

import Gloria from './Obras/Sound/Gloria_Vivaldi.mp3';
import Badinerie from './Obras/Sound/Badinerie.mp3';
import Primavera from './Obras/Sound/Primavera_Allegro.mp3';
import Bist_du from './Obras/Sound/Bist_du_bei_mir.mp3';

const lista = [
    {
        titulo: 'Beatus Vir',
        autor: 'Vivaldi',
        url: Vivaldi,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Gloria',
        autor: 'Vivaldi',
        url: Vivaldi,
        genero: 'Barroco',
        play: true, 
        source: Gloria
    },
    {
        titulo: 'Concierto en Sol Mayor op.3 no. 3 RV 310 para violín y orquesta',
        autor: 'Vivaldi',
        url: Vivaldi,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'La Primavera (I. Allegro)',
        autor: 'Vivaldi',
        url: Vivaldi,
        genero: 'Barroco',
        play: true,
        source: Primavera
    },
    {
        titulo: 'Sinfonia (El Mesias)',
        autor: 'Haendel',
        url: Haendel,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Pifa (El Mesias)',
        autor: 'Haendel',
        url: Haendel,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'He shall feed his flock (El Mesias)',
        autor: 'Haendel',
        url: Haendel,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'How beautiful are the feet (El Mesias)',
        autor: 'Haendel',
        url: Haendel,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Concerto Grosso op.3 (1 mov.)',
        autor: 'Haendel',
        url: Haendel,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Sarabanda con variaciones',
        autor: 'Haendel',
        url: Haendel,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Julio César en Egipto: Finale',
        autor: 'Haendel',
        url: Haendel,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Rinaldo: Lascia ch\'io piangia',
        autor: 'Haendel',
        url: Haendel,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Serse: Largo, Ombra mai fu',
        autor: 'Haendel',
        url: Haendel,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Judas Macabeo: Canticorum Jubilo',
        autor: 'Haendel',
        url: Haendel,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Oda para el Cumpleaños de la Reina Anna: Duetto Kind Health descends',
        autor: 'Haendel',
        url: Haendel,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Benedicat Bovis',
        autor: 'Haendel',
        url: Haendel,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Gavotte',
        autor: 'Bach',
        url: Bach,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Et Misericordia (Magnificat)',
        autor: 'Bach',
        url: Bach,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Quia Respexit Humilitatem',
        autor: 'Bach',
        url: Bach,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Gloria sei dir gesungen (Cantata BWV 140)',
        autor: 'Bach',
        url: Bach,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Menuett y Badinerie',
        autor: 'Bach',
        url: Bach,
        genero: 'Barroco',
        play: true,
        source: Badinerie
    },
    {
        titulo: 'Bist du bei Mir',
        autor: 'Bach',
        url: Bach,
        genero: 'Barroco',
        play: true,
        source: Bist_du
    },
    {
        titulo: 'O Jesulein Süss BWV 493',
        autor: 'Bach',
        url: Bach,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Jesus Bleibet Meine Freude (Cantata BWV 147)',
        autor: 'Bach',
        url: Bach,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Concierto para dos violines en Re menor BWV 1043',
        autor: 'Bach',
        url: Bach,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Aria de la Suite no.3 BWV 1068',
        autor: 'Bach',
        url: Bach,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Te Deum',
        autor: 'Charpentier',
        url: Charpentier,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Adagio',
        autor: 'Albinoni',
        url: Albinoni,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Sonata op.1 no.10',
        autor: 'Corelli',
        url: Corelli,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Tres danzas (Dantz, Courant, Ballet)',
        autor: 'Peuerl',
        url: Barroco,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Tres piezas (Sinfonía, Ritornello, Menuett)',
        autor: 'Lully',
        url: Lully,
        genero: 'Barroco',
        play: false
    },
    {
        titulo: 'Ave Verum Corpus',
        autor: 'W.A. Mozart',
        url: Mozart,
        genero: 'Clasicismo',
        play: false
    },
    {
        titulo: 'Laudate dominum (Vesperae Solennes de Confessore)',
        autor: 'W.A. Mozart',
        url: Mozart,
        genero: 'Clasicismo',
        play: false
    },
    {
        titulo: 'Kyrie (Misa de la Coronación)',
        autor: 'W.A. Mozart',
        url: Mozart,
        genero: 'Clasicismo',
        play: false
    },
    {
        titulo: 'La ci darem la mano (Don Giovanni)',
        autor: 'W.A. Mozart',
        url: Mozart,
        genero: 'Clasicismo',
        play: false
    },
    {
        titulo: 'Los muñecos',
        autor: 'Ignacio Cervantes',
        url: Cervantes,
        genero: 'Cubanas',
        play: false
    },
    {
        titulo: 'La Camagüeyana',
        autor: 'Ignacio Cervantes',
        url: Cervantes,
        genero: 'Cubanas',
        play: false
    },
    {
        titulo: 'María la O',
        autor: 'Ernesto Lecuona',
        url: Lecuona,
        genero: 'Cubanas',
        play: false
    },
    {
        titulo: 'Aquella tarde',
        autor: 'Ernesto Lecuona',
        url: Lecuona,
        genero: 'Cubanas',
        play: false
    },
    {
        titulo: 'Las cuatro palomas',
        autor: 'Ignacio Piñeiro',
        url: Piñeiro,
        genero: 'Cubanas',
        play: false
    },
    {
        titulo: 'Ojos brujos',
        autor: 'Gonzalo Roig',
        url: Roig,
        genero: 'Cubanas',
        play: false
    },
    {
        titulo: 'What child is this',
        autor: 'trad. inglesa',
        url: Tradicional,
        genero: 'Tradicionales',
        play: false
    },
    {
        titulo: 'A la luz de la luna',
        autor: 'trad. española',
        url: Tradicional,
        genero: 'Tradicionales',
        play: false
    },
    {
        titulo: 'Gaudeamus Igitur',
        autor: 'trad.',
        url: Tradicional,
        genero: 'Tradicionales',
        play: false
    },
    {
        titulo: 'Danny boy',
        autor: 'trad. irlandesa',
        url: Tradicional,
        genero: 'Tradicionales',
        play: false
    },
    {
        titulo: 'Mi tío se figura (El rey que se rabió)',
        autor: 'R. Chapi',
        url: Chapi,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Chotis del Eliseo (La Gran Vía)',
        autor: 'Chueca y Valverde',
        url: Valverde,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Habanera (Don Gil de Alcalá)',
        autor: 'M. Penella',
        url: Penella,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Coro de Barquilleros (Agua, azucarillos y aguardiente)',
        autor: 'Chueca',
        url: Chueca,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Canción húngara (Alma de Dios)',
        autor: 'José Serrano',
        url: Serrano,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Chotis de La Chupalona',
        autor: 'F. Moreno Torroba',
        url: Torroba,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Pasacalle de La Calesera',
        autor: 'F. Alonso',
        url: Alonso,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Coro de espigadoras (La rosa del Azafrán)',
        autor: 'J. Guerrero',
        url: Guerrero,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Vidal y Coro de Vareadores (Luisa Fernanda)',
        autor: 'F. Moreno Torroba',
        url: Torroba,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Mazurka de las sombrillas (Luisa Fernanda)',
        autor: 'F. Moreno Torroba',
        url: Torroba,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Coro de Románticos (Doña Francisquita)',
        autor: 'A. Vives',
        url: Vives,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Dicen que en el Pardo (El Barberillo de Lavapiés)',
        autor: 'F.A. Barbieri',
        url: Barbieri,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Seguidilla de La verbena de la Paloma',
        autor: 'T. Bretón',
        url: Breton,
        genero: 'Zarzuela',
        play: false
    },
    {
        titulo: 'Cantique de Noel',
        autor: 'Adolphe Adam',
        url: Adam,
        genero: 'Navidad',
        play: false
    },
    {
        titulo: 'Deck the Hall',
        autor: 'trad. galesa',
        url: Navidad,
        genero: 'Navidad',
        play: false
    },
    {
        titulo: 'We wish you a merry christmas',
        autor: '',
        url: Navidad,
        genero: 'Navidad',
        play: false
    },
    {
        titulo: 'Pueri Concinite',
        autor: 'J.R.V. Herbeck',
        url: Herbeck,
        genero: 'Navidad',
        play: false
    },
    {
        titulo: 'En la más fría noche',
        autor: 'James E. Spilman',
        url: Spilman,
        genero: 'Navidad',
        play: false
    },
    {
        titulo: 'The sheperds farewell',
        autor: 'H. Berlioz',
        url: Berlioz,
        genero: 'Navidad',
        play: false
    },
    {
        titulo: 'Guíame a Belén',
        autor: 'Olga de Blanck',
        url: Blanck,
        genero: 'Navidad',
        play: false
    },
    {
        titulo: 'Noche de Paz',
        autor: '',
        url: Navidad,
        genero: 'Navidad',
        play: false
    },
    {
        titulo: 'White Christmas',
        autor: 'I. Berlin',
        url: Berlin,
        genero: 'Navidad',
        play: false
    },
    {
        titulo: 'Tollite Hostias (Oratorio de Navidad)',
        autor: 'C. Saint Säens',
        url: Saens,
        genero: 'Navidad',
        play: false
    },
    {
        titulo: 'Edelweiss (Sonrisas y lágrimas)',
        autor: 'R. Rodgers',
        url: Rodgers,
        genero: 'Peliculas y musicales',
        play: false
    },
    {
        titulo: 'Gabriel\'s Oboe (La Misión)',
        autor: 'E. Morricone',
        url: Morricone,
        genero: 'Peliculas y musicales',
        play: false
    },
    {
        titulo: 'Alta Trinità Beata',
        autor: 'Laudario di Cortona',
        url: Cortona,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Ave María',
        autor: 'Javier Busto',
        url: Otros,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Rosa de Abril',
        autor: 'Andrés Gaos',
        url: Gaos,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Fragen',
        autor: 'J. Brahms',
        url: Brahms,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Yesterday',
        autor: 'J. Lennon, P. McCartney',
        url: Otros,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'O Sole Mio',
        autor: 'E di Capua',
        url: Capua,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Tango to Evora',
        autor: 'Lorena McKennin',
        url: Otros,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Hasta mi final',
        autor: 'Il Divo',
        url: Otros,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Con te Partiro',
        autor: 'F. Sartori',
        url: Otros,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Pie Jesu',
        autor: 'A. Lloyd Webber',
        url: Otros,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Aria Vieni, Vieni o mio diletto',
        autor: 'Vivaldi',
        url: Vivaldi,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Canon en D',
        autor: 'J. Pachelbel',
        url: Pachelbel,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Cinema Paradiso',
        autor: 'E. Morricone',
        url: Morricone,
        genero: 'Otros',
        play: false
    },
    {
        titulo: '4 Danzas húngaras S.XVII (Intrada, Courant, Air, Solomon)',
        autor: '',
        url: Otros,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Dos sinfonías',
        autor: 'J. Staden',
        url: Otros,
        genero: 'Otros',
        play: false
    },
    {
        titulo: 'Fear no Danger (Dido y Eneas)',
        autor: 'H. Purcell',
        url: Purcell,
        genero: 'Otros',
        play: false
    },
];

export const Obras = () => {

    // constant variables
    // useRef definitions

    // useState definitions
    const [list, setList] = useState(lista);
    const [listValue, setListValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [checkValue, setCheckValue] = useState(false);
    const [orderValue, setOrderValue] = useState('');

    // current Number
    const [currentNumber, setCurrentNumber] = useState(1);

    const [currentPage, setCurrentPage] = useState(1);
    const [songsPerPage] = useState(12);

    const [filtering, setFiltering] = useState(false);

    // get Current Songs
    const indexOfLastSong = currentPage*songsPerPage;
    const indexOfFirstSong = indexOfLastSong-songsPerPage;
    const currentSongs = list.slice(indexOfFirstSong, indexOfLastSong);  

    useEffect(() => {
        order()
    }, [orderValue])

    useEffect(() => {
        filter()
    }, [listValue])

    useEffect(() => {
        filter()
    }, [searchValue])

    useEffect(() => {
        filter()
    }, [checkValue])

    // functions
    // order
    const handleOrder = (e) => {
        setOrderValue(e.target.value);
    }

    // filter: epoca
    const handleChange = (e) => {
        setListValue(e.target.value);
    }

    // filter: search by keyword
    const handleText = (e) => {
        setSearchValue(e.target.value);
    }

    // filter: playable
    const handleCheck = () => {
        setCheckValue(!checkValue);
    }

    const filter = () => {
         // solo por epoca
         if(searchValue==='') {
            if(listValue==='') {
                if(checkValue) {
                    setList(lista.filter(el => el.play === checkValue));
                } else {
                    setList(lista)
                }
            } else {
                if(checkValue) {
                    setList(lista.filter(el => el.play === checkValue).filter(el => el.genero === listValue));
                } else {
                    setList(lista.filter(el => el.genero === listValue));
                }
            }
        }
        // por epoca y por palabra clave
        else {
            if(listValue==='') {
                if(checkValue) {
                    setList(lista.filter(el => el.play === checkValue).filter(el => el.titulo.toLowerCase().includes(searchValue.toLowerCase()) || el.autor.toLowerCase().includes(searchValue.toLowerCase())));
                } else {
                    setList(lista.filter(el => el.titulo.toLowerCase().includes(searchValue.toLowerCase()) || el.autor.toLowerCase().includes(searchValue.toLowerCase())));
                }
            } else {
                if(checkValue) {
                    setList(lista.filter(el => el.play === checkValue).filter(el => el.genero === listValue).filter(el => el.titulo.toLowerCase().includes(searchValue.toLowerCase()) || el.autor.toLowerCase().includes(searchValue.toLowerCase())));
                } else {
                    setList(lista.filter(el => el.genero === listValue).filter(el => el.titulo.toLowerCase().includes(searchValue.toLowerCase()) || el.autor.toLowerCase().includes(searchValue.toLowerCase())));
                }               
            }
        }
    }
    
    // sorting is not changing any value!!! that's why it's not updating

    // order function
    const sort = (toSort) => {
        setList([...list].sort((a, b) => (a[toSort] > b[toSort]) 
            ? 1
            : (
                (b[toSort]>a[toSort]) 
                ? -1
                : 0
            ) ));
        lista.sort((a, b) => (a[toSort] > b[toSort]) 
            ? 1
            : (
                (b[toSort]>a[toSort]) 
                ? -1
                : 0
        ));
    }

    // scroll when paginating
    const scrollWindow = () => {
        

        const vh = (coef) => window.innerHeight * (coef/100);

        if(window.innerWidth<760) {
            window.scroll({
                top: vh(100),
                left: 0,
                behavior: 'smooth'
            });
        }
        else {
            window.scroll({
                top: vh(70),
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    // order list
    const order = () => {
        if(orderValue==='') {
            sort('genero');
        }
        else if(orderValue==='titulo') {
            sort('titulo');
        }
        else {
            sort('autor');  
        }
    }

    // update current page
    const updatingPage = (number) => {
        setCurrentNumber(number);
    }
    
    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        scrollWindow();
    }

 

    return (
        <div className='body-hidden'>

            <div className='introduction'>
                <h1 className='songs-header'>Biblioteca de obras</h1>
                <h3 className='songs-subtitle'>Encuentra aquí las piezas que hemos interpretado</h3>
                {/* <h6>Todas las piezas disponibles para escuchar están libres de copyright</h6> */}
            </div>

            <div className='wrapper'>   

                <div className={filtering ? 'none' : 'options'}>
                    <h4 className='songs-filtering'>Filtros</h4>
                    <svg className='sorting'
                    onClick={()=>setFiltering(!filtering)}
                    viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                    </svg>
                    
                </div>

                <div className={filtering ? 'filtros' : 'none'}>
                
                    <svg className={filtering ? 'closing' : 'none'}
                        onClick={()=>setFiltering(!filtering)}
                        viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                    <div className='finder'>
                        <label><h5 className='heading'>Encontrar obra:</h5></label>
                        <input className='searcher' onChange={handleText} placeholder='escribe un autor, título...' />
                    </div>

                    <label className='sorting'>
                        <h5 className='sorting-head'>Ordenar</h5>
                        <select className='sorting-option' value={orderValue} onChange={handleOrder}>
                            <option value=''>Por época</option>
                            <option value='titulo' >Por título</option>
                            <option value='autor' >Por autor</option>
                        </select>
                    </label>
                    
                    <label className='genre'>
                        <h5 className='genre-head'>Época</h5>
                        <select className='genre-option' value={listValue} onChange={handleChange}>
                            <option value='' ></option>
                            <option value='Barroco'>Barroco</option>
                            <option value='Clasicismo' >Clasicismo</option>
                            <option value='Cubanas' >Cubanas</option>
                            <option value='Tradicionales' >Tradicionales</option>
                            <option value='Zarzuela' >Zarzuela</option>
                            <option value='Navidad' >Navidad</option>
                            <option value='Cine' >Películas y Musicales</option>
                        </select>
                    </label>

                    

                    <div className='available'>
                        <label className='marker-info' htmlFor="playable"><h5>Pista disponible</h5></label>
                        <input className='playable' type="checkbox" id="playable" name="playable" onChange={handleCheck} ></input>
                    </div>
                    
                </div>

                <Pagination songsPerPage={songsPerPage}
                    totalSongs={list.length}
                    paginate={paginate} row={'center'} updatingPage={updatingPage} currentNumber={currentNumber}
                />

                <PlayingProvider>
                    <div className='lista' style={{'minHeight': '100vh'}}>
                        {currentSongs.map((el, i) => (
                            <Obra key={el.titulo} obra={el} />
                        ))}
                    </div>
                </PlayingProvider> 

                <Pagination songsPerPage={songsPerPage}
                    totalSongs={list.length}
                    paginate={paginate} row={'center-2'} updatingPage={updatingPage} currentNumber={currentNumber}
                />
            </div>
        </div>
        
    )
}
