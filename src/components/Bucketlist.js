import React, { Component } from 'react';
import axios from 'axios';
import ROOT_URL from './constants';
import UpdateForm from './UpdateForm';

class Bucketlist extends Component {
    updateBucketlist(e) {
        e.preventDefault();
        return (
            <UpdateForm bucketlist={this.props.details} />
        )

    }

    deleteBucketlist(e) {
        e.preventDefault();
        var bucketlist_id = this.props.details.id;
        alert("Confirm delete " + this.props.details.name)
        axios({
            method: 'delete',
            url: ROOT_URL + '/api/v1/bucketlists/' + bucketlist_id,
            headers: {
                "Authorization": `JWT ${window.sessionStorage.accessToken}`,
            }
        }).then(response => {
            window.location.reload();
        }).catch(error => {
            return error;
        });
    }
    render() {
        let details = this.props.details;
        return (
            <div className="updateBucketlist">
                <li>
                    <span>{details.name} - {details.description}</span>
                    <button className="waves-effect waves-light btn update_btns" onClick={this.updateBucketlist.bind(this)}> Update </button>
                    <button className="waves-effect waves-light btn update_btns" onClick={this.deleteBucketlist.bind(this)}> Delete </button>
                </li>
            </div>
        );
    }
}

export default Bucketlist;