import React from 'react'
import "./style/filter-not-found.css"
import notFoundIllustration from "./img/not-foudn__illustration.png"


const FilterNotFound = ({src, isNotFound = true, text}) => {
  return (
    <div className={`not-found ${isNotFound ? "" : '_hide'}`}>
        <img src={notFoundIllustration} alt="Not Found Rick And Morty" />
        <p className='not-found__text'>{text}</p>
    </div>
  )
}

export default FilterNotFound