import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <div className="footer-container">
                <p className="footer-text">Made with 💙 and <img className="react-logo" src="http://res.cloudinary.com/df9oqycdp/image/upload/v1520821051/reactsmallest_ychis9.png" alt="React logo" /> by <a href="https://github.com/rachelmoore">Rachel Moore</a></p>
            </div>
        );
    }
}

export default Footer;