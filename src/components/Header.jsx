import React from 'react'
import '../assets/styles/header.css'
import Logo from '../assets/svgs/Logo'

const Header = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <Logo />
                </div>
                <div className="links">
                    <a href="/">Intro</a>
                    <a href="/">Overview</a>
                    <a href="/">Works</a>
                    <a href="/">Services</a>
                    <a href="/" className="button">Contact Me</a>
                </div>
            </nav>
            <div className="intro">
                <div className="container">
                    <h1>I’M A   WEB
                        DEVELOPER</h1>
                    <p>I’m a web dev and UI UX
                        designer having 3 year’s of
                        experience</p>
                </div>

                <div className="socals">
                    <a href="/">Facebook</a>
                    <a href="/">Instagram</a>
                    <a href="/">Whatsapp</a>
                </div>

            </div>
        </div>
    )
}

export default Header