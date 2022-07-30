import './PendingRequests.css'
import PendingRequest from '../PendingRequest/PendingRequest';


const PendingRequests = ({ orders }) => {

  let pendingOrders = orders.filter(order => order.status === 'pending'
  )

  console.log('pend', pendingOrders)

  return ( 
    <div className="shell">
      <h1>Pending Requests</h1>
    </div>
   );
}
 
export default PendingRequests;