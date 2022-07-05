import './UserView.css'
import AccountBalance from '../../components/AccountBalance/AccountBalance'



const UserView = ({ user, profile }) => {
  
  
  

  return ( 
    <div className="shell">
      <h1>Hey, {profile.name}</h1>
      <AccountBalance />
      {/* // request pickup button
      // PickupHistory */}
    </div>
   );
}
 
export default UserView;