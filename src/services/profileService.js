import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/profiles`

async function getAllProfiles() {
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

async function getOneProfile(id) {
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

export { getAllProfiles, getOneProfile }
