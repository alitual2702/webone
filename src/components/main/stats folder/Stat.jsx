import React from 'react'
import './stat.css'
function Stat({statsRecord , statsdetail}) {
  return (
    <div className="stats-content">
        <h2 className='stats-rec'>{statsRecord}</h2>
        <p className='stats-det'>{statsdetail}</p>
    </div>
  )
}

export default Stat