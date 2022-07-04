import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import UserView from './pages/UserView/UserView'
import BossView from './pages/BossView/BossView'
import Profiles from './pages/Profiles/Profiles'
import * as authService from './services/authService'
import * as profileService from './services/profileService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState()
  
  const navigate = useNavigate()

  useEffect(()=> {
    const fetchData = async () => {
      const data = await profileService.getOneProfile(user.id)
      setProfile(data.profile)
    }
    fetchData()
    // profile.role === 'admin' ? navigate('/boss') : navigate('/')
  }, [user])


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/login')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  console.log('app user', user)
  console.log('app profile', profile)

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        {/* <Route
          path="/"
          element={ profile.role === 'admin' ? <BossView user={user} profile={profile} /> : <UserView user={user} profile={profile} />}
        /> */}
        <Route
          path="/"
          element={<UserView user={user} profile={profile} />}
        />
        <Route
          path="/boss"
          element={<BossView user={user} profile={profile} />}
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
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
