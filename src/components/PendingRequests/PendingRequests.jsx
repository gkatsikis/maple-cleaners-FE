import './PendingRequests.css'
import PendingRequest from '../PendingRequest/PendingRequest';


const PendingRequests = ({ profiles, orders }) => {

  let pendingOrders = orders.filter(order => order.status === 'pending'
  )
  
  return ( 
    <div className="pendingRequests">
      <h1>Pending Requests</h1>
      {pendingOrders.map((order) => {
        let profile = profiles.find(profile=> profile.id===order.profile_id)
        return <PendingRequest order={order} profile={profile} key={order.id} />
      })}
    </div>
   );
}
 
export default PendingRequests;