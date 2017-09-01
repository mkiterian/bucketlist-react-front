import React, { Component } from 'react';

class AddBucketlistButton extends Component {
    render() {
        return (
            <a id="btn_add_bckt" href="#add_bckt_lst"
                className="btn-floating btn-large waves-effect waves-light blue-grey lighten-1 center">
                <i className="material-icons">add</i>
            </a>
        );
    }
}

export default AddBucketlistButton;