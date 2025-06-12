// Header.jsx
import { useUser } from './UserContext'

export default function Header () {
  const { user, logout } = useUser()

  return (
    <header>
      {user
        ? (
          <>
            <p>Hola, {user.name}</p>
            <button onClick={logout}>Cerrar sesión</button>
          </>
          )
        : (
          <p>Página de inicio</p>
          )}
    </header>
  )
}
