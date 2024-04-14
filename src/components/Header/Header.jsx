import React, { useEffect, useState } from 'react'
import logo from "../main/img/logo.svg"
import "./style/header.css"
import ApplyTextStroke from '../UI/ApplyTextStroke/ApplyTextStroke'
import { Link } from 'react-router-dom'



const Header = ({ isHome=false, isCharacters=false, isEpisodes=false, isLocations=false, isWatchList=false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // Fixed Header
    const [scrollingDown, setScrollingDown] = useState(false);
    const [isUserOnTop, setIsUserOnTop] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setScrollingDown(prevScrollPos < currentScrollPos);
        prevScrollPos = currentScrollPos;

        // currentScrollPos > 50 ? setIsMenuOpen(false); : setIsUserOnTop(true);
            if(currentScrollPos > 300) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
        <header className="header">
            <div className="wrapper">
                <div className={`header__wrapper`}>
                    <Link to="/"> 
                        <img className='header__logo' src={logo} alt="Logo" />
                    </Link>

                    <nav className={`header__nav ${isMenuOpen ? "_active" : ""}`}>
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

                        <div className="menu" onClick={handleMenuClick}>
                            <div className='menu-bar menu-bar-1'></div>
                            <div className='menu-bar menu-bar-2'></div>
                            <div className='menu-bar menu-bar-3'></div>
                        </div>
                    </nav>


                </div>
            </div>
        </header>
  )
}

export default Header