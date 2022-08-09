import './PendingRequest.css'


const PendingRequest = ({ profile, order }) => {

    // handle update needs to be passed down to go from pending to active

    return ( 
      <div className="oneRequest">
        <p>{profile.name} </p>
        <p>{profile.address}</p>
        <p>{order.date}</p>
      </div>
     );
  }
  // may have to do a global conditional based off of profiles and orders in order for it to work
 
export default PendingRequest;