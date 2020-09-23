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

            <div id='top-nav-right-header'>
              <span>A Customer Service Driven Junk Removal Company</span>
            </div>

            <div id='top-nav-right-number'>
              <a href='tel:770-873-0803'><span>770.873.0803</span></a>
            </div>

            <div id='top-nav-right-phone-text'>
              <a href='tel:770-873-0803'><i className="fas fa-phone"></i> Call </a><span> or </span><a href='sms:7708730803'> <i className="fas fa-comment-dots"></i> Text</a>
            </div>

          </div>

        </div>
      </div>
    )
  }
}