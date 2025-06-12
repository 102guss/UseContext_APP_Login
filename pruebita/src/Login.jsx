// Login.jsx
import { useUser } from './UserContext'

export default function Login () {
  const { user, login } = useUser()

  if (user) return <p>Ya has iniciado sesión como {user.name}</p>

  return <button onClick={login}>Iniciar sesión</button>
}
