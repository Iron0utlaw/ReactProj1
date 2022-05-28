import React from 'react'
import './know.css'

const Know = () => {
  return (
    <section id='know'>
        <header className='tomper'>
            <h5>Get To Know Me</h5>
            <h2>Legen <span>wait for it</span> Dary</h2>
        </header>

        <div className="cards">
          <div className="card">
            <div className="small"></div>
            <div id="h5">Me Knows Blender</div>
          </div>

          <div className="card sec">
            <div className="small"></div>
            <div id="h5">Me is Okayish</div>
            </div>
        </div>
    </section>
  )
}

export default Know