import React from "react";
import '../bootstrap.min.css'
import '../Pages/HelloThere.css'
import picture from '../images/PHOTO-2022-06-20-15-05-41.png'

function HelloThere() {
  return (
      <div className="container">
          <br/>
          <h4 className="alert-heading">Warning! You are now in depresive street! Be careful of Mr. Outly</h4>
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
              Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Nulla non arcu lacinia neque faucibus
              fringilla. Donec iaculis gravida nulla. Vivamus porttitor turpis ac leo. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos hymenaeos. Phasellus faucibus molestie nisl. Mauris
              metus. Etiam quis quam. Aenean fermentum risus id tortor. Fusce wisi. Donec quis nibh at felis congue
              commodo. <a href="/r" className="alert-link">Would like to see GPA going to moon again? Click on this link!
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
