import React from 'react'

export default function Contact() {
  return (
    <main style={{margin: '15rem auto'}}>
          <section>
              <article>
                  <form class="form contact-form">
                      <div class="form-heading">
                          <h3>for more info contact us</h3>
                      </div>

                      <div class="form-row">

                          <input type="text" name="name" id="name" class="form-input" placeholder="your name" />
                      </div>

                      <div class="form-row">

                          <input type="email" name="email" id="email" class="form-input" placeholder="email" />
                      </div>

                      <div class="form-row">

                          <textarea name="message" id="message" class="form-textarea" placeholder='description'></textarea>
                      </div>

                      <div className="div-btn">
                          <button type="button" class="btn contact-btn">submit</button>
                      </div>


                  </form>
              </article>
          </section>
    </main>
    
  )
}
