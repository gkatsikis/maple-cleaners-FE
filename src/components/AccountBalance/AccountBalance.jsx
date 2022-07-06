import './AccountBalance.css'
// import React, { useState, useEffect } from 'react';



const AccountBalance = ({ profile }) => {
  // const [accountBalance, setAccountBalance] = useState()

  // useEffect(()=> {
  //   const fetchData = async () => {
  //     const data = profile.balance
  //   }
  // }, (profile.balance))

  return ( 
    <div className="shell">
      <h1>Your Account Balance</h1>
      {/* <h2>{profile.balance}</h2> */}
      {/* <h2>{profile.balance === 0 ? 0.00 : profile.balance}</h2> */}
    </div>
   );
}
 
export default AccountBalance;