import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './contexts/AuthContext';

import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';

function CustomRoute({ isPrivate, ...rest }) {

  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Home} />
      <CustomRoute isPrivate exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}