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

  handleChange(key, event) {
    this.setState({[key]: event.target.value });
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
            onChange={(event) => this.handleChange('email', event)} />
          <input placeholder='password'
            value={this.state.password}
            onChange={(event) => this.handleChange('password', event)} />
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
