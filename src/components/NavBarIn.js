import React, { Component } from 'react';

class NavBarIn extends Component {
    endSession(e){
        window.sessionStorage.accessToken = "";
        window.location.replace('/');
    }
    render() {
        return (
            <nav className="blue-grey lighten-1">
                <div className="nav-wrapper ">
                    <ul id="nav-mobile" className="right hide-on-med-and-down #78909c ">
                        <li><a className="waves-effect waves-light btn" onClick={this.endSession}>Logout</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBarIn;