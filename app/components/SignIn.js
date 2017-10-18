import React, {Component} from 'react';
import { userSignIn } from '../actions';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange(key, e) {
    this.setState({[key]: e.target.value })
  }

  render() {
    return(
      <div>
        <input placeholder='username'
                value={this.state.username}
                onChange={(e) => this.handleChange('username', e)} />
        <input placeholder='password'
                value={this.state.password}
                onChange={(e) => this.handleChange('password', e)} />
        <button type='Submit'
                onClick={(e) => {
                  e.preventDefault()
                  userSignIn(this.state.username, this.state.password);
                }}>
          Submit
        </button>
      </div>
    )
  }
}

export default SignIn;
