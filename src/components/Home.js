import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div id='home-container'>
        <div id='home-top'>
          <div id='home-first'>
            <img src='https://i.imgur.com/usX1Piu.png' id='home-first-logo' alt='company logo' />
          </div>
          <div id='home-second'>
            <span>A Customer Service-Driven Junk Removal Service</span>
          </div>
          <div id='home-third'>
            <Link to='/' id='home-third-button'>
              <span>Get a Quote</span>
            </Link>
          </div>
        </div>

        <div id='home-bot'>

          <div id='bot-aboutus' className='bot-box'>
            <div id='bot-aboutus-1' className='bot-title'>
              <span>About Us</span>
            </div>
            <div id='bot-aboutus-2' className='bot-text'>
            <span>A family-owned and operated company, Happy Wife Junk Service was started by a father and son duo, and is a consumer service driven junk removal company based in Marietta, Georgia. We believe passionately that only trustworthy men and women belong in your home. We strive to hire the best and to bring you the best service. At Happy Wife, we pride ourselves on taking care of you.</span>
            </div>
          </div>

          <div id='bot-whatwebelieve' className='bot-box'>
            <div id='bot-whatwebelieve-1' className='bot-title'>
              <span>What We Believe</span>
            </div>
            <div id='bot-whatwebelieve-2' className='bot-text'>
              <span>You deserve quality service from anybody you invite into your home. Whether it be landscaping, plumbing, or contractors, you need honest, upstanding men and women. With Happy Wife, junk removal is one less thing you need to worry about, giving you peace of mind. Our junk removal experts will honor your home like you do.</span>
            </div>
          </div>

          <div id='bot-ourservices' className='bot-box'>
            <div id='bot-ourservices-1' className='bot-title'>
              <span>Our Services</span>
            </div>
            <div id='bot-ourservices-2' className='bot-text'>
              <span>There are no jobs too big or too small. There are no loads we won't take. Our crews will always strive to serve you, no matter the job. We can do anything, from furniture removal, refrigerator removal, contractor debris clean up, and storage unit clean out, to estate sale clean up and commercial junk removal. We will never say no to you.</span>
            </div>
          </div>

        </div>
      </div>
    )
  }
}