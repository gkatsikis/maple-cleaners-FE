import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/orders`

async function getAllOrders() {
  try {
    const res = await fetch(BASE_URL, {
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
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: {Authorization: `Bearer ${tokenService.getToken()}`},
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export { getAllOrders, getOneOrder }