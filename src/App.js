import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Sticky } from 'semantic-ui-react'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import Home from './components/Home'
import Areas from './components/Areas'
import Services from './components/Services'
import Pricing from './components/Pricing'
import BookNow from './components/BookNow'
import Footer from './components/Footer'
import ScrollToTop from './modules/ScrollToTop'
import FooterTabs from './modules/FooterTabs'
import Acworth from './pages/areas/Acworth'
import Austell from './pages/areas/Austell'
import Kennesaw from './pages/areas/Kennesaw'
import Mableton from './pages/areas/Mableton'
import Marietta from './pages/areas/Marietta'
import PowderSprings from './pages/areas/PowderSprings'
import Roswell from './pages/areas/Roswell'
import Smyrna from './pages/areas/Smyrna'
import Vinings from './pages/areas/Vinings'
import Woodstock from './pages/areas/Woodstock'
import ResidentialJunkRemoval from './pages/services/ResidentialJunkRemoval'
import ApplianceRemoval from './pages/services/ApplianceRemoval'
import AtticJunkRemoval from './pages/services/AtticJunkRemoval'
import BasementCleanOut from './pages/services/BasementCleanOut'
import BulkTrashPickUp from './pages/services/BulkTrashPickUp'
import FreezerRemoval from './pages/services/FreezerRemoval'
import GarageCleanOut from './pages/services/GarageCleanOut'
import GrillRemoval from './pages/services/GrillRemoval'
import HouseholdJunkRemoval from './pages/services/HouseholdJunkRemoval'
import MattressRemoval from './pages/services/MattressRemoval'
import MovingJunk from './pages/services/MovingJunk'
import OvenRemoval from './pages/services/OvenRemoval'
import RefrigeratorRemoval from './pages/services/RefrigeratorRemoval'
import StoveRemoval from './pages/services/StoveRemoval'
import WasherAndDryerRemoval from './pages/services/WasherAndDryerRemoval'
import YardDebrisRemoval from './pages/services/YardDebrisRemoval'
import CommercialJunkRemoval from './pages/services/CommercialJunkRemoval'
import ApartmentCleanOut from './pages/services/ApartmentCleanOut'
import CarpetRemoval from './pages/services/CarpetRemoval'
import ForeclosureJunkRemoval from './pages/services/ForeclosureJunkRemoval'
import OfficeJunkRemoval from './pages/services/OfficeJunkRemoval'
import StorageUnitCleanOut from './pages/services/StorageUnitCleanOut'
import WarehouseCleanOut from './pages/services/WarehouseCleanOut'
import FurnitureJunkRemoval from './pages/services/FurnitureJunkRemoval'
import CouchRemoval from './pages/services/CouchRemoval'
import DresserRemoval from './pages/services/DresserRemoval'
import EWasteRemoval from './pages/services/EWasteRemoval'
import EntertainmentCenterRemoval from './pages/services/EntertainmentCenterRemoval'
import LoveSeatRemoval from './pages/services/LoveSeatRemoval'
import ReclinerRemoval from './pages/services/ReclinerRemoval'
import TableAndChairsRemoval from './pages/services/TableAndChairsRemoval'
import TVRemoval from './pages/services/TVRemoval'
import $ from 'jquery'

export default class App extends Component {
  render() {

    $(document).ready(function() {
      document.getElementsByTagName("html")[0].style.visibility = "visible";
    });

    return (
      <div id='overlord'>
        <div id='nav'>
          <TopNav />
          <Sticky>
            <BottomNav />
          </Sticky>
        </div>
        <div id='body'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/areas/Acworth-Junk-Removal' component={Acworth} />
            <Route path='/areas/Austell-Junk-Removal' component={Austell} />
            <Route path='/areas/Kennesaw-Junk-Removal' component={Kennesaw} />
            <Route path='/areas/Mableton-Junk-Removal' component={Mableton} />
            <Route path='/areas/Marietta-Junk-Removal' component={Marietta} />
            <Route path='/areas/PowderSprings-Junk-Removal' component={PowderSprings} />
            <Route path='/areas/Roswell-Junk-Removal' component={Roswell} />
            <Route path='/areas/Smyrna-Junk-Removal' component={Smyrna} />
            <Route path='/areas/Vinings-Junk-Removal' component={Vinings} />
            <Route path='/areas/Woodstock-Junk-Removal' component={Woodstock} />
            <Route path='/services/Residential-Junk-Removal' component={ResidentialJunkRemoval} />
            <Route path='/services/Appliance-Removal' component={ApplianceRemoval} />
            <Route path='/services/Attic-Junk-Removal' component={AtticJunkRemoval} />
            <Route path='/services/Basement-Clean-Out' component={BasementCleanOut} />
            <Route path='/services/Bulk-Trash-Pick-Up' component={BulkTrashPickUp} />
            <Route path='/services/Freezer-Removal' component={FreezerRemoval} />
            <Route path='/services/Garage-Clean-Out' component={GarageCleanOut} />
            <Route path='/services/Grill-Removal' component={GrillRemoval} />
            <Route path='/services/Household-Junk-Removal' component={HouseholdJunkRemoval} />
            <Route path='/services/Mattress-Removal' component={MattressRemoval} />
            <Route path='/services/Moving-Junk' component={MovingJunk} />
            <Route path='/services/Oven-Removal' component={OvenRemoval} />
            <Route path='/services/Refrigerator-Removal' component={RefrigeratorRemoval} />
            <Route path='/services/Stove-Removal' component={StoveRemoval} />
            <Route path='/services/Washer-and-Dryer-Removal' component={WasherAndDryerRemoval} />
            <Route path='/services/Yard-Debris-Removal' component={YardDebrisRemoval} />
            <Route path='/services/Commercial-Junk-Removal' component={CommercialJunkRemoval} />
            <Route path='/services/Apartment-Clean-Out' component={ApartmentCleanOut} />
            <Route path='/services/Carpet-Removal' component={CarpetRemoval} />
            <Route path='/services/Foreclosure-Junk-Removal' component={ForeclosureJunkRemoval} />
            <Route path='/services/Office-Junk-Removal' component={OfficeJunkRemoval} />
            <Route path='/services/Storage-Unit-Clean-Out' component={StorageUnitCleanOut} />
            <Route path='/services/Warehouse-Clean-Out' component={WarehouseCleanOut} />
            <Route path='/services/Furniture-Junk-Removal' component={FurnitureJunkRemoval} />
            <Route path='/services/Couch-Removal' component={CouchRemoval} />
            <Route path='/services/Dresser-Removal' component={DresserRemoval} />
            <Route path='/services/E-Waste-Removal' component={EWasteRemoval} />
            <Route path='/services/Entertainment-Center-Removal' component={EntertainmentCenterRemoval} />
            <Route path='/services/Love-Seat-Removal' component={LoveSeatRemoval} />
            <Route path='/services/Recliner-Removal' component={ReclinerRemoval} />
            <Route path='/services/Table-and-Chairs-Removal' component={TableAndChairsRemoval} />
            <Route path='/services/TV-Removal' component={TVRemoval} />
            <Route path='/areas' component={Areas} />
            <Route path='/services' component={Services} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/booknow' component={BookNow} />
          </Switch>
        </div>
        <ScrollToTop />
        <div id='footertabs'>
          <FooterTabs />
        </div>
        <div id='footer'>
          <Footer />
        </div>
      </div>
    )
  }
}