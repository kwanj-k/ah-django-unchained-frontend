import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar/index';
import SignupPage from '../pages/SignupPage';

const Routes = () => {
  return (
    <BrowserRouter>
    <div>
    <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route signup path='/signup' component={SignupPage} />
      </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Routes;