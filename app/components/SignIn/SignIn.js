import React, {Component} from 'react';
import { fetchUserSigningIn } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange(key, e) {
    this.setState({[key]: e.target.value })
  }

  render() {
    return(
      <div className='sign-in'>
        <h2 className='signin-form-header'>
          User Sign In
        </h2>
        <input placeholder='email'
                value={this.state.email}
                onChange={(e) => this.handleChange('email', e)} />
        <input placeholder='password'
                value={this.state.password}
                onChange={(e) => this.handleChange('password', e)} />
        <button type='Submit'
                onClick={(e) => {
                  e.preventDefault()
                  this.props.fetchUserSigningIn(this.state.email, this.state.password);
                }}>
          Submit
        </button>
        <h2><Link to='/signup'>Sign-Up</Link></h2>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserSigningIn: (email, password) => dispatch(fetchUserSigningIn(email, password))
  };
};


export default connect(null, mapDispatchToProps)(SignIn);
