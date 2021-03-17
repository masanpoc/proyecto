import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation, withRouter } from 'react-router-dom';
import './Articulos.scss';
import { Articulo1 } from './Lista/Articulo1';
import { Articulo2 } from './Lista/Articulo2';
import { Articulo3 } from './Lista/Articulo3';
import { Articulo4 } from './Lista/Articulo4';
import { Lista } from './Lista';

function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        // console.log(window.innerWidth);
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
                    <Route path='/articulos/1'  component={Articulo1} />
                    <Route path='/articulos/2' component={Articulo2} />
                    <Route path='/articulos/3' component={Articulo3} />
                    <Route path='/articulos/4' component={Articulo4} />
                    <Route path="/articulos/*">
                        <Redirect to="/articulos" />
                    </Route>
                </Switch>
                </ScrollToTop>
            </div>
        </Router>
    )
}
