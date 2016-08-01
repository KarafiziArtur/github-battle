import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'

var routes = (
    <Router>
      <Route path="/" component={Main}>
        <Route path="/home" component={Home} />
      </Route>
    </Router>
);

export default routes;