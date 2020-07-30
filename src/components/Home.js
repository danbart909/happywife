import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'
import MidBanner from './MidBanner'
import Virtues from './Virtues'

export default class Home extends Component {
  render() {
    return (
      <div id='home-container'>
        <div id='home-top'>
          <div id='home-first'>
            <div id='home-img-container'>
              <img src='https://i.imgur.com/usX1Piu.png' id='home-first-logo' alt='company logo' />
            </div>
          </div>
          <div id='home-second'>
            <span>A Customer Service Driven Junk Removal Service</span>
          </div>
          <div id='home-third'>
            <Link to='/booknow' id='home-third-button'>
              <span>Get a Quote</span>
            </Link>
          </div>
        </div>
        <AboutUs />
        <MidBanner />
        <Virtues />
      </div>
    )
  }
}