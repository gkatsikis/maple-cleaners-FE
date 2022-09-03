import './AddBalance.css'
import React, { useState } from 'react';


const AddBalance = ({ profile, updateProfile }) => {
  const [charge, setCharge] = useState(0)

  const handleChange = e => {
    setCharge({ ...charge, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedProfile = {
      ...profile,
      balance: parseInt(charge.amount) + profile.balance
      // parseInt(charge)
    }
    updateProfile(updatedProfile)
  }
  console.log(charge.amount)
  // handle submit function is turning prior balances of $0 to null with any addition/ likely server-side error
  return ( 
    <form className="addBalance">
      <label htmlFor="add-balance">Modify Balance</label>
      <input
        required name="amount"
        value={charge.amount}
        onChange={handleChange}
      />
        <button type="submit" onClick={handleSubmit}>Change Balance</button>
    </form>
   );
}
 
export default AddBalance;