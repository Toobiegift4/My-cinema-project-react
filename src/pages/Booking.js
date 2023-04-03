import React from 'react'

export default function Booking() {
  return (
    <>
      <main>
        <article>
          <div class="form-heading">
            <h2>book your tickets online</h2>
          </div>
          <form class="form booking-form">
            
            <div class="form-row">
              <label for="name" class="form-label">your name</label>
              <input type="text" name="name" id="name" class="form-input" />
            </div>

            <div class="form-row">
              <label for="date" class="form-label">date of booking</label>
              <input type="date" name="date" id="date" class="form-input" />
            </div>

            <div class="form-row">
              <label for="class" class="form-label">select a movie</label>
              <select name="class" id="class" class="form-input">
                <option value="Money Heist">Money Heist</option>
                <option value="batman">Batman 2022</option>
                <option value="batman">Batman 2016</option>
                <option value="batman">Batman 2018</option>
                <option value="Divergent">Divergent</option>

              </select>
            </div>

            <div class="form-row">
              <label for="class" class="form-label">choose a class</label>
              <input type="checkbox" name="class" id="class" value="gold" class="checkbox">Gold</input>
              <input type="checkbox" name="class" id="class" value="platinum" class="checkbox">Platinum</input>
              <input type="checkbox" name="class" id="class" value="exclusive" class="checkbox">Exclusive</input>
            </div>

            <div class="form-row">
              <label for="time" class="form-label">timing</label>
              <input type="time" name="time" id="time" class="form-input" />
            </div>

            <div class="form-row">
              <label for="price" class="form-label">price</label>
              <input type="number" name="price" id="price" class="form-input" />
            </div>

            <div class="form-row">
              <label for="amount" class="form-label">number of tickets</label>
              <input type="number" name="amount" id="amount" class="form-input" />
            </div>

            <div class="form-row">
              <label for="total" class="form-label">Total Price</label>
              <input type="number" name="total" id="total" class="form-input" disabled />
            </div>

            <button type="submit" class="btn">Submit</button>
            <button type="reset" class="btn">reset</button>



          </form>
        </article>
      </main>
    </>
    
  )
}
