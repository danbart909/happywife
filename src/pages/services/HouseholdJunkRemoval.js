import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class HouseholdJunkRemoval extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Household Junk Removal</title>
          <meta name="description" content="Household Junk Removal" />
        </Helmet>
        <div className='services HouseholdJunkRemoval UL'>
          <div className='services-box'>
            <div className='services-title'>
              <span>Household Junk Removal</span>
            </div>
            <div className='services-body'>
              <span>Household Junk Removal is a breeze with Happy Wife Junk Service. Our customer driven junk service wants your experience to be pleasant and stress free. We haul any kind of junk you need. Happy Wife shows up on time and is a breeze to work with. We always put the needs of our clients first. We are determined to ensure that you feel comfortable and safe inviting us into your home. We always strive to serve you and provide you with a valuable service. Send us a text and we will contact you proptly, and your junk will be gone before you knew it possible.</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}