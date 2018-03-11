import React, { Component } from 'react';
import './Properties.css';

class Properties extends Component {

    render() {
        return (
            <li className="a-listing">
                <img src={`${this.props.details.listing.photos[0]}`} alt={`MLS ID #${this.props.details.listing.mlsId}`} />
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
