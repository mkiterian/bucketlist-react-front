import React, { Component } from 'react';

class UpdateForm extends Component {
    render() {
        return (
            <div id="btn_add_bckt" class="modal">
            <form onSubmit={this.createBucketlist.bind(this)} className="create_bucketlist" ref="createBucketlistForm" method="POST">
                <p>This is the Update Bucketlist Form</p>
                <input type="text" placeholder="name" ref="name" /><br />
                <input type="text" placeholder="description" ref="description" /><br />
                <button type="Submit" className="btn offset-m3 blue-grey lighten-1"> Add </button>
            </form>
            </div>
        );
    }
  }
  
  export default UpdateForm;