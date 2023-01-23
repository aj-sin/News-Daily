import React from 'react'
import loading from './loading.gif'

const Spinner=()=> {
  
    return (
      <div className='container justify-center my-10 text-center'>
        <img src={loading} alt="Loading..." style={{ width: '30rem', height: '25rem' }} />
      </div>
    )
  
}
export default Spinner