import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class Woodstock extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal - Woodstock Junk Removal</title>
          <meta name="description" content="Haul away your garbage with the best junk removal company in Woodstock, GA" />
        </Helmet>
        <div className='gD areas Woodstock UL'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Woodstock</span>
            </div>
            <div className='gD-body'>
              <span>We can you help you get rid of your old junk. We offer reliable Woodstock junk removal and disposal services that help you remove the stress while saving time and money! Our professional junk haulers will remove and dispose of your unwanted bulky junk items by responsibly recycling or donating the items for you. When you need help decluttering used junk or have that broken appliance hauled away, Happy Wife offers guaranteed, upfront pricing for on-demand junk removal Woodstock Georgia. Save time and money when you book full service Woodstock junk removal and professional haul away services.</span>
            </div>
            <div className='gD-go-back'>
              <Link to='/areas' className='areas-goback'><i className="arrow fas fa-arrow-left"></i><span>Back to List</span></Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}