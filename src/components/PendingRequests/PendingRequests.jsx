import './PendingRequests.css'
import PendingRequest from '../PendingRequest/PendingRequest';


const PendingRequests = ({ profiles, orders }) => {

  let pendingOrders = orders.filter(order => order.status === 'pending'
  )

  console.log('pend', pendingOrders)

  return ( 
    <div className="shell">
      <h1>Pending Requests</h1>
      {pendingOrders.map((order) => (
        <PendingRequest order={order} profiles={profiles} key={order.id} />
      ))}
    </div>
   );
}
 
export default PendingRequests;