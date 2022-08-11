import './CustomerProfile.css'
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
      <h1>Name in Customer Profile</h1>
      <h2>{custProfile.name}</h2>
      {/* <CustomerInfo />
      <OrderHistory />
      <ContactCustomer />
      <AddBalance /> */}
    </div>
   );
}
 
export default CustomerProfile;