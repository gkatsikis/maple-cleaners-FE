import './UserView.css'

// Components
import AccountBalance from '../../components/AccountBalance/AccountBalance'
import PickupHistory from '../../components/PickupHistory/PickupHistory'
import Request from '../Request/Request'



const UserView = ({ user, profile, orders, setOrders }) => {
  
  
  
  if(!profile || !user){
    return null
  }
  return ( 
    <div className="shell">
      <h1>Hey, {user.name}</h1>
      <div className="customerBox">
      <AccountBalance profile={profile} />
      <Request />
      </div>
      <PickupHistory orders={orders} profile={profile} setOrders={setOrders} />
    </div>
   );
}
 
export default UserView;