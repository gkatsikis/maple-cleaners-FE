import { Navigate } from 'react-router-dom'
import './CurrentRequest.css'


const CurrentRequest = ({ 
  profile, 
  order, 
  updateOrder 
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedOrder = {
      ...order,
      status: "completed",
    }
    updateOrder(updatedOrder)
    Navigate('/customer/:id')
  }

    return ( 
      <div className="oneRequest">
        <p>{profile.name} </p>
        <p>{profile.address}</p>
        <p>{order.date}</p>
        <button type="submit" onClick={handleSubmit}>Mark Completed</button>
      </div>
     );
  }
 
export default CurrentRequest;