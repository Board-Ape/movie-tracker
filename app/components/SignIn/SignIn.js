import React, {Component} from 'react';
import { fetchUserSigningIn } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';



class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(key, e) {
    this.setState({[key]: e.target.value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='signin-form-header'>
          User Sign In
        </h2>
        <div className='input-container'>
          <input placeholder='email'
            value={this.state.email}
            onChange={(e) => this.handleChange('email', e)} />
          <input placeholder='password'
            value={this.state.password}
            onChange={(e) => this.handleChange('password', e)} />
          <div className='sign-in-button'><Link to='/'
            onClick={() => {
              this.props.changeRoute('/');
              this.props.fetchUserSigningIn(this.state.email, this.state.password);
            }}>Submit
          </Link></div>
        </div>
        <h2><Link to='/signup'>Sign-Up</Link></h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserSigningIn: (email, password) => {
      dispatch(fetchUserSigningIn(email, password));
    },
    changeRoute: (url) => {
      dispatch(push(url));
    }
  };
};


export default connect(null, mapDispatchToProps)(SignIn);

<div type='Submit'
  onClick={(event) => {
    event.preventDefault();
    this.props.changeRoute('/');
    this.props.fetchUserSigningIn(this.state.email, this.state.password);
  }}>
  Submit
</div>;