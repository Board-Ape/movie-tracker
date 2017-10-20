import React, { Component } from 'react';
import { AddUser } from '../../actions';
import { connect } from 'react-redux';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      email: ''
    }
  }

  handleChange(key, e) {
    this.setState({ [key]: e.target.value })
  }

  render() {
    return (
      <div>
        <input placeholder='name'
          value={this.state.name}
          onChange={(e) => this.handleChange('name', e)} />
        <input placeholder='password'
          value={this.state.password}
          onChange={(e) => this.handleChange('password', e)} />
        <input placeholder='email'
          value={this.state.email}
          onChange={(e) => this.handleChange('email', e)} />  
        <button type='Submit'
          onClick={(e) => {
            e.preventDefault()
            this.props.AddUser(this.state.name, this.state.password, this.state.email);
          }}>
          Submit
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddUser: (name, password, email) => dispatch(AddUser(name, password, email))
  };
};


export default connect(null, mapDispatchToProps)(SignUp);

