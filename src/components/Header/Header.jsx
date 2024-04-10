import React from 'react'
import logo from "../main/img/logo.svg"
import "./style/header.css"
import ApplyTextStroke from '../UI/ApplyTextStroke/ApplyTextStroke'



const Header = () => {
  return (
        <header className="header">
            <div className="wrapper">
                <div className="header__wrapper">
                    <img className='header__logo' src={logo} alt="Logo" />

                    <nav className='header__nav'>
                        <ul className="header__list">
                            <ApplyTextStroke
                                text="Home" 
                                textSize="24"
                                className="header__item"
                            />
                            <li className="header__item">Characters</li>
                            <li className="header__item">Episodes</li>
                            <li className="header__item">Locations</li>
                            <li className="header__item">Watch list</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
  )
}

export default Header