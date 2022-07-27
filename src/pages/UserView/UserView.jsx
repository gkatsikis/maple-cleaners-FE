import './UserView.css'

// Components
import AccountBalance from '../../components/AccountBalance/AccountBalance'
import PickupHistory from '../../components/PickupHistory/PickupHistory'
import Request from '../Request/Request'



const UserView = ({ user, profile }) => {
  
  
  
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
      <PickupHistory profile={profile} />
    </div>
   );
}
 
export default UserView;