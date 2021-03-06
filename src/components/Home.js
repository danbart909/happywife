import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'
// import MidBanner from './MidBanner'
import Virtues from './Virtues'
import $ from 'jquery'
import companylogo from '../images/companylogo.png'
import trailer1 from '../images/trailer1.jpg'
import trailer3 from '../images/trailer3.jpg'

export default class Home extends Component {
  render() {

    $(document).ready(function () {
    
      $('#home-third-button-1').hover(function() {
        $('#home-fourth-img').css('background-image', 'url(' + trailer1 + ')')
      })

      $('#home-third-button-2').hover(function() {
        $('#home-fourth-img').css('background-image', 'url(' + trailer3 + ')')
      })

    })

    return (
      <div id='home-container'>
        <div id='home-top'>
          <div id='home-first'>
            <div id='home-img-container'>
              <img
                src={companylogo}
                id='home-first-logo'
                alt='company logo 1'
              />
            </div>
          </div>
        </div>
        <div id='home-mid'>
          <div id='home-second'>
            <div id='home-img-container-2'>
              <img
                src={companylogo}
                id='home-first-logo-2'
                alt='company logo 2'
              />
            </div>
            <span>A Customer Service Driven Junk Removal Company</span>
          </div>
          <div id='home-mid-bot'>
            <div id='home-third'>
              <Link to='/pricing' id='home-third-button-1'>
                <span>SEE PRICING</span>
              </Link>
              <Link to='/booknow' id='home-third-button-2'>
                <span>GET A QUOTE</span>
              </Link>
            </div>
            <div id='home-fourth'>
              <div id='home-fourth-img'>
                
              </div>
            </div>
          </div>
        </div>
        <div id='home-bot'>
          <AboutUs />
          <Virtues />
        </div>
      </div>
    )
  }
}