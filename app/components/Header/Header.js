import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showFavorites } from '../../actions';
import { push } from 'react-router-redux';
import './Header';

const Header = (props) => {
// console.log('showFAV?: ', props.showFavorites()
  return (
    <div className='header'>
      <h1><Link to='/'
                onClick={() => {
                  props.showFavorites(false)
                  props.changeRoute('/')
                }}
                >Movie Tracker</Link></h1>
      <h2><Link to='/signin'>Sign-In</Link></h2>
      <h2><Link to='/favorites'
                onClick={() => {
                  props.showFavorites(true)
                  props.changeRoute('/favorites')
                }}
                >Favorites</Link></h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shouldShowFavorites: state.shouldShowFavorites
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    showFavorites: (bool) => {
      dispatch(showFavorites(bool))
    },
    changeRoute: (url) => {
          dispatch(push(url))
        },
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);


