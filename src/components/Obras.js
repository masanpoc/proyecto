import React, { useState, useEffect } from 'react';
import {Obra} from './Obras/Obra';
import './Obras/Obra.scss';
import Vivaldi from './Obras/Images/Vivaldi.jpg';
import Bach from './Obras/Images/Bach.jpg';
import {Pagination} from './Obras/Pagination';

const lista = [
    {
        titulo: 'Beatus Vir',
        autor: 'Vivaldi',
        url: Vivaldi,
        genero: 'Barroco',
        play: true
    },
    {
        titulo: 'Gloria',
        autor: 'Vivaldi',
        url: Vivaldi,
        genero: 'Barroco',
        play: true
    },
    {
        titulo: 'Concierto en Sol Mayor op.3 no. 3 RV 310 para violín y orquesta',
        autor: 'Vivaldi',
        url: Vivaldi,
        genero: 'Barroco',
        play: true
    },
    {
        titulo: 'Prueba filtro',
        autor: 'Bach',
        url: Bach,
        genero: 'Clasicismo',
        play: false
    },
    {
        titulo: 'La Primavera (I. Allegro)',
        autor: 'Vivaldi',
        url: Vivaldi,
        genero: 'Barroco',
        play: true
    }
];

export const Obras = () => {

    // constant variables

    // useState definitions
    const [list, setList] = useState(lista);
    const [listValue, setListValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [checkValue, setCheckValue] = useState(false);
    const [orderValue, setOrderValue] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [songsPerPage] = useState(3);

    
    // get Current Songs
    const indexOfLastSong = currentPage*songsPerPage;
    const indexOfFirstSong = indexOfLastSong-songsPerPage;
    const currentSongs = list.slice(indexOfFirstSong, indexOfLastSong);


    // otra opción crear componente global que tome currentsongs como argumento
    // useEffect definitions

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

    // order function
    const sort = (toSort) => {
        setList(list.sort((a, b) => (a[toSort] > b[toSort]) 
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
        console.log('sorted', list);
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

    
    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    return (
        <div className='wrapper'>
            <div className='introduction'>
                aqui explciar que se toca de todos generos y epocas etc
            </div>

            <Pagination songsPerPage={songsPerPage}
                totalSongs={list.length}
                paginate={paginate}
             />

            

            <div className='filtros'>
                <label><h4>Encontrar obra:</h4></label>
                <input onChange={handleText} placeholder='escribe un autor, título...' />
                <label>
                    <h5>Época</h5>
                    <select value={listValue} onChange={handleChange}>
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

                <label>
                    <h5>Ordenar</h5>
                    <select value={orderValue} onChange={handleOrder}>
                        <option value=''>Por época</option>
                        <option value='titulo' >Por título</option>
                        <option value='autor' >Por autor</option>
                    </select>
                </label>

                <label htmlFor="playable"><h4>Pista disponible para escuchar</h4></label>
                <input type="checkbox" id="playable" name="playable" onChange={handleCheck} ></input>
            </div>

            <div className='lista' style={{'minHeight': '100vh'}}>
                {currentSongs.map((el, i) => (
                    <Obra key={el.titulo} obra={el} />
                ))}
            </div>
        </div>
        
    )
}
