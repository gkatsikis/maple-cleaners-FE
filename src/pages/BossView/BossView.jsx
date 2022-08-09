import './BossView.css'

// Components
import PendingRequests from '../../components/PendingRequests/PendingRequests';
import AllCustomers from '../../components/AllCustomers/AllCustomers.jsx'
import CurrentRequests from '../../components/CurrentRequests/CurrentRequests';

// React & Services
import * as profileService from '../../services/profileService'
import React, { useState, useEffect } from 'react';


const BossView = ({ user, orders, profiles }) => {
  
  return ( 
    <div className="shell">
      <h1>Welcome Boss</h1>
      <div className="top">
        <PendingRequests orders={orders} profiles={profiles} />
        <CurrentRequests profiles={profiles} orders={orders} />
        // Order History

      </div>
      <AllCustomers profiles={profiles} />
    </div>
   );
}
 
export default BossView;