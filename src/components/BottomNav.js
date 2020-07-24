import React, { Component, createRef } from 'react'
import { Link } from 'react-router-dom'
import Sticky from 'react-sticky-el';

export default class BottomNav extends Component {
  render() {
    return (
      <Sticky>
        <div id='bottom-nav-container'>
          <div id='bottom-nav'>
            <div id='bottom-nav-left'>
              <div className='bottom-nav-button'>
                <Link to='/' id='bottom-nav-home-link'>
                  <span>Home</span>
                </Link>
              </div>
              <div className='bottom-nav-button'>
                <Link to='/areas' id='bottom-nav-areas-link'>
                  <span>Areas</span>
                </Link>
              </div>
              <div className='bottom-nav-button'>
                <Link to='/services' id='bottom-nav-services-link'>
                  <span>Services</span>
                </Link>
              </div>
              <div className='bottom-nav-button'>
                <Link to='/pricing' id='bottom-nav-pricing-link'>
                  <span>Pricing</span>
                </Link>
              </div>
              <div className='bottom-nav-button'>
                <Link to='/booknow' id='bottom-nav-booknow-link'>
                  <span>Book</span>
                </Link>
              </div>
            </div>
              
            <div id='bottom-nav-right'>
              <a href='' target='_blank'><i className='fab fa-facebook' id='facebook-button' role='link'></i></a>
              {/* <a href='' target='_blank'><i className='fab fa-twitter' id='twitter-button' role='link'></i></a> */}
              <a href='https://g.page/HappyWife?gm' target='_blank'><i className='fab fa-google' id='google-button' role='link'></i></a>
              {/* <a href='' target='_blank'><i className='fab fa-linkedin' id='linkedin-button' role='link'></i></a> */}
              {/* <a href='' target='_blank'><i className='fab fa-youtube' id='youtube-button' role='link'></i></a> */}
              {/* <a href='' target='_blank'><i className='fas fa-envelope' id='email-button' role='link'></i></a> */}
            </div>
          </div>
        </div>
      </Sticky>
    )
  }
}