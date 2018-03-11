import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div>
                <div>
                    <img src="https://www.residebrokerage.com/wp-content/uploads/2017/09/Reside-Logo-Grayscale.png" alt="Reside Logo" />
                </div>
                <div>
                    <p>Your User ID is 123456</p>
                </div>
            </div>
        );
    }
}

export default Header;