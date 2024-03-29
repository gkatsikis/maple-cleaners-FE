import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = (props) => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main>
      <h1>Log In</h1>
      <p>{message}</p>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
        user={props.user}
        profile={props.profile}
      />
    </main>
  )
}

export default LoginPage

