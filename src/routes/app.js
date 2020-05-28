import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../views/Layout';
import Home from '../views/Home';
import Login from '../views/Login';
import Reg from '../views/Register';
import Dash from '../views/Dashboard';
import Graf from '../views/Graficos';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Reg} />
        <Route exact path='/dashboard' component={Dash} />
        <Route exact path='/graficos' component={Graf} />
      </Switch>
    </Layout>

  </BrowserRouter>
);

export default App;
