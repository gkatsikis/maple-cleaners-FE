import './BossView.css'

// Components
import PendingRequests from '../../components/PendingRequests/PendingRequests';

// React & Services
import * as profileService from '../../services/profileService'
import React, { useEffect } from 'react';


const BossView = ({ profile, user, orders }) => {

  useEffect(() => {
    const fetchData = async () => {
      const data = await profileService.getAllProfiles()
    }
    fetchData()
  }, [])  

  return ( 
    <div className="shell">
      <h1>Welcome Boss</h1>
      <PendingRequests orders={orders} />
      {/*
      CurrentRequests
      Request History Button
      Search Customers 
      */}
    </div>
   );
}
 
export default BossView;