import React from 'react'
import { Icon } from '@iconify/react';


const Contact = () => {
    return (   
       
      <section id="contact">
          <div class="row" id="contact-p">
          <div class="col-12">
            <h1>contact</h1>
            <hr></hr>
            <p>To contact developer B McCool, please email mccoolcontact@gmail.com or fill out the form below. B will get back to you as soon as possible, thank you!</p>
          </div>
          <div class="col d-flex justify-content-center">
            <form class="text-center d-flex flex-column justify-content-center">
              <h1 class="text-center">contact dev</h1>
              
              <input class="form-control" type="text" placeholder="Name"></input>
              <input class="form-control" type="email" placeholder="Email"></input>
              <textarea class="form-control" placeholder="Message"></textarea>
              <button class="btn" type="button">
                <Icon icon="tabler:brand-hipchat" color="white" width="25px" height="25px"/>
              </button>
            </form>
          </div>
        </div>
      </section>
    )
};

export default Contact