import './PickupHistory.css'
import * as orderService from '../../services/orderService'
import PickupCard from '../PickupCard/PickupCard'


const PickupHistory = ({ profile, orders }) => {

  let myOrders = orders.filter(order => order.profile_id===profile.id)

  

  return ( 
    <div className="shell">
      <h2>Your Pickup History</h2>
      {myOrders.map((order)=> (
        <PickupCard profile={profile} order={order} key={order.id} />
      ))}
    </div>
   );
}
 
export default PickupHistory;