import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="rre-header">
                <div className="logo">
                    <div className="logo-top">
                        <h1>REX</h1>
                    </div>
                    <div className="logo-middle">
                        <img className="logo-image" src="http://res.cloudinary.com/df9oqycdp/image/upload/v1520813475/sphynx100_dfgdq6.png" />
                    </div>
                    <div className="logo-bottom">
                        <h5>REAL ESTATE GROUP</h5>
                    </div>
                </div>
                <div className="greeting">
                    <p>Welcome! Your User ID is: <span style={{color: '#53C1DE'}}>{this.props.userid}</span></p>
                </div>
            </div>
        );
    }
}

export default Header;