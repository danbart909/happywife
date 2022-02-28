import React, { Component } from 'react'

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <>
       <div id='aboutus-container'>

          <div id='aboutus' className='aboutus-box'>
            <div id='aboutus-1' className='aboutus-title'>
              <span>About Us</span>
            </div>
            <div className='aboutus-hr'>
              <hr />
            </div>
            <div id='aboutus-2' className='aboutus-text'>
              <span id='about-us-2-span' className='aboutus-text-span'>All information is kept to the Google Firebase system and none of it is used to identify anybody nor is it sold for profit.</span>
              <span>Pretty Good Inc. © 2022</span>
            </div>
          </div>

        </div> 
      </>
    )
  }
}