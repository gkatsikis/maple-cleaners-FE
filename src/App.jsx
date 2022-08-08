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
import Payment from './pages/Payment/Payment'
import CustomerProfile from './pages/CustomerProfile/CustomerProfile'

//Services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as orderService from './services/orderService'

const App = () => {
  const [user, setUser] = useState()
  const [profile, setProfile] = useState()
  const [profiles, setProfiles] = useState([])
  const [orders, setOrders] = useState([])
  
  const navigate = useNavigate()

  useEffect(()=> {
    const fetchData = async () => {
      const data = await authService.getUser()
      setUser(data)
    }
    fetchData()
    return function cleanup(){
      setUser()
    }
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
    return function cleanup(){
      setProfile()
    }
  }, [user])

  useEffect(() => {
    const fetchData = async () => {
      const data = await profileService.getAllProfiles()
      setProfiles(data)
    }
    fetchData()
  }, [])

  useEffect(()=> {
    const fetchData = async () => {
      const data = await orderService.getAllOrders()
      setOrders(data)
    }
    fetchData()
    return function cleanup(){
      setOrders()
    }
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
          element={user ? <UserView user={user} profile={profile} orders={orders} setOrders={setOrders} /> : <Navigate to="/login" />}
        />
        <Route
          path="/boss"
          element={user ? <BossView user={user} orders={orders} profiles={profiles} /> : <Navigate to="/login" />}
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
        <Route
          path="/customer/:id"
          element={<CustomerProfile profiles={profiles} />}
        />
      </Routes>
    </>
  )
}

export default App
