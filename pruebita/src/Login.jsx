// Login.jsx
import { useState } from 'react'
import { useUser } from './UserContext'
import './Login.css'

export default function Login () {
  const { user, login } = useUser()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Por favor, completa todos los campos')
      return
    }

    // Aquí podrías validar las credenciales
    // Por ahora simplemente llamamos a login con el nombre de usuario
    login(formData.username)
    setError('')
  }

  if (user) return <p>Ya has iniciado sesión como {user.name}</p>

  return (
    <div className='login-container'>
      <h2>Iniciar Sesión</h2>
      {error && <p className='error-message'>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username' className='form-label'>
            Usuario:
          </label>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            className='form-input'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password' className='form-label'>
            Contraseña:
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='form-input'
          />
        </div>

        <button
          type='submit'
          className='submit-button'
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}
