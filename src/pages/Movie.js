import React from 'react'
import { movie } from '../vanilla/movie'
import {useParams } from 'react-router-dom'
import Button from '../components/Button'
import Star from '../components/Star'


export default function Movie() {
    const {movieId}= useParams()
    const product = movie.find((product)=> product.id === movieId)
    
    
    const {image, title} = product
    
  return (
    
      <main style={{marginTop:'12rem'}}>
          <section class="about">
              <img src={image} alt={title} class="img about-img" />
              <article>
                  <h2>Movie:{title}</h2>
                  <p>I'm baby vibecession pug 3 wolf moon asymmetrical subway tile hashtag, succulents heirloom pour-over fam. </p>
                  <p>Chillwave iPhone next level normcore meggings.</p>
                  <p>Roof party pabst 8-bit portland post-ironic, fashion axe four loko adaptogen.</p>
                  <div className='film-details'>
                      <div className="single">
                          <h3>Views</h3>
                          <span>15,000</span>
                      </div>

                      <div className="single">
                          <h3 className="h3">Price:</h3>
                          <p>$50.00</p>
                      </div>

                      <div className="single">

                          <h3>Ratings:8.5/10</h3>
                          <span>
                              <Star />
                          </span>
                      </div>

                  </div>
                  <Button />

              </article>
          </section>
      </main>
  )
}
