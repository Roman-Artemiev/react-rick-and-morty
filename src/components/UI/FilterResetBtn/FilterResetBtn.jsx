import React from 'react'
import "./style/filter-reset-btn.css"
import ApplyTextStroke from '../ApplyTextStroke/ApplyTextStroke'

const FilterResetBtn = ({ onClick }) => {
  return (
    <ApplyTextStroke
        onClick={onClick}
        text="Reset"
        textSize="20"
        className="reset__btn"
   />
  )
}

export default FilterResetBtn