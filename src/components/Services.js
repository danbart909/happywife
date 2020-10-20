import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default class Services extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Our Services</title>
          <meta name="description" content="Happy Wife - Our Services" />
        </Helmet>
        <div id='services-container'>
          <div className='gD-box'>
            <div className='gD-title'>
              <span>Our Services</span>
            </div>
            <div id='services-container-jr'>
              <div id='residential' className='service-box'>
                <div id='residential-title' className='service-title'>
                  <Link to='/services/Residential-Junk-Removal'><span>Residential Junk Removal</span></Link>
                </div>
                <div id='residential-list' className='service-list'>
                  <Link to='/services/Appliance-Removal'><span>Appliance Removal</span></Link>
                  <Link to='/services/Basement-Clean-Out'><span>Basement Clean Out</span></Link>
                  <Link to='/services/Garage-Clean-Out'><span>Garage Clean Out</span></Link>
                  <Link to='/services/Household-Junk-Removal'><span>Household Junk Removal</span></Link>
                  <Link to='/services/Moving-Junk'><span>Moving Junk</span></Link>
                  <Link to='/services/Oven-Removal'><span>Oven Removal</span></Link>
                  <Link to='/services/Yard-Debris-Removal'><span>Yard Debris Removal</span></Link>
                </div>
              </div>
              <div id='commercial' className='service-box'>
                <div id='commercial-title' className='service-title'>
                  <Link to='/services/Commercial-Junk-Removal'><span>Commercial Junk Removal</span></Link>
                </div>
                <div id='commercial-list' className='service-list'>
                  <Link to='/services/Apartment-Clean-Out'><span>Apartment Clean Out</span></Link>
                  <Link to='/services/Office-Junk-Removal'><span>Office Junk Removal</span></Link>
                  <Link to='/services/Storage-Unit-Clean-Out'><span>Storage Unit Clean Out</span></Link>
                  <Link to='/services/Warehouse-Clean-Out'><span>Warehouse Clean Out</span></Link>
                </div>
              </div>
              <div id='furniture' className='service-box'>
                <div id='furniture-title' className='service-title'>
                  <Link to='/services/Furniture-Junk-Removal'><span>Furniture Junk Removal</span></Link>
                </div>
                <div id='furniture-list' className='service-list'>
                  <Link to='/services/Couch-Removal'><span>Couch Removal</span></Link>
                  <Link to='/services/Dresser-Removal'><span>Dresser Removal</span></Link>
                  <Link to='/services/Entertainment-Center-Removal'><span>Entertainment Center Removal</span></Link>
                  <Link to='/services/Table-and-Chairs-Removal'><span>Table and Chairs Removal</span></Link>
                  <Link to='/services/TV-Removal'><span>TV Removal</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
