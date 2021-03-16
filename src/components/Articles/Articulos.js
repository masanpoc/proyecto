import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation, withRouter } from 'react-router-dom';
import './Articulos.scss';
import { Articulo1 } from './Lista/Articulo1';
import { Lista } from './Lista';

function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

export const Articulos = () => {

    return (
        <Router>
            <div>
            <ScrollToTop>
            <Switch>
                <Route path='/articulos' exact component={Lista} />
                <Route path='/articulos/1' component={Articulo1} />
                <Route path="/articulos/*">
                    <Redirect to="/articulos" />
                </Route>
            </Switch>
            </ScrollToTop>
            </div>
        </Router>
    )
}
