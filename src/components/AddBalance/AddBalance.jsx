import './AddBalance.css'
import React, { useState } from 'react';


const AddBalance = ({ profile }) => {
  console.log('hello', profile)
  const [charge, setCharge] = useState(0)

  const handleChange = e => {
    setCharge({ ...charge, [e.target.name]: e.target.value })
  }

  return ( 
    <form className="addBalance">
      <label htmlFor="add-balance">Modify Balance</label>
      <input
        required name="modify"
        value={charge.modify}
        onChange={handleChange}
      />
        <button>Change Balance</button>
    </form>
   );
}
 
export default AddBalance;