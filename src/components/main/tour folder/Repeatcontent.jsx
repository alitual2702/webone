import React from 'react'
import "./repeated.css"
const Repeatcontent = ({tourT , tourP}) => {
  return (
    <div className="tour-div">
        <h1 className="iterating-t">{tourT}</h1>
        <p className="iterating-p">{tourP}</p>
    </div>
  )
}

export default Repeatcontent