import React from 'react'
export default function Header() {

        return (
                <>
                        <header className="header">
                                <div className="header__contact">
                                        <div className="container contact__container">
                                                <ul className="contact__list">
                                                        <li><a href="" className="contact__link">book an appointment</a></li>
                                                        <li><a href="" className="contact__link">5 Year After Sales Service</a></li>
                                                        <li><a href="" className="contact__link">+44 020 7430 1138</a></li>
                                                </ul>
                                        </div>
                                </div>
                                <div className="container header__container">
                                        <nav className="navbar">
                                                <ul className="nav__list">
                                                        <li><a href="" className="nav__link">engagement rings</a></li>
                                                        <li><a href="" className="nav__link">wedding rings</a></li>
                                                        <li><a href="" className="nav__link">earrings</a></li>
                                                        <li><a href="" className="nav__link">guides & articles</a></li>
                                                        <li><a href="" className="nav__link">design process</a></li>
                                                        <li><a href="" className="nav__link">reviews</a></li>
                                                        <li><a href="" className="nav__link">contact us</a></li>
                                                </ul>
                                        </nav>
                                </div>
                        </header>
                </>
        )
}
