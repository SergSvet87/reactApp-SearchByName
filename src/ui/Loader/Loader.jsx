import React from 'react'

import './Loader.scss'

export const Loader = () => {
  return (
    <div id="preloader" className="preloader">
      <h2>Loading...</h2>
      <div className="loader"></div>
    </div>
  )
}
