import React, { Component } from 'react';
import './Properties.css';

class Properties extends Component {
    constructor(props) {
        super(props);

        this.state = {properties: 'false'};
    }

    

    componentDidMount() {
        fetch('https://api.simplyrets.com/openhouses', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa('simplyrets:simplyrets')
            }
        })
        .then(response => {
            return response.json();
        })
        .then(jsonProperties => {
            console.log('PROPERTIES:', jsonProperties);
            this.setState({properties: jsonProperties});
        })
        .catch(error => {
            console.log(error);
        });
    }

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
        let first = this.state.properties[0];
        return (
            <div className="Properties">
                <p>Hello World!</p>
                <p>{first.startTime}</p>
                
            </div>
        );
    }
}

export default Properties;
