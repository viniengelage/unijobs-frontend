import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Product from '../pages/Product';
import Catalog from '../pages/Catalog';
import RegisterProduct from '../pages/RegisterProduct';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/item/:id+" component={Product} />
    <Route path="/catalog/:page+" component={Catalog} />
    <Route path="/categories/:category+" component={Catalog} />
    <Route path="/register-products" component={RegisterProduct} />
  </Switch>
);

export default Routes;
