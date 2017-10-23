import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showFavorites, userSignOut } from '../../actions';
import { push } from 'react-router-redux';
import './Header';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div className='header'>
      <h1><Link to='/'
        onClick={() => {
          props.showFavorites(false);
          props.changeRoute('/');
        }}
      >Movie Tracker</Link></h1>
      {
        !props.user.name &&
        <h2><Link to='/signin'>Sign-In</Link></h2>
      }
      {
        props.user.name && 
        <div>
          <h2>Welcome, {props.user.name}</h2> 
          <h5><Link to='/'
            onClick={() => {
              props.userSignOut();
              props.changeRoute('/');
            }}
          >log out</Link></h5>
        </div>
      }
      <h2><Link to='/favorites'
        onClick={() => {
          props.showFavorites(true);
          props.changeRoute('/favorites');
        }}
      >Favorites: {props.favorites.length}</Link></h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shouldShowFavorites: state.shouldShowFavorites,
    user: state.user,
    favorites: state.favorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFavorites: (bool) => {
      dispatch(showFavorites(bool));
    },
    changeRoute: (url) => {
      dispatch(push(url));
    },
    userSignOut: () => {
      dispatch(userSignOut());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  propsObj: PropTypes.object,
  props: PropTypes.shape({
    showFavorites: PropTypes.object,
    changeRoute: PropTypes.func,
    user: PropTypes.object,
    name: PropTypes.object,
    userSignOut: PropTypes.func
  })
};
