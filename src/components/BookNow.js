import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class BookNow extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Book Now - Booking Form</title>
          <meta name="description" content="Happy Wife - Book Now - Booking Form" />
        </Helmet>
        <div id='booknow-container'>
          <div id='booknow'>
            <div id='booknow-title'>
              <span>Book Now with Calendly</span>
            </div>
            <div id='booknow-header'>
              <span>Fill out the form below and we will email you a link. Use the link to set up your appointment.</span>
            </div>
            <div id='booknow-form-container'>
              <form id='booknow-contact-form' action="https://formspree.io/xwkrwbyl" method="POST">
                <fieldset id='booknow-fieldset'>
                  <legend className='booknow-fieldset-legend hidden'>Contact Form / Request a Timeslot</legend>
                  <input id='booknow-nameinput' type='text' name='name' placeholder='Name' required />
                  <input id='booknow-emailinput' type='text' name='email' placeholder='Email' required />
                  <input id='booknow-phoneinput' type='text' name='phone' placeholder='Phone' required />
                  <textarea id='booknow-contentinput' name='content' placeholder="Please tell us what time you'd like us to haul your stuff, as well as what it is we are hauling" required defaultValue={""} />
                  <input id='booknow-submit' type='submit' name='send' value='Request a Time' />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}