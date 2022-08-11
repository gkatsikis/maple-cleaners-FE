import './CurrentRequests.css'
import CurrentRequest from '../CurrentRequest/CurrentRequest';

const CurrentRequests = ({
  profiles,
  orders,
  updateOrder
}) => {

  let currentOrders = orders.filter(order => order.status=== 'accepted')

  return ( 
    <div className="currentRequests">
      <h1>Current Requests</h1>
      {currentOrders.map((order) => {
        let profile = profiles.find(profile=> profile.id===order.profile_id)
        return <CurrentRequest order={order} profile={profile} updateOrder={updateOrder} key={order.id} />
      })}
    </div>
   );
}
 
export default CurrentRequests;