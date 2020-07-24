import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class Pricing extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Pricing Information</title>
          <meta name="description" content="Happy Wife - Pricing Information" />
        </Helmet>
        <div id='pricing-container'>
          <div id='pricing'>
            <div id='pricing-title'>
              <span>Our Pricing:</span>
            </div>
            <div id='pricing-info'>

            </div>
          </div>
          <div id='pricing-pic'>

          </div>
        </div>
      </>
    )
  }
}
