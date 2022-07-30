import './BossView.css'

// Components
import PendingRequests from '../../components/PendingRequests/PendingRequests';

// React & Services
import * as profileService from '../../services/profileService'
import React, { useState, useEffect } from 'react';


const BossView = ({ user, orders }) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await profileService.getAllProfiles()
      setProfiles(data)
    }
    fetchData()
  }, [])  

  return ( 
    <div className="shell">
      <h1>Welcome Boss</h1>
      <PendingRequests orders={orders} profiles={profiles} />
      {/*
      <CurrentRequests profiles={profiles} orders={orders} />
      Request History Button
      <AllCustomers profiles={profiles} />
      */}
    </div>
   );
}
 
export default BossView;