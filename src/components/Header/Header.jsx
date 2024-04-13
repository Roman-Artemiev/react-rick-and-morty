import React from 'react'
import logo from "../main/img/logo.svg"
import "./style/header.css"
import ApplyTextStroke from '../UI/ApplyTextStroke/ApplyTextStroke'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
        <header className="header">
            <div className="wrapper">
                <div className="header__wrapper">
                    <Link to="/"> 
                        <img className='header__logo' src={logo} alt="Logo" />
                    </Link>

                    <nav className='header__nav'>
                        <ul className="header__list">
                            <Link to="/">
                                <ApplyTextStroke
                                    text="Home" 
                                    textSize="24"
                                    className="header__item"
                                />
                            </Link>

                            <Link to='/characters' className="header__item">Characters</Link>
                            <Link to='/episodes' className="header__item">Episodes</Link>
                            <Link to='/locations' className="header__item">Locations</Link>
                            <Link to='/watch-list' className="header__item">Watch list</Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
  )
}

export default Header