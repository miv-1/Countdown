import React from "react";
import '../bootstrap.min.css'
import '../Pages/HelloThere.css'
import picture from '../images/PHOTO-2022-06-20-15-05-41.png'

function HelloThere() {
  return (
      <div className="container">
          <br/>
          <h4 className="alert-heading">Warning boss :) this page is full of toxic comments. </h4>
          <br/>
          <div className="mb-0">
              <p>
                  What’s the most terrifying word in GPA testing?
              </p>

               <p> <b>Oops</b></p>
              <p>
                  "I was studying frequency in my physics class. Now my brain Hertz."
              </p>
            <p>
              Thank you boss for staying with us for 5 years, for your support. We have enjoyed working with you! Good luck with your new position. Perhaps our paths will cross again in the future.  <a href="/r" className="alert-link">Would like to see GPA going to moon again? Click on this link!
              </a>.
            </p>
            </div>

          <div className='image'>
              <img src={picture} alt="Logo"/>
          </div>

      </div>


  );
}

export default HelloThere;
