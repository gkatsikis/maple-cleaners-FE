import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/orders/`

async function createOrder(order) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(order),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function getAllOrders() {
  try {
    const res = await fetch(BASE_URL, {
      method: "GET",
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function getOneOrder(id) {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      headers: {Authorization: `Bearer ${tokenService.getToken()}`},
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function deleteOrder(id) {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

const update = async (order) => {
  try {
    const res = await fetch(`${BASE_URL}${order.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(order)
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export { getAllOrders, getOneOrder, createOrder, deleteOrder, update }