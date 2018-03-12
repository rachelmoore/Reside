import React, { Component } from 'react';
import './Properties.css';
import base from './base';

class Properties extends Component {
    constructor() {
        super();
        this.convertDate = this.convertDate.bind(this);
        this.convertPrice = this.convertPrice.bind(this);
        this.saveMlsId = this.saveMlsId.bind(this);
    }

    convertDate(date) {
        let slicedDate = date.slice(0, 10).split('-');
        return slicedDate[1] + '/' + slicedDate[2] + '/' + slicedDate[0]; // 10/30/2010
    }

    convertPrice(price) {
       return price.toLocaleString();
    }

    saveMlsId(userId, mlsId) {
        console.log(mlsId);
        console.log(this.props);
        let testFirebase = base.push(userId, {data: mlsId });
    }

    render() {
        return (
            <li className="a-listing">
                <img className="home-img" src={`${this.props.details.listing.photos[0]}`} alt={`MLS ID #${this.props.details.listing.mlsId}`} />
                <table>
                    <tbody>
                        <tr>
                            <td>Bedrooms:</td>
                            <td>{this.props.details.listing.property.bedrooms}</td>
                        </tr>
                        <tr>
                            <td>Full Baths:</td>
                            <td>{this.props.details.listing.property.bathsFull}</td>
                        </tr>
                        <tr>
                            <td>Half Baths:</td>
                            <td>{this.props.details.listing.property.bathsHalf}</td>
                        </tr>
                        <tr>
                            <td>MLS ID:</td>
                            <td>#{this.props.details.listing.mlsId}</td>
                        </tr>
                        <tr>
                            <td>List Date:</td>
                            <td>{this.convertDate(this.props.details.listing.listDate)}</td>
                        </tr>
                        <tr>
                            <td>List Price:</td>
                            <td>${this.convertPrice(this.props.details.listing.listPrice)}</td>
                        </tr>
                        <tr>
                            <td><button className="mlsid-button" onClick={() => this.saveMlsId(this.props.userid, this.props.details.listing.mlsId)}>
                                Save MLS ID to User ID
                                </button></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </li>
        );
    }
}

export default Properties;


