import './PendingRequest.css'

const PendingRequest = ({ profiles, order }) => {

  let prof = profiles.filter(profile => 
    profile.id === order.profile_id ? profile : null
  )
  // may have to do a global conditional based off of profiles and orders in order for it to work
  console.log('profname', prof[0].name)

  return ( 
    <div className="oneRequest">
      <p></p>
    </div>
   );
}
 
export default PendingRequest;