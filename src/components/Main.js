import React from 'react'
import "../styles/Main.css"
import Image from 'next/image'
import gif from "../images/earth.gif"

function Main() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-1">
                    <h1>MONEY FOR HERE, THERE AND EVERYWHERE</h1>
                    <p>170 countries. 50 currencies. Get the account built to save you money round the world.</p>
                    <div className='buttons'>
                    <center>
                        <button className='btn-1'>Open an account</button>
                        <button className='btn-2'>Send money now</button>
                    </center>
                    </div>
                </div>
                <div className="col-2">
                    <Image src={gif} alt="resim" />
                </div>
            </div>
            <div className='line'></div>
        </div>
    </div>
  )
}

export default Main
