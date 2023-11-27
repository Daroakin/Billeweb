// Home.js

import React from 'react';
import './App.css';

const PaginaPrincipal = ({ usuario }) => {
  return (
    <div className="pagina-principal-container">
      <h2>Bienvenido, {usuario}!</h2>
      {/* Aquí puedes agregar el menú de pestañas para Saldo, Ahorros, Proyectos, Salir */}
    </div>
  );
};

export default PaginaPrincipal;
