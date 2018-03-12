import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="header-container">
                <div className="user-id">
                    <p className="welcome">Welcome! Your User ID is: <span style={{ color: '#53C1DE' }}>{this.props.userid}</span></p>
                </div>
                <div className="rre-header">
                    <div className="logo">
                        <div className="logo-middle">
                            <img className="logo-image" src="http://res.cloudinary.com/df9oqycdp/image/upload/v1520825646/sphynxwhitesquare80_f74izi.png" alt="Rex Real Estate" />
                        </div>
                        <div className="logo-bottom">
                            <h5 className="logo-text">REX REAL ESTATE</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;