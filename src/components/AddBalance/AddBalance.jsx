import './AddBalance.css'
import React, { useState } from 'react';


const AddBalance = (props) => {
  const [charge, setCharge] = useState({
    add: 0,
    sub: 0,
  })

  const handleChange = e => {
    setCharge({ ...charge, [e.target.name]: e.target.value })
  }

  return ( 
    <form className="addBalance">
      <label htmlFor="add-balance">Add Balance</label>
      <input
        required name="add"
        value={charge.add}
        onChange={handleChange}
      />
      <label htmlFor="subtract-balance">Subtract Balance</label>
      <input
        required name="sub"
        value={charge.sub}
      />
        <button>Change Balance</button>
    </form>
   );
}
 
export default AddBalance;