import React, { Component } from 'react';
import { AddUser } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      email: ''
    };
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <div>
        <form className='signup-form'>
          <h2 className='signup-form-header'>
            Create New User
          </h2>
          <input placeholder='name'
            value={this.state.name}
            onChange={(event) => this.handleChange('name', event)} />
          <input placeholder='password'
            value={this.state.password}
            onChange={(event) => this.handleChange('password', event)} />
          <input placeholder='email'
            value={this.state.email}
            onChange={(event) => this.handleChange('email', event)} />
          <button type='Submit'
            onClick={(event) => {
              event.preventDefault();
              this.props.AddUser(this.state.name, this.state.password, this.state.email);
            }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddUser: (name, password, email) => dispatch(AddUser(name, password, email))
  };
};


export default connect(null, mapDispatchToProps)(SignUp);

SignUp.propTypes = {
  propsObj: PropTypes.object,
  props: PropTypes.shape({
    AddUser: PropTypes.func
  })
};
