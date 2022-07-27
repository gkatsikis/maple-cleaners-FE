// React
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// Components
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import UserView from './pages/UserView/UserView'
import BossView from './pages/BossView/BossView'
import Profiles from './pages/Profiles/Profiles'
import Request from './pages/Request/Request'
import Payment from './pages/Payment/Payment'

//Services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as orderService from './services/orderService'

const App = () => {
  const [user, setUser] = useState()
  const [profile, setProfile] = useState()
  const [orders, setOrders] = useState()
  
  const navigate = useNavigate()

  useEffect(()=> {
    const fetchData = async () => {
      const data = await authService.getUser()
      setUser(data)
    }
    fetchData()
  }, [])

  useEffect(()=> {
    if(!user){
      return
    }
    const fetchData = async () => {
      const data = await profileService.getOneProfile(user.id)
      setProfile(data.profile)
    }
    fetchData()
  }, [user])

  useEffect(()=> {
    const fetchData = async () => {
      const data = await orderService.getAllOrders()
      setOrders(data)
    }
    fetchData()
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/login')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={user ? <UserView user={user} profile={profile} /> : <Navigate to="/login" />}
        />
        <Route
          path="/boss"
          element={user ? <BossView user={user} profile={profile} /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} user={user} profile={profile} />}
        />
        <Route
          path="/payment"
          element={<Payment />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
