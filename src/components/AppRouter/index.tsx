import React, { FC } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import * as Screens from '../../screens';

interface Props {
  Router: any;
}

const AppRouter: FC<Props> = ({ Router }) => (
  <Router>
    <Switch>
      <Route exact path="/" component={Screens.Home} />
      <Route exact path="/todo/:id" component={Screens.TodoItem} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
