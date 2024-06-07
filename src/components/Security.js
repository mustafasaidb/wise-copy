import React from 'react'
import "../styles/Security.css"

function Security() {
  return (
    <div>
        <div className="securityContainer">
            <div className="securityRow">
                <div className="col-left">
                    <h1 className='securityHeader'>Put a stop in the thieves' wheel</h1>
                    <p className='securityParagraph'>Our customers trust us to move more than £30 billion of their money every quarter. Here are some key ways we protect that money.</p>
                    <button className='securityBtn'>How we keep your money safe.</button>
                </div>
                <div className="col-right">
                    <img className='securityImage' src="https://wise.com/web-art/assets/illustrations/lock-large@2x.webp" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Security