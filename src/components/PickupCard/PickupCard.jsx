import './PickupCard.css'
import * as orderService from '../../services/orderService'

const PickupCard = ({ profile, order }) => {

  const handleDelete = async (id) => {
    await orderService.deleteOrder(order.id)
  }

  return ( 
    <>
          <div className="singleOrderCard">
            <p>{order.date}</p>
            <p>{order.comments}</p>
            <p>
              {order.cost !==0 ? order.cost : null}
            </p>
            <p>{order.status}</p>
              {order.status === 'pending' ? <button type="button" onClick={handleDelete} className="deleteBtn" >Cancel</button> : null}
          </div>
    </>
   );
}
 
export default PickupCard;