import './PickupHistory.css'

const PickupHistory = ({ profile, orders }) => {

  let myOrders = orders.filter(order => order.profile_id===profile.id)
  console.log('personal orders', myOrders)
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
          </div>
        ))}
    </div>
   );
}
 
export default PickupHistory;