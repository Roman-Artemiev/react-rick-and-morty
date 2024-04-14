import React from 'react'
import logo from "../main/img/logo.svg"
import "./style/header.css"
import ApplyTextStroke from '../UI/ApplyTextStroke/ApplyTextStroke'
import { Link } from 'react-router-dom'



const Header = ({ isHome=false, isCharacters=false, isEpisodes=false, isLocations=false, isWatchList=false }) => {
  return (
        <header className="header">
            <div className="wrapper">
                <div className="header__wrapper">
                    <Link to="/"> 
                        <img className='header__logo' src={logo} alt="Logo" />
                    </Link>

                    <nav className='header__nav'>
                        <ul className="header__list">
                            <Link className='header__item' to="/">
                                {isHome ? 
                                    <ApplyTextStroke
                                        text="Home" 
                                        textSize="24"
                                    /> 
                                    :
                                    "Home"
                                }
                            </Link>

                            {/* <Link to='/characters' className="header__item">Characters</Link>
                            <Link to='/episodes' className="header__item">Episodes</Link>
                            <Link to='/locations' className="header__item">Locations</Link>
                            <Link to='/watch-list' className="header__item">Watch list</Link> */}

                            <Link className='header__item' to="/characters">
                                {isCharacters ? 
                                    <ApplyTextStroke
                                        text="Characters" 
                                        textSize="24"
                                    /> 
                                    :
                                    "Characters"
                                }
                            </Link>

                            <Link className='header__item' to="/episodes">
                                {isEpisodes ? 
                                    <ApplyTextStroke
                                        text="Episodes" 
                                        textSize="24"
                                    /> 
                                    :
                                    "Episodes"
                                }
                            </Link>

                            <Link className='header__item' to="/locations">
                                {isLocations ? 
                                    <ApplyTextStroke
                                        text="Locations" 
                                        textSize="24"
                                    /> 
                                    :
                                    "Locations"
                                }
                            </Link>

                            <Link className='header__item' to="/watch-list">
                                {isWatchList ? 
                                    <ApplyTextStroke
                                        text="Watch list" 
                                        textSize="24"
                                    /> 
                                    :
                                    "Watch list"
                                }
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
  )
}

export default Header