import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';

import { CartContextProvider } from './contexts/cartContext';

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Switch>
          <Route path='/products' component={Products} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Router>
    </CartContextProvider>
  );
}

export default App;
