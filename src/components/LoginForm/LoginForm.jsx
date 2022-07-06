import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'


const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  useEffect(()=> {
    if(!props.profile){
      return
    }
    props.profile.role === 'admin' ? navigate('/boss') : navigate('/')
  }, [props.profile])

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  console.log(props)
  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      console.log('handle submit here', props.profile.role)
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className={styles.button}>Log In</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
