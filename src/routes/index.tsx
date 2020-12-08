import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Product from '../pages/Product';
import Catalog from '../pages/Catalog';
import RegisterProduct from '../pages/RegisterProduct';
import RegisterUser from '../pages/RegisterUser';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import PrivateRoutes from './PrivateRoutes';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Who from '../pages/Who';
import SupportAndContact from '../pages/SupportAndContact';
import HowItWorks from '../pages/HowItWorks';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/item/:id+" component={Product} />
    <Route path="/catalog/:page+" component={Catalog} />
    <Route path="/categories/:itemType+/:page+" component={Catalog} />
    <Route
      path="/categories/:itemType+/:categorie+/:page+"
      component={Catalog}
    />
    <Route path="/registeruser" component={RegisterUser} />
    <Route path="/login" component={Login} />
    <PrivateRoutes path="/register" component={RegisterProduct} />
    <PrivateRoutes path="/profile" component={Profile} />
    <Route path="/forgot" component={ForgotPassword} />
    <Route path="/resetpassword" component={ResetPassword} />
    <Route path="/profile" component={Profile} />
    <Route path="/quem-somos" component={Who} />
    <Route path="/ajuda-e-contato" component={SupportAndContact} />
    <Route path="/como-funciona-a-unijobs" component={HowItWorks} />
  </Switch>
);

export default Routes;
