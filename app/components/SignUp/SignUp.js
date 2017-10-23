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
    };
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  // This is how we set localStorage
  // updateLocalStorage() {
  //    localStorage.setItem('user', JSON.stringify(this.state))
  //  }


  // handleClick(email) {
  //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*
  //   (\.\w{2,3})+$/.test(myForm.emailAddr.value))
  //   {
  //     return (true)
  //   }
  //     alert ("Invalid email address: Please Enter A Valid E-mail")
  //     return (false)
  // }

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
              // this.updateLocalStorage()
              // this.handleClick(this.state.email)
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
