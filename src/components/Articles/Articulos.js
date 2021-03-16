import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import './Articulos.scss';
import { Articulo1 } from './Lista/Articulo1';
import { Lista } from './Lista';

export const Articulos = () => {

    return (
        <Router>
            <Switch>
                <Route path='/articulos' exact component={Lista} />
                <Route path='/articulos/1' component={Articulo1} />
                <Route path="/articulos/*">
                    <Redirect to="/articulos" />
                </Route>
            </Switch>
        </Router>
    )
}
