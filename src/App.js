// App.js

import React, { useState } from 'react';
import Decoracion from './components/Decoracion';
import Datos from './components/Datos';
import PaginaPrincipal from './components/Home';
import './components/App.css';

function App() {
  const [usuario, setUsuario] = useState('');
  const [mostrarPaginaPrincipal, setMostrarPaginaPrincipal] = useState(false);

  const handleIngresar = (nombreUsuario) => {
    setUsuario(nombreUsuario);
    setMostrarPaginaPrincipal(true);
  };

  return (
    <div className="App">
      {!mostrarPaginaPrincipal ? (
        <>
          <Decoracion />
          <Datos onIngresar={handleIngresar} />
        </>
      ) : (
        <PaginaPrincipal usuario={usuario} />
      )}
    </div>
  );
}

export default App;
