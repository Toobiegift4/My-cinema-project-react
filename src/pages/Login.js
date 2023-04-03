import React from 'react'

export default function Login() {
  return (
    <>
          <main>
              <section>
                  <article>
                      <form class="form contact-form">
                          <div class="form-heading">
                              <h3>welcome back</h3>
                          </div>
                          
                          {/* <!-- single form row --> */}
                          <div class="form-row">
                              <input type="email" name="email" id="email" class="form-input" placeholder="Your email" required/>
                          </div>
                          {/* <!-- end of single form row --> */}
                          {/* <!-- single form row --> */}
                          <div class="form-row">
                            <input type="password" className='form-input' placeholder='enter ur password' required/>
                          </div>

                          {/* <!-- end of single form row --> */}
                          <div className="div-btn">
                              <button type="submit" class="btn contact-btn">log in</button>
                          </div>


                      </form>
                  </article>
              </section>
          </main>
    </>
  )
}
