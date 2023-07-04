import React from 'react'
import './Banner.css'
import Carousels from './Carousels'

function Banner() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 banner">
                    <div className="main-container">
                        <div className="head">Coin Hunt</div>
                        <div className="sub-head">Get all the info regarding your favourite crypto currency</div>
                        <div className="crausel-div">
                            <Carousels />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Banner
