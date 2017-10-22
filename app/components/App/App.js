import React, { Component } from 'react';
import MovieCatalog from '../MovieCatalog/MovieCatalog.js';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';




class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (

      <div className='grid-app'>

        <Route exact path='/signin'
          render={() =>
            <SignIn />}
        />
        <Route exact path='/signup'
          render={() =>
            <SignUp/>}
        />
        <Route path='/'
          render={() =>
            <MovieCatalog />}
        />
        <Route path='/favorites'
          render={() =>
            <MovieCatalog />}
        />

        </div>

    )
  }
}

export default withRouter(App);
