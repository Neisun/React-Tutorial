import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import HomePage from './routes/HomePage/HomePage'
import CheckPage from './routes/CheckPage/CheckPage'
import InstallPage from './routes/InstallPage/InstallPage'
import MaintainPage from './routes/MaintainPage/MaintainPage'
import MinePage from './routes/MinePage/MinePage'
import ServiceAddressPage from './routes/ServiceAddressPage/ServiceAddressPage'
import LoginPage from './routes/LoginPage/LoginPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/check" exact component={CheckPage} />
        <Route path="/install" exact component={InstallPage} />
        <Route path="/maintain" exact component={MaintainPage} />
        <Route path="/mine" exact component={MinePage} />
        <Route path="/serviceAddress" exact component={ServiceAddressPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
