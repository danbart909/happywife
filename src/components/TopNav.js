import React, { Component } from 'react'

export default class TopNav extends Component {
  render() {
    return (
      <div id='top-nav-container'>
        <div id='top-nav'>
          <div id='top-nav-left'>
            <img src='https://i.imgur.com/usX1Piu.png' alt='company logo' />
          </div>
          <div id='top-nav-right'>
            <div id='top-nav-right-phone'>
              <div id='top-nav-right-phone-left'>
                <i className="fas fa-phone"></i>
              </div>
              <div id='top-nav-right-phone-right'>
                <span>770.873.0803</span>
              </div>
            </div>
            {/* <div id='top-nav-right-email'>
              <div id='top-nav-right-email-left'>
                <i className='fas fa-envelope'></i>
              </div>
              <div id='top-nav-right-email-right'>
                <span>david@</span>
                <span>prettygoodinc.com</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}