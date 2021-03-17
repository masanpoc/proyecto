import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

export const Articulo2 = () => {
    return (
        <div style={{'minHeight': '100vh'}}>
            articulo 2
            <Link className='link' to='/articulos'>Go back</Link>
        </div>
    )
}