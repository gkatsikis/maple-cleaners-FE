import './OrderHistory.css'
import Order from '../../components/Order/Order';

const OrderHistory = ({ orders }) => {
  if(!orders){
    return 'loading...'
  }
  console.log('here', orders)

  return ( 
    <div className="orderhistory">
      <h1>Order History</h1>
      {orders.map((order) => (
        <Order order={order} key={order.id} />
      ))}
    </div>
   );
}
 
export default OrderHistory;