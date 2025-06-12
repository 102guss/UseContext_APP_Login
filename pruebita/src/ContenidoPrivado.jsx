import { useUser } from './UserContext'

export default function ContenidoPrivado () {
  const { user } = useUser()

  if (!user) {
    return <p>Debes de iniciar sesion para ver este contenido</p>
  }

  return <p>Bienvenido a los articulos secretos</p>
}
