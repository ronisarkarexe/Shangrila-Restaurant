import React from 'react';
import './Footer.css';
import card from '../../../images/cards.png';

const Footer = () => {
    return (
        <footer className="footer p-3">
            <div className="container">
                <div className="row copyright-top">
                    <div className="col-md-3 col-sm-12">
                        <div className="footer-title">
                            <h3>Use full Links</h3>
                        </div>
                        <div className="footer-link">
                            <p>Shangrila Overview</p>
                            <p>How to Buy Online</p>
                            <p>Payment Options</p>
                            <p>Legal & security</p>
                            <p>Refund Policy</p>
                            <p>Contact Center</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="footer-title">
                            <h3>Our Services</h3>
                        </div>
                        <div>
                            <p>Transaction</p>
                            <p>Exchange</p>
                            <p>Investments</p>
                            <p>Shopping</p>
                            <p>Escrow Service</p>
                            <p>Fantales</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="footer-title">
                            <h3>Get In Touch</h3>
                        </div>
                        <div>
                            <p className="special-tag">Email:</p>
                            <p>Supportteam@shangrila.com</p>
                            <p className="special-tag">Phone:</p>
                            <p>Tollfree: 888-7010-7010</p>
                            <p className="special-tag">Address:</p>
                            <p>203, Envato Labs, Behind Alis Str,Melbourne, Australia.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="footer-title">
                            <h3>We Are Social</h3>
                        </div>
                        <div>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Linkedin</p>
                            <p>Pinterest</p>
                            <p>RSS Feed</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 menu">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Shop</li>
                            <li>contact</li>
                        </ul>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row copyright-bottom p-3">
                    <div className="col-md-6">
                        <p>Copyrights © 2021 All Rights Reserved by Team 44</p>
                    </div>
                    <div className="col-md-6 card-image">
                        <img src={card} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;