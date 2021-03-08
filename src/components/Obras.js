import React, { useState, useEffect } from 'react';
import {Obra} from './Obras/Obra';
import './Obras/Obra.scss';

const lista = [
    {
        titulo: 'Beatus Vir',
        autor: 'Vivaldi',
        url: '',
        genero: 'Barroco'
    },
    {
        titulo: 'Gloria',
        autor: 'Vivaldi',
        url: '',
        genero: 'Barroco'
    },
    {
        titulo: 'Concierto en Sol Mayor op.3 no. 3 RV 310 para violín y orquesta',
        autor: 'Vivaldi',
        url: '',
        genero: 'Barroco'
    },
    {
        titulo: 'La Primavera (I. Allegro)',
        autor: 'Vivaldi',
        url: '',
        genero: 'Barroco'
    },
    {
        titulo: 'Prueba filtro',
        autor: 'haydn',
        url: '',
        genero: 'Clasicismo'
    },
];

export const Obras = () => {

    // constant variables
    // let list = lista;

    // useState definitions
    const [list, setList] = useState(lista);
    const [listValue, setListValue] = useState('');
    const [listValue2, setListValue2] = useState('');
    const [searchValue, setSearchValue] = useState('');

    // useEffect definitions
    useEffect(() => {
        filterList()
        console.log(listValue)
        console.log(list)
    }, [listValue])

    useEffect(() => {
        filterSearch()
        console.log(list)
    }, [searchValue])

    // functions
    const handleChange = (e) => {
        setListValue(e.target.value);
    }

    // const handleChange2 = (e) => {
    //     setListValue(e.target.value);
    // }

    const filterList = () => {
        if(listValue!=='') {
            setList(lista.filter(el => el.genero === listValue));
        } else {
            setList(lista)
        }
    }

    const handleText = (e) => {
        setSearchValue(e.target.value);
    }

    const filterSearch = () => {
        if(listValue==='') {
            setList(lista.filter(el => el.titulo.toLowerCase().includes(searchValue.toLowerCase()) || el.autor.toLowerCase().includes(searchValue.toLowerCase())));
        }
        else {
            setList(lista.filter(el => el.genero === listValue).filter(el => el.titulo.toLowerCase().includes(searchValue.toLowerCase()) || el.autor.toLowerCase().includes(searchValue.toLowerCase())));
        }
    }

    return (
        <div>
            <div className='filtros'>
            
            <h4>Encontrar obra:</h4>
            <input onChange={handleText} placeholder='escribe un autor, título...' />
            {/* <h4>Filtros:</h4> */}
            <label>
                <h5>Época</h5>
                <select value={listValue} onChange={handleChange}>
                    <option selected value='' ></option>
                    <option value='Barroco'>Barroco</option>
                    <option value='Clasicismo' >Clasicismo</option>
                    <option value='Cubanas' >Cubanas</option>
                    <option value='Tradicionales' >Tradicionales</option>
                    <option value='Zarzuela' >Zarzuela</option>
                    <option value='Navidad' >Navidad</option>
                    <option value='Cine' >Películas y Musicales</option>
                </select>
            </label>
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
