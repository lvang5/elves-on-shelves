import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import Shelf from './components/Shelf/Shelf';
import AddForm from './components/AddForm/AddForm';
import Count from './components/Count/Count';

import './styles/main.css';

const App = () => (
  <div>
    
    <Router>
      <div>
        <Header title="Project Base" />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route
            path="/home"
            component={LoginPage}
          />
          <Route
            path="/register"
            component={RegisterPage}
          />
          <Route
            path="/user"
            component={UserPage}
          />
          <Route
            path="/info"
            component={InfoPage}
          />
          <Route 
          path="/shelf"
          component={Shelf}
          />
          <Route 
          path="/addForm"
          component={AddForm}
          />
          <Route
          path="/count"
          component={Count}
          />
          {/* OTHERWISE (no path!) */}
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
