import React from 'react'
const Lastflex = ({ltag , ldis_first , ldis_second , ldis_third}) => {
  return (
    <div className="links-flex-footer">
        <h4 className='l-tag'>{ltag}</h4>
        <li className="l-c">{ldis_first}</li>
        <li className="l-c">{ldis_second}</li>
        <li className="l-c">{ldis_third}</li>
    
    </div>
  )
}

export default Lastflex