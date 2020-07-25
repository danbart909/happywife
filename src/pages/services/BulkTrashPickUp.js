import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class BulkTrashPickUp extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Bulk Trash Pick Up</title>
          <meta name="description" content="Happy Wife - Bulk Trash Pick Up" />
        </Helmet>
        <div className='services BulkTrashPickUp UL'>
          <div className='services-box'>
            <div className='services-title'>
              <span>Bulk Trash Pick Up</span>
            </div>
            <div className='services-body'>
              <span>Bulk trash pick up is a breeze with Happy Wife Junk Service. Our costumer driven junk service wants your experience to be pleasant and stress free. We haul any kinds of junk you need. Happy Wife shows up on time and is a breeze to work with. We always put the needs of our clients first. We are determined to ensure that you feel comfortable and safe inviting us into your home. We always strive to serve you and provide you with a valuable service. Send us a text and we will contact you proptly, and your junk will be gone before you knew it possible.</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}