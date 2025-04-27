import React from "react";
import "./Footer.css";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer">
            <div className="footer-text">
                <p>
                    Copyright &copy; {new Date().getFullYear()} by Vikram Singh | All
                    Rights Reserved.
                </p>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
            </div>

            <div className="footer-iconTop">
                <a href="#" onClick={scrollToTop}>
                    <i className="bx bx-up-arrow-alt"></i>
                </a>
                <span className="animate scroll" style={{ "--i": 3 }}></span>
            </div>
        </footer>
    );
};

export default Footer;
