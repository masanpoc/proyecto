import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

export const Articulo4 = () => {
    return (
        <div style={{'minHeight': '100vh'}}>
            articulo 4
            <Link className='link' to='/articulos'>Go back</Link>
        </div>
    )
}