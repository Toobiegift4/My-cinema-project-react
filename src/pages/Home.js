import React from 'react'
import { Link } from 'react-router-dom'


import Thumb from '../components/Thumb'

import {movie} from '../vanilla/movie'

export default function Home() {
  



 

  return (
    <>
      <header className="header">
        <div className="banner">
          <div className="banner-header">
            <h1>Films</h1>
            <h2>Viral in polaroid Brooklyn. Keffiyeh offi.</h2>
            <p>I'm baby synth cornhole fingerstache direct trade, big mood fugiat retro hot chicken pork belly pariatur ex XOXO. Viral in polaroid Brooklyn. Keffiyeh officia bicycle rights vinyl edison bulb bruh sartorial tumeric vaporware wayfarers deserunt</p>
            <Link to="/sigin" className="btn banner-contact">create an account</Link>
          </div>

        </div>

      </header>
      <main>
        {/* recent movies container */}
        <section>
          <h3 className="new-header">recent movies</h3>
          <div className='line'></div>

          <div className="movies-container">

            {movie.map((game, index) => <Thumb key={index} game={game} />)}

          </div>
          <Link to="/" className="btn new-btn">Book a Ticket</Link>
          <Link to="/contact" className="btn new-btn">contact Us Today</Link>

        </section>
        {/* end of recent movies container */}


        {/* new movies container */}
        
          

        
        {/* end of new movies container */}


      </main>
    </>
  )
}
