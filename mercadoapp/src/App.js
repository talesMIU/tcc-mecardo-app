import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { StylesProvider } from '@material-ui/core';

import Home from './components/Home';
import Pagamento from './components/Pagamento';
console.log('funcionou');
export default () => {
    return ( 
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/carrinho" component={Pagamento} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
}