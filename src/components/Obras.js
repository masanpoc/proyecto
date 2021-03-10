import React, { useState, useEffect } from 'react';
import {Obra} from './Obras/Obra';
import './Obras/Obra.scss';
import Vivaldi from './Obras/Images/Vivaldi.jpg';
import Bach from './Obras/Images/Bach.jpg';

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
        autor: 'bach',
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
    // let list = lista;

    // useState definitions
    const [list, setList] = useState(lista);
    const [listValue, setListValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [checkValue, setCheckValue] = useState(false);

    // useEffect definitions
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

    

    return (
        <div className='wrapper'>
            <div className='introduction'>
                aqui explciar que se toca de todos generos y epocas etc
            </div>

            <div className='filtros'>
                <label><h4>Encontrar obra:</h4></label>
                <input onChange={handleText} placeholder='escribe un autor, título...' />
                {/* <h4>Filtros:</h4> */}
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
                <label htmlFor="playable"><h4>Pista disponible para escuchar</h4></label>
                <input type="checkbox" id="playable" name="playable" onChange={handleCheck} ></input>
                {/* <label>
                    <h5>Autor</h5>
                    <select value={listValue2} onChange={handleChange2}>
                        <option value='' >Todos</option>
                        <option value='Vivaldi'>Vivaldi</option>
                        <option value='Haendel' >Haendel</option>
                        <option value='Bach' >Bach</option>
                        <option value='Mozart' >Mozart</option>
                        <option value='??' >Españoles</option>
                    </select>
                </label> */}
            </div>

            <div className='lista' style={{'minHeight': '100vh'}}>
                {list.map((el, i) => (
                    <Obra key={el.titulo} obra={el} />
                ))}
            </div>

            <div className='scrolling'>Cargar a medida que se baja más</div>
        </div>
        
    )
}
