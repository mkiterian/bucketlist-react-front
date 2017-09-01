import React, { Component } from 'react';
import axios from 'axios';
import ROOT_URL from './constants';

class CreateBucketlist extends Component {
    createBucketlistAPI() {
        var name = this.refs.name.value;
        var description = this.refs.description.value;
        var payload = { "name": name, "description": description };

        axios({
            method: 'post',
            url: ROOT_URL + '/api/v1/bucketlists',
            data: payload,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `JWT ${window.sessionStorage.accessToken}`
            }
        }).then(function (response) {
            window.location.reload();
        }.bind(this));
    }

    createBucketlist(e) {
        e.preventDefault();
        var bucketlist = {
            name: this.refs.name.value,
            description: this.refs.description.value
        }
        this.props.addBucketlist(bucketlist);
        this.createBucketlistAPI();
        this.refs.createBucketlistForm.reset();
    }

    render() {
        return (
            <div id="btn_add_bckt" class="modal">
            <form onSubmit={this.createBucketlist.bind(this)} className="create_bucketlist" ref="createBucketlistForm" method="POST">
                <p>This is the Create Bucketlist Form</p>
                <input type="text" placeholder="name" ref="name" /><br />
                <input type="text" placeholder="description" ref="description" /><br />
                <button type="Submit" className="btn offset-m3 blue-grey lighten-1"> Add </button>
            </form>
            </div>
        );
    }
}

export default CreateBucketlist;