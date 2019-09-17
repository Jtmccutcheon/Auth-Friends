import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login'
import FriendsList from './components/FriendsList'

import PrivateRoute from './utils/PrivateRoute'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>app</h1>
      <Router>
        <Link to='/'>home</Link>
        <Link to='/login'>login</Link>
        <Link to='/friendslist'>friends list</Link>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/friendslist' component={FriendsList} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
