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
            <Link to='/booknow' id='home-third-button'>
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

        <div id='virtues'>
          <div id='virtues-header'>
            <span>Our Virtues</span>
          </div>

          <div id='virtues-1' className='virtue'>
            <div id='virtues-title-1' className='virtues-title'>
              <span>Open and Honest Pricing</span>
            </div>
            <div id='virtues-text-1' className='virtues-text'>
              <span>"You shall have just balances, just weights, a just ephah, and a just hin: I am the LORD your God, who brought you out of the land of Egypt." Leviticus 19:36</span>
              <span>We strive to be as straight forward and open as possible. You can trust us to charge only for as much as you use.</span>
            </div>
          </div>

          <div id='virtues-2' className='virtue'>
            <div id='virtues-title-2' className='virtues-title'>
              <span>Cleanliness</span>
            </div>
            <div id='virtues-text-2' className='virtues-text'>
              <span>"But everything should be done in a fitting and orderly way." 1 Cor 14:40</span>
              <span>We change into clean sneakers before entering your home. Those sneakers don't touch anything but hardwood, carpet, and concrete.</span>
            </div>
          </div>

          <div id='virtues-3' className='virtue'>
            <div id='virtues-title-3' className='virtues-title'>
              <span>Trustworthy Service</span>
            </div>
            <div id='virtues-text-3' className='virtues-text'>
              <span>"Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward, You are serving the Lord Christ." Col 3:23-24</span>
              <span>You deserve honest service, and we are dedicated to bring that to you. When you open your doors to us, we will go above and beyond to ensure you feel safe.</span>
            </div>
          </div>

        </div>

      </div>
    )
  }
}