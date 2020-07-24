import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default class Areas extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Service Areas</title>
          <meta name="description" content="Happy Wife - Service Areas" />
        </Helmet>
        <div id='area-container'>
          <div id='service-areas'>
            <div id='areas-title'>
              <span>Our Service Areas</span>
            </div>
            <div id='areas-list'>
              <Link to='/areas/Acworth'><span>Acworth</span></Link>
              <Link to='/areas/Austell'><span>Austell</span></Link>
              <Link to='/areas/Kennesaw'><span>Kennesaw</span></Link>
              <Link to='/areas/Marietta'><span>Marietta</span></Link>
              <Link to='/areas/Mableton'><span>Mableton</span></Link>
              <Link to='/areas/PowderSprings'><span>Powder Springs</span></Link>
              <Link to='/areas/Roswell'><span>Roswell</span></Link>
              <Link to='/areas/Smyrna'><span>Smyrna</span></Link>
              <Link to='/areas/Vinings'><span>Vinings</span></Link>
              <Link to='/areas/Woodstock'><span>Woodstock</span></Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}