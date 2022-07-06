import './UserView.css'

// Components
import AccountBalance from '../../components/AccountBalance/AccountBalance'
import PickupHistory from '../../components/PickupHistory/PickupHistory'
import Request from '../Request/Request'

// React
import { Link } from 'react-router-dom'



const UserView = ({ user, profile }) => {
  
  console.log("lets see what this does", profile)
  
  if(!profile || !user){
    return null
  }
  return ( 
    <div className="shell">
      <h1>Hey, {user.name}</h1>
      <AccountBalance profile={profile} />
      <Link to='/payment'>
        Pay Now
      </Link>
      <Request />
      <PickupHistory />
    </div>
   );
}
 
export default UserView;