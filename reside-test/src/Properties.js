import React, { Component } from 'react';
import './Properties.css';

class Properties extends Component {

    // constructor(props) {
    //     super(props);
    // }

    // loadHomes() {
    //     fetch('https://api.simplyrets.com/openhouses', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Basic ' + btoa('simplyrets:simplyrets')
    //         }
    //     })
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(jsonProperties => {
    //             console.log('OPEN HOUSES:', jsonProperties);
    //             this.setState({ openhouses: jsonProperties, listings: jsonProperties[0].listing });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    // componentDidMount() {
    //     fetch('https://api.simplyrets.com/openhouses', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Basic ' + btoa('simplyrets:simplyrets')
    //         }
    //     })
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(jsonProperties => {
    //             console.log('OPEN HOUSES:', jsonProperties);
    //             this.setState({ openhouses: jsonProperties, listings: jsonProperties[0].listing });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }
    

    // getProperties = () => {

    //     fetch('https://api.simplyrets.com/openhouses', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Basic ' + btoa('simplyrets:simplyrets')
    //         }
    //     })
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (jsonProperties) {
    //             console.log(jsonProperties);
    //             this.setState({ properties: jsonProperties })
    //         });
    // }

    render() {
        return (
            <li className="a-listing">
                <img src={`${this.props.details.listing.photos[0]}`} />
                <p>Bedrooms: {this.props.details.listing.property.bedrooms}</p>
                <p>Full Baths: {this.props.details.listing.property.bathsFull}</p>
                <p>Half Baths: {this.props.details.listing.property.bathsHalf}</p>
                <p>MLS ID: {this.props.details.listing.mlsId}</p>
                <p>List Date: {this.props.details.listing.listDate}</p>
                <p>List Price: {this.props.details.listPrice}</p>
            </li>
        );
    }
}

export default Properties;
