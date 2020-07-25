import React, { Component } from 'react'
import { Tabs, TabLink, TabContent } from 'react-tabs-redux'

export default class FooterTabs extends Component {
  render() {

    return (
      <Tabs className='footer-tabs'>
        <div id='tab-labels'>
          <TabLink component='div' to='info' className='hvr-trim tab-link'><span>Info</span></TabLink>
          <TabLink component='div' to='services' className='hvr-trim tab-link'><span>Services</span></TabLink>
          <TabLink component='div' to='zip' className='hvr-trim tab-link'><span>Zip</span></TabLink>
          <TabLink component='div' to='areas' className='hvr-trim tab-link'><span>Areas</span></TabLink>
          <TabLink component='div' to='cities' className='hvr-trim tab-link'><span>Cities</span></TabLink>
        </div>

        <TabContent for="info">
          <div id='footer-info-title' className='footer-title'>Our Info</div>
          <div className='footer-tab-content' id='footer-info-body'>
            <div id='footer-info-1' className='footer-info-box'>
              <span>Pretty Good Inc, DBA</span>
              <span>Happy Wife Junk Removal</span>
            </div>
            <div id='footer-info-2' className='footer-info-box'>
              <span>1820 Tree Top Way</span>
              <span>Marietta, GA 30062</span>
            </div>
            <div id='footer-info-3' className='footer-info-box'>
              <span>david@prettygood.com</span>
              <span>770.873.0803</span>
            </div>
          </div>
        </TabContent>
        <TabContent for="services">
          <div id='footer-services-title' className='footer-title'>Our Services</div>
          <div className='footer-tab-content' id='footer-services-body'>
            <span>Appliance Removal</span>
            <span>Attic Junk Removal</span>
            <span>Basement Clean Out</span>
            <span>Bulk Trash Pick-up</span>
            <span>Freezer Removal</span>
            <span>Garage Clean Out</span>
            <span>Grill Removal</span>
            <span>Household Junk Removal</span>
            <span>Mattress Removal</span>
            <span>Moving Junk</span>
            <span>Oven Removal</span>
            <span>Refrigerator Removal</span>
            <span>Stove Removal</span>
            <span>Washer and Dryer Removal</span>
            <span>Yard Debris Removal</span>
            <span>Apartment Clean Out</span>
            <span>Carpet Removal</span>
            <span>Foreclosure Junk Removal</span>
            <span>Office Junk Removal</span>
            <span>Storage Unit Clean Out</span>
            <span>Warehouse Clean Out</span>
            <span>Couch Removal</span>
            <span>Dresser Removal</span>
            <span>E-Waste Removal</span>
            <span>Entertainment Center Removal</span>
            <span>Love Seat Removal</span>
            <span>Recliner Removal</span>
            <span>Table and Chairs Removal</span>
            <span>TV Removal</span>
          </div>
        </TabContent>
        <TabContent for="zip">
          <div id='footer-zip-title' className='footer-title'>Our Zip Codes</div>
          <div className='footer-tab-content' id='footer-zip-body'>
            <span>30060</span>
            <span>30062</span>
            <span>30064</span>
            <span>30066</span>
            <span>30067</span>
            <span>30068</span>
            <span>30080</span>
            <span>30082</span>
            <span>30106</span>
            <span>30126</span>
            <span>30127</span>
          </div>
        </TabContent>
        <TabContent for="areas">
          <div id='footer-areas-title' className='footer-title'>Our Areas</div>
          <div className='footer-tab-content' id='footer-areas-body'>
            <span>Cobb County</span>
            <span>East Cobb</span>
            <span>North Cobb</span>
            <span>South Cobb</span>
            <span>West Cobb</span>
          </div>
        </TabContent>
        <TabContent for="cities">
          <div id='footer-cities-title' className='footer-title'>Our Cities</div>
          <div className='footer-tab-content' id='footer-cities-body'>
            <span>Acworth</span>
            <span>Austell</span>
            <span>Kennesaw</span>
            <span>Marietta</span>
            <span>Mableton</span>
            <span>Powder Springs</span>
            <span>Roswell</span>
            <span>Smyrna</span>
            <span>Vinings</span>
            <span>Woodstock</span>
          </div>
        </TabContent>
      </Tabs>
    )
  }
}