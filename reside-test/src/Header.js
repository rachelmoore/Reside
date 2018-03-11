import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="rre-header">
                <div className="logo">
                    <h1 className="logo-text">👩‍💻 Rachel's Real Estate</h1>
                </div>
                <div className="greeting">
                    <p>Your User ID is 123456</p>
                </div>
            </div>
        );
    }
}

export default Header;