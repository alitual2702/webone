import React from 'react'
import "./amaze.css"
const Amaze = ({amazetitle , amazepara , amazeread}) => {
  return (
    <div className="amaze-content">
      <div className="inner-amaze">
        <h1 className="amaze-title">{amazetitle}</h1>
        <p className="amaze-para">{amazepara}</p>
        <button className="amaze-read">{amazeread}</button>
        </div>
    </div>
  )
}

export default Amaze