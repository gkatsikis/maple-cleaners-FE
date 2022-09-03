import './CurrentRequest.css'
import { useNavigate } from 'react-router-dom'


const CurrentRequest = ({ 
  profile, 
  order, 
  updateOrder 
}) => {

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedOrder = {
      ...order,
      status: "completed",
    }
    updateOrder(updatedOrder)
    navigate('/customer/:id')
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