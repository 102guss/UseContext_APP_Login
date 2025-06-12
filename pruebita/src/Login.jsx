// Login.jsx
import { useState } from 'react'
import { useUser } from './UserContext'

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
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <button 
          type="submit"
          style={{ 
            padding: '10px 15px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}
