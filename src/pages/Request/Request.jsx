import './Request.css'

import * as orderService from '../../services/orderService'
import React, { useState } from 'react';


const Request = (props) => {
  const [formData, setFormData] = useState({
    date: '',
    comments: '',
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await orderService.createOrder(formData)
    } catch (error) {
      console.log('something went wrong trying to create an order')
    }
  }

  return ( 
    <div className="shell">
      <h2>Request Pick Up</h2>
      <form
        onSubmit={handleSubmit}
        className="requestForm"
      >
        <label htmlFor="date" className="date">
          Date
        </label>
        <input
          type="date"
          value={formData.date}
          name="date"
          onChange={handleChange}
        />
        <label htmlFor="comments" className="comments">
          Comments
        </label>
        <textarea 
          className="commentBox"
          value={formData.comments}
          name="comments"
          onChange={handleChange}
        />
        <button className="orderButton">Request Pickup</button>
      </form>
    </div>
   );
}
 
export default Request;