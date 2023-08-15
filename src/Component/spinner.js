import React, { Component } from 'react'
import loading from './loading.gif'
import './spinner.css'
const  Spinner =()=> {
    return (
      <div className='redt'><img srcSet={loading} height='80px' alt=""  /></div>
    )
  }

  export default  Spinner