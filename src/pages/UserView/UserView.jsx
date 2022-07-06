import './UserView.css'
import AccountBalance from '../../components/AccountBalance/AccountBalance'



const UserView = ({ user, profile }) => {
  
  console.log("lets see what this does", profile)
  
  if(!profile || !user){
    return null
  }
  return ( 
    <div className="shell">
      <h1>Hey, {user.name}</h1>
      <AccountBalance profile={profile} />
      {/* // request pickup button
      // PickupHistory */}
    </div>
   );
}
 
export default UserView;