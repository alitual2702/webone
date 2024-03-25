import React from 'react'
import "./alllinks.css"
const Alllinks = ({ltag , ldis_first ,ldis_second , ldis_third , ldis_four , ldis_five}) => {
  return (
    <div className="links-flex-footer">
        <h4 className='l-tag'>{ltag}</h4>
        <li className="l-c">{ldis_first}</li>
        <li className="l-c">{ldis_second}</li>
        <li className="l-c">{ldis_third}</li>
        <li className="l-c">{ldis_four}</li>
        <li className="l-c">{ldis_five}</li>
    </div>
  )
}

export default Alllinks