import './PickupHistory.css'
import * as orderService from '../../services/orderService'

const PickupHistory = ({ profile, orders }) => {

  let myOrders = orders.filter(order => order.profile_id===profile.id)

  const handleDelete = async (id) => {
    console.log('this is id', id)
    await orderService.deleteOrder(id)
  }

  return ( 
    <div className="shell">
      <h2>Your Pickup History</h2>
        {myOrders.map((order) => (
          <div className="singleOrderCard" key={order.id}>
            <p>{order.date}</p>
            <p>{order.comments}</p>
            <p>
              {order.cost !==0 ? order.cost : null}
            </p>
            <p>{order.status}</p>
              {order.status === 'pending' ? <button type="button" onClick={handleDelete} className="deleteBtn" >Cancel</button> : null}
          </div>
        ))}
    </div>
   );
}
 
export default PickupHistory;