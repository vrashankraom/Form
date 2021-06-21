import React from 'react'
import {Link} from 'react-router-dom';


const Landing = () => {

    return (
        <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Form Data</h1>
          <p class="lead">
            Enter data into the form and get the data of all the entered forms
          </p>
          <div class="buttons">
            <Link to="/user-form" class="btn btn-primary">Fill Form</Link>
            <Link to="/user-form/success" class="btn btn-light">Get Forms</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing;