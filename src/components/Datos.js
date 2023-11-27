// Datos.js

import React, { useState } from 'react';
import './App.css';

const Datos = ({ onIngresar }) => {
  const [usuario, setUsuario] = useState('');

  const handleInputChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleIngresarClick = () => {
    // Puedes realizar operaciones adicionales aquí antes de iniciar la página principal
    onIngresar(usuario);
  };

  return (
    <div className="datos-container">
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={usuario}
        onChange={handleInputChange}
      />
      <button className="ingresar-button" onClick={handleIngresarClick}>
        Ingresar
      </button>
    </div>
  );
};

export default Datos;
