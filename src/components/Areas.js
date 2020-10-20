import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Roswell from '../pages/areas/Roswell';
import $ from 'jquery'

export default class Areas extends Component {
  render() {

    $(document).ready(function () {

      $('#areas-title').fadeIn(4000, 'linear')

      $('.acworth').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/q1shkdc.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.austell').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/xxASiH7.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.kennesaw').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/b6RqwPU.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.marietta').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/bNArkD5.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.mableton').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/H55jJQD.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.powdersprings').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/VwCkOY0.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.roswell').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/wC2yC1k.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.smyrna').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/Qb2P44a.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.vinings').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/rahFD2X.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.woodstock').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/SECGbkl.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

    });

    return (
      <>
        <Helmet>
          <title>Service Areas</title>
          <meta name="description" content="Happy Wife - Service Areas" />
        </Helmet>
        <div id='area-container'>
          <div id='service-areas'>
            <div className='gD-title'>
              <span>Our Service Areas</span>
            </div>

            <div id='areas-body'>

              <div id='areas-list'>
                <Link className='acworth' to='/areas/Acworth-Junk-Removal'><span>Acworth</span></Link>
                <Link className='austell' to='/areas/Austell-Junk-Removal'><span>Austell</span></Link>
                <Link className='kennesaw' to='/areas/Kennesaw-Junk-Removal'><span>Kennesaw</span></Link>
                <Link className='marietta' to='/areas/Marietta-Junk-Removal'><span>Marietta</span></Link>
                <Link className='mableton' to='/areas/Mableton-Junk-Removal'><span>Mableton</span></Link>
                <Link className='powdersprings' to='/areas/PowderSprings-Junk-Removal'><span>Powder Springs</span></Link>
                <Link className='roswell' to='/areas/Roswell-Junk-Removal'><span>Roswell</span></Link>
                <Link className='smyrna' to='/areas/Smyrna-Junk-Removal'><span>Smyrna</span></Link>
                <Link className='vinings' to='/areas/Vinings-Junk-Removal'><span>Vinings</span></Link>
                <Link className='woodstock' to='/areas/Woodstock-Junk-Removal'><span>Woodstock</span></Link>
              </div>

              <div id='areas-map-container'>
                <div id='areas-map'></div>
              </div>

            </div>

          </div>
        </div>
      </>
    )
  }
}