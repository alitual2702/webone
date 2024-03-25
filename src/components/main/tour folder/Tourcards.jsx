import React from 'react'
import "./tourcard.css"
const Tourcards = ({olimage,olihead,olidis}) => {
  return (
    <div className='olampic-div'>
        <img src={olimage} alt="imgone" className="olampic-images"  />
        <h2 className="olampic-country">{olihead}</h2>
        <p className="olampic-discription">{olidis}</p>
    </div>
  )
}

export default Tourcards