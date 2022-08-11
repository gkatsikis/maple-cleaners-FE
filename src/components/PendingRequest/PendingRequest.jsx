import './PendingRequest.css'


const PendingRequest = ({ 
  profile, 
  order, 
  updateOrder 
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedOrder = {
      ...order,
      status: "accepted",
    }
    
    console.log(updatedOrder)
    updateOrder(updatedOrder)
  }

    return ( 
      <div className="oneRequest">
        <p>{profile.name} </p>
        <p>{profile.address}</p>
        <p>{order.date}</p>
        <button type="submit" onClick={handleSubmit} >Accept Order</button>
      </div>
     );
  }
 
export default PendingRequest;