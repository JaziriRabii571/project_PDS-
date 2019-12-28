import React, { Component } from 'react';
import Navbar from './navbar/navbar';
import Movie from './movies/movie';
import Ctontine from './ctontine/ctontine';
import Participants from './participants/participants';
import createuser from './user/createuser';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Createuser from './user/createuser';




class App extends Component {
  render() {
    return (

      <Router>

        <Navbar />
        
       
       
        <Switch>
          <Route path='/' exact >
            <Movie />
          </Route>
          <Route path='/tontine'>
            <Ctontine />
          </Route>
          <Route path='/participant'>
            <Participants />
          </Route>
          <Route path='/createuser'>
            <Createuser />
          </Route>
          <Route path='**'>
            <Redirect to='/' />
          </Route>

        </Switch>

      </Router>



    );
  }
}

export default App;
