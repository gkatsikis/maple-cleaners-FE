import './BossView.css'

// Components
import PendingRequests from '../../components/PendingRequests/PendingRequests';

// React & Services
import * as profileService from '../../services/profileService'
import React, { useState, useEffect } from 'react';


const BossView = ({ profile, user, orders }) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await profileService.getAllProfiles()
      setProfiles(data)
    }
    fetchData()
  }, [])  

  console.log('all the profiles', profiles)

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