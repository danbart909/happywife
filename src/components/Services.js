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
          <div id='our-services'>
            <div id='services-title'>
              <span>Our Services</span>
            </div>
            <div id='services-container-jr'>
              <div id='residential' className='service-box'>
                <div id='residential-title' className='service-title'>
                  <Link to='/services/ResidentialJunkRemoval'><span>Residential Junk Removal</span></Link>
                </div>
                <div id='residential-list' className='service-list'>
                  <Link to='/services/ApplianceRemoval'><span>Appliance Removal</span></Link>
                  <Link to='/services/AtticJunkRemoval'><span>Attic Junk Removal</span></Link>
                  <Link to='/services/BasementCleanOut'><span>Basement Clean Out</span></Link>
                  <Link to='/services/BulkTrashPickUp'><span>Bulk Trash Pick-up</span></Link>
                  <Link to='/services/FreezerRemoval'><span>Freezer Removal</span></Link>
                  <Link to='/services/GarageCleanOut'><span>Garage Clean Out</span></Link>
                  <Link to='/services/GrillRemoval'><span>Grill Removal</span></Link>
                  <Link to='/services/HouseholdJunkRemoval'><span>Household Junk Removal</span></Link>
                  <Link to='/services/MattressRemoval'><span>Mattress Removal</span></Link>
                  <Link to='/services/MovingJunk'><span>Moving Junk</span></Link>
                  <Link to='/services/OvenRemoval'><span>Oven Removal</span></Link>
                  <Link to='/services/RefrigeratorRemoval'><span>Refrigerator Removal</span></Link>
                  <Link to='/services/StoveRemoval'><span>Stove Removal</span></Link>
                  <Link to='/services/WasherAndDryerRemoval'><span>Washer and Dryer Removal</span></Link>
                  <Link to='/services/YardDebrisRemoval'><span>Yard Debris Removal</span></Link>
                </div>
              </div>
              <div id='commercial' className='service-box'>
                <div id='commercial-title' className='service-title'>
                  <Link to='/services/CommercialJunkRemoval'><span>Commercial Junk Removal</span></Link>
                </div>
                <div id='commercial-list' className='service-list'>
                  <Link to='/services/ApartmentCleanOut'><span>Apartment Clean Out</span></Link>
                  <Link to='/services/CarpetRemoval'><span>Carpet Removal</span></Link>
                  <Link to='/services/ForeclosureJunkRemoval'><span>Foreclosure Junk Removal</span></Link>
                  <Link to='/services/OfficeJunkRemoval'><span>Office Junk Removal</span></Link>
                  <Link to='/services/StorageUnitCleanOut'><span>Storage Unit Clean Out</span></Link>
                  <Link to='/services/WarehouseCleanOut'><span>Warehouse Clean Out</span></Link>
                </div>
              </div>
              <div id='furniture' className='service-box'>
                <div id='furniture-title' className='service-title'>
                  <Link to='/services/FurnitureJunkRemoval'><span>Furniture Junk Removal</span></Link>
                </div>
                <div id='furniture-list' className='service-list'>
                  <Link to='/services/CouchRemoval'><span>Couch Removal</span></Link>
                  <Link to='/services/DresserRemoval'><span>Dresser Removal</span></Link>
                  <Link to='/services/EWasteRemoval'><span>E-Waste Removal</span></Link>
                  <Link to='/services/EntertainmentCenterRemoval'><span>Entertainment Center Removal</span></Link>
                  <Link to='/services/LoveSeatRemoval'><span>Love Seat Removal</span></Link>
                  <Link to='/services/ReclinerRemoval'><span>Recliner Removal</span></Link>
                  <Link to='/services/TableAndChairsRemoval'><span>Table and Chairs Removal</span></Link>
                  <Link to='/services/TVRemoval'><span>TV Removal</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
