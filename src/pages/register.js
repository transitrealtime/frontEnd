import React, {Component} from 'react';
import {registerUserThunk} from '../store/utilities/auth';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            email: ""
        }
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        const user = ({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
       this.props.registerUserThunk(user, this.props.history);
    }

    render () {
        return (
            <div className="container">
            <div className="row">
              <div className="col s8 offset-s2">
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <h4>
                    <b>Register</b> below
                  </h4>
                  <p className="grey-text text-darken-1">
                    Already have an account? <Link to="/login">Log in</Link>
                  </p>
                </div>
                <form noValidate onSubmit={this.handleSubmit}>
                  <div className="input-field col s12">
                    <input
                      onChange={this.handleChange}
                    //   value={this.state.username}
                      id="username"
                      type="text"
                    />
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.handleChange}
                    //   value={this.state.email}
                      id="email"
                      type="email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.handleChange}
                    //   value={this.state.password}
                      id="password"
                      type="password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                    <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                      }}
                      type="submit"
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                      Sign up
                    </button>
                  
                </form>
              </div>
            </div>
          </div>
        )
    }
    
}

const mapState = state => ({
  auth: state.auth,
});

export default connect(
  mapState, {registerUserThunk})(withRouter(Register));
