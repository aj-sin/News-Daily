import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='container justify-center my-10 text-center'>
        <img src={loading} alt="Loading..." style={{ width: '30rem', height: '25rem' }} />
      </div>
    )
  }
}
