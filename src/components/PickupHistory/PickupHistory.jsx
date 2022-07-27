import './PickupHistory.css'

const PickupHistory = ({ profile, orders }) => {
  return ( 
    <div className="shell">
      <h2>Your Pickup History</h2>
        {orders.map((order) => (
          <div className="singleOrderCard">
            <p>{order.date}</p>
            <p>{order.comments}</p>
            <p>
              {order.cost !==0 ? order.cost : 'pending'}
            </p>
          </div>
        ))}
    </div>
   );
}
 
export default PickupHistory;