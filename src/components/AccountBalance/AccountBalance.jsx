import './AccountBalance.css'
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';



const AccountBalance = ({ profile }) => {
  // const [accountBalance, setAccountBalance] = useState()

  
  
  return (
    <div className="shell">
      <h1>Your Account Balance</h1>
      <h2>{profile.balance === 0 ? "no payment is due at this time" : profile.balance}</h2>
      {profile.balance === 0 ? null : <Link to='/payment'>
        Pay Now
      </Link>}
    </div>
   );
}
 
export default AccountBalance;