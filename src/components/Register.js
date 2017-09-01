import React, { Component } from 'react';
import axios from 'axios';
import NavBarOut from './NavBarOut';
import ROOT_URL from './constants';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            validation_errors: []
        }
    }


    signupUser(e) {
        e.preventDefault();
        var username = this.refs.username.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var confirm_password = this.refs.confirm_password.value;

        var payload = {
            "username": username,
            "email": email,
            "password": password,
            "confirm_password": confirm_password
        };

        axios({
            method: 'post',
            url: ROOT_URL + '/api/v1/auth/register',
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            this.props.history.push('/login');
        }.bind(this));
        
    }

    render() {
        return (
            <div className="Register">
                <NavBarOut />
                <div className="row">

                    <form className="card col s12 m6" id="register-form" onSubmit={this.signupUser.bind(this)}>
                        <p className="center-align blue-grey-text darken-3">Register</p>
                        <div className="row">
                            <input className=" input-field col s12 validate" type="text" placeholder="username" ref="username" required />
                        </div>
                        <div className="row">
                            <input className=" input-field col s12 validate" type="email" placeholder="email" ref="email" required />
                        </div>
                        <div className="row">
                            <input className=" input-field col s12 validate" type="password" placeholder="password" ref="password" required />
                        </div>
                        <div className="row">
                            <input className=" input-field col s12 validate" type="password" placeholder="password" ref="confirm_password" required />
                        </div>
                        <div className="row">
                            <div className="row center-btn center-align"><button className="btn offset-m3 blue-grey lighten-1 ">Register</button>
                            </div>
                        </div>
                        <div className="message">
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;