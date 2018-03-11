import React, { Component } from 'react';
import './Properties.css';

class Properties extends Component {
    constructor() {
        super();
        this.convertDate = this.convertDate.bind(this);
        this.convertPrice = this.convertPrice.bind(this);
    }

    convertDate(date) {
        let slicedDate = date.slice(0, 10).split('-');
        return slicedDate[1] + '/' + slicedDate[2] + '/' + slicedDate[0]; // 10/30/2010
    }

    convertPrice(price) {
       return price.toLocaleString();
    }

    render() {
        return (
            <li className="a-listing">
                <img src={`${this.props.details.listing.photos[0]}`} alt={`MLS ID #${this.props.details.listing.mlsId}`} />
                <p>Bedrooms: {this.props.details.listing.property.bedrooms}</p>
                <p>Full Baths: {this.props.details.listing.property.bathsFull}</p>
                <p>Half Baths: {this.props.details.listing.property.bathsHalf}</p>
                <p>MLS ID: {this.props.details.listing.mlsId}</p>
                <p>List Date: {this.convertDate(this.props.details.listing.listDate)}</p>
                <p>List Price: ${this.convertPrice(this.props.details.listing.listPrice)}</p>
            </li>
        );
    }
}

export default Properties;
