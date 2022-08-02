import './PendingRequest.css'
import React, { useEffect } from 'react';


const PendingRequest = ({ profiles, order }) => {
    
    /*
    let pendingOrderProfile = profiles.filter(profile=> profile.id===order.profile_id)
    console.log('pendingprof', pendingOrderProfile[0].name)
    */

    return ( 
      <div className="oneRequest">
        <p></p>
      </div>
     );
  }
  // may have to do a global conditional based off of profiles and orders in order for it to work
 
export default PendingRequest;