import React, { Component } from 'react';
import axios from 'axios';
import Bucketlist from './Bucketlist';
import { Link } from 'react-router-dom';
import CreateBucketlist from './CreateBucketlist';
import AddBucketlistButton from './AddBucketlistButton';
import NavBarIn from './NavBarIn';
import ROOT_URL from './constants';

class Bucketlists extends Component {
    constructor() {
        super();
        this.state = {
            bucketlists: [],
            selected_bucketlist: {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.getBucketlistsAPI();
    }

    getBucketlistsAPI() {
        var bucketlists = {};
        axios({
            method: 'get',
            url: ROOT_URL + '/api/v1/bucketlists',
            headers: {
                "Authorization": `JWT ${window.sessionStorage.accessToken}`,
            }
        }).then(response => {
            bucketlists = response.data.bucketlists;
            this.setState({
                bucketlists: bucketlists,
            })
        }).catch(error => {
            window.location.replace('/');
            return error;
        });

    }

    handleChange(e){
        axios({
            method: 'get',
            url: ROOT_URL + '/api/v1/bucketlists?q=' + e.target.value,
            headers: {
                "Authorization": `JWT ${window.sessionStorage.accessToken}`,
            }
        }).then(response => {
            let bucketlists = response.data.bucketlists;
            this.setState({
                bucketlists: bucketlists,
            })
        }).catch(error => {
            window.location.replace('/');
            return error;
        });
        // this.setState({selected_bucketlist: e.target.value});
    }

    handleFocus(e){
        this.refs.search.value = "";
    }

    render() {
        const bucketlists = this.state.bucketlists;
        const bucketlists_list = bucketlists.map((bucketlist, index) => (

            <div class="collection center-align" key={bucketlist.id}>
                <Link to="/" className="collection-item"><Bucketlist history={this.props.history} details={bucketlist} /></Link>
            </div>)

        );
        return (

            <div className="Bucketlists">
                <NavBarIn />
                <h3 className="center-align">My Bucketlists</h3>

                <div id="add_bucketlist_section">
                    <AddBucketlistButton />
                    <h6 className="blue-grey-text darken-3">New Bucket List</h6>
                    
                </div>

                <CreateBucketlist history={this.props.history} addBucketlist={this.props.addBucketlist.bind(this)} />
                <input id="search" type="search" className="right-align teal lighten-2 teal-text text-lighten-5" ref="search" 
                defaultValue="Search" required onFocus={this.handleFocus.bind(this)} onChange={this.handleChange.bind(this)}/>
                <ul className="collection">
                    {bucketlists_list}
                </ul>

            </div>
        )
    }
}

export default Bucketlists;