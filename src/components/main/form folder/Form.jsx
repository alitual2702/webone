import React from 'react'
import "./form.css"
const Form = () => {
  return (
    <form className='all-fields'>  
     
     <input type="email" name="email" id="email" placeholder='Your Email...' />
     <input type="button" value="Subscribe"  id='subscribe'/>

    </form>
    )
}

export default Form