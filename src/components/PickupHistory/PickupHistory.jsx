import './PickupHistory.css'
import PickupCard from '../PickupCard/PickupCard'


const PickupHistory = ({ profile, orders }) => {

  if(!profile){
    return (
      <p>loading page...</p>
    )
  } else {

  let myOrders = orders.filter(order => order.profile_id===profile.id)
  
  return ( 
    <div className="shell">
      <h2>Your Pickup History</h2>
      {myOrders.map((order)=> (
        <PickupCard profile={profile} order={order} key={order.id} />
      ))}
    </div>
   )
  };
}
 
export default PickupHistory;