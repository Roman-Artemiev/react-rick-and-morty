import React from 'react'
import ApplyTextStroke from '../ApplyTextStroke/ApplyTextStroke'
import "./style/title-view.css"
import { display } from '@mui/system'

const TitleView = ({text, textSize, lineWidth, lineHeight, className = ""}) => {
    const lineStyles = {
        width: `${lineWidth}px`,
        height: `${lineHeight}px`,
    }


  return (
    <div className="title-view">
        <span className="title-view__line" style={lineStyles}></span>
        <ApplyTextStroke text={text} textSize={textSize} className={`title-view__text ${className}`} />
        <span className="title-view__line" style={lineStyles}></span>
    </div>
  )
}

export default TitleView