import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/profiles/`

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
    const res = await fetch(`${BASE_URL}${id}`, {
      headers: {Authorization: `Bearer ${tokenService.getToken()}`},
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function update(profile) {
  try {
    const res = await fetch(`${BASE_URL}${profile.id}`,
    {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(profile)
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export { getAllProfiles, getOneProfile, update }
