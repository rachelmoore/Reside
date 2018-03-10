import React, { Component } from 'react';
import './Properties.css';

class Properties extends Component {
    constructor(props) {
        super(props);

        this.state = {properties: 'false'};
    }

    

    componentDidMount() {
        const parent = this;
        fetch('https://api.simplyrets.com/openhouses', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa('simplyrets:simplyrets')
            }
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log('PROPERTIES:', json);
            this.setState({properties: 'test string'});
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
        return (
            <div className="Properties">
                Hello World!
                {this.state.properties}
                
            </div>
        );
    }
}

export default Properties;
