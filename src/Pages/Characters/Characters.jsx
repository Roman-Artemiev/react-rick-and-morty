import React from 'react'
import Header from '../../components/Header/Header'

import "./style/characters.css"


const Characters = () => {
  return (
    <section className='characters'>
        <Header/>

        <div className="filters__container">
            <select className='filter filters--species' name="" id="">
                <option value="Species" defaultChecked>Species</option>
            </select>
        </div>
    </section>
  )
}

export default Characters