import './PendingRequest.css'


const PendingRequest = ({ profile, order }) => {
    
   
     /*
    / I want to use a useEffect that does nothing if there is not !root of all my problems and see if that works
    */

    return ( 
      <div className="oneRequest">
        <p>Name:{profile.name} </p>
      </div>
     );
  }
  // may have to do a global conditional based off of profiles and orders in order for it to work
 
export default PendingRequest;