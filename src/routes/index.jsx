import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Arquivados from '../Pages/Arquivados';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Arquivados} />
  </Switch>
);

export default Routes;
