import './CustomerProfile.css'
import AddBalance from '../../components/AddBalance/AddBalance';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


const CustomerProfile = ({ profiles }) => {
  const [custProfile, setCustProfile] = useState()
  const { id } = useParams()

  useEffect(() => {
    const getProfile = async () => {
      try {
        const prof = profiles.find(profile =>
          profile.id === parseInt(id)
        )
        setCustProfile(prof)
      } catch (error) {
        throw error
      }
    }
    getProfile()
  }, [profiles, id])

  if(!custProfile){
    return 'loading...'
  }

  return ( 
    <div className="customerProfile">
      <h2>{custProfile.name}</h2>
      <h3>{custProfile.address} 0{custProfile.zipcode}</h3>
      <h3>Balance: ${custProfile.balance}</h3>
      {/*
      <OrderHistory />
      <ContactCustomer />
       */}
      <AddBalance profile={custProfile} />
    </div>
   );
}
 
export default CustomerProfile;