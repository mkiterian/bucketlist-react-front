import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBarOut from './NavBarOut';
import ROOT_URL from './constants';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false
        }
    }

    loginUser(e) {
        e.preventDefault();
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        var payload = { "username": username, "password": password };
        axios({
            method: 'post',
            url: ROOT_URL + '/api/v1/auth/login',
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            window.sessionStorage.accessToken = response.data.access_token;
            this.props.history.push('/bucketlists');
        }.bind(this));


    }

    render() {
        return (
            <div className="Login">
                <NavBarOut />
                <div className="row center-align">

                    <form className="card col s12 m6" id="login-form" onSubmit={this.loginUser.bind(this)}>
                        <p className="center-align blue-grey-text darken-3">Login</p>
                        <div className="row">
                            <input className=" input-field col s12 validate" type="text" placeholder="username" ref="username" required />
                        </div>
                        <div className="row">
                            <input className=" input-field col s12 validate" type="password" placeholder="password" ref="password" required />
                        </div>
                        <div className="row">
                            <div className="row center-btn center-align"><button className="btn offset-m3 blue-grey lighten-1 ">Login</button>
                            </div>
                        </div>

                        <div className="center-align">Don't have a account?<Link to="/register"> Register</Link></div>
                        <div className="message">
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;