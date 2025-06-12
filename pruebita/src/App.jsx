import React, { useState } from 'react'
import ListaArticulos from './pruebita'
import Header from './Header'
import UserProvider from './UserContext'
import Login from './Login'
import ContenidoPrivado from './ContenidoPrivado'
import './App.css'
function App () {
  const [pagina, setPagina] = useState('inicio2')
  return (
    <UserProvider>
      <Header />
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
        <div style={{ border: '2px solid red' }}>
          <button onClick={() => setPagina('inicio2')}>Inicio</button>
          <button onClick={() => setPagina('privado')}>Contenido Privado</button>

        </div>
        <div style={{ border: '2px solid black' }}>
          {pagina === 'inicio2' && <Login />}
          {pagina === 'privado' && <ContenidoPrivado />}

        </div>
      </div>
    </UserProvider>
  )
} // fin de app

export default App
