import React from 'react'
import "./pricing.css"
const Pricingcards = ({olimage , olihead , olidis , oliprice}) => {
  return (
    <div className='pricing-div'>
        <img  src={olimage} alt="imgone" className="price-images"  />
        <h2 className="olampic-country">{olihead}</h2>
        <p className="olampic-discription">{olidis}</p>
        <button className="cashing">{oliprice}</button>
    </div>
  )
}

export default Pricingcards