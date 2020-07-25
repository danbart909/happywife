import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class QuoteBanner extends Component {
  render() {
    return (
      <>
        <div id='quotebanner-container'>
          <div id='quotebanner'>
            <div id='quotebanner-button-container'>
              <Link to='/booknow' id='quotebanner-button'>
                <span>Get a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}