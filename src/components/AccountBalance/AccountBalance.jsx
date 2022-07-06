import './AccountBalance.css'
import React, { useEffect } from 'react';



const AccountBalance = ({ profile }) => {
  // const [accountBalance, setAccountBalance] = useState()

  return ( 
    <div className="shell">
      <h1>Your Account Balance</h1>
      <h2>{profile.balance === 0 ? "no payment is due at this time" : profile.balance}</h2>
    </div>
   );
}
 
export default AccountBalance;