import './CustomerProfile.css'
import * as profileService from '../../services/profileService'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


const CustomerProfile = ({ profiles }) => {
  const [custProfile, setCustProfile] = useState()
  const { id } = useParams()

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const profileData = await profileService.getOneProfile(id)
  //       setCustProfile(profileData)
  //     } catch (error) {
  //       throw error
  //     }
  //   }
  //   fetchProfile()
  // }, [id])

  // console.log('look here yo', custProfile.profile.name)

  return ( 
    <div className="customerProfile">
      <h1>Name in Customer Profile</h1>
      {/* <CustomerInfo />
      <OrderHistory />
      <ContactCustomer />
      <AddBalance /> */}
    </div>
   );
}
 
export default CustomerProfile;