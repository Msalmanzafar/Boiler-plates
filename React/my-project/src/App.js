import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import HOME from './component/home/index'
import LOGIN from './component/auth/login'
import history from './history/history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={HOME} />
          <Route path="/login" component={LOGIN} />
        </div>
      </Router>
    );
  }
}

export default App;

