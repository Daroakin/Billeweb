// Decoracion.js

import React from 'react';
import './App.css';

const Decoracion = () => {
  return (
    <div className="decoracion-container">
      <div className="logo">
        <h1 className="titulo">BILLEWEB</h1>
        <p className="descripcion">
          ¡Bienvenido a BILLEWEB! Tu plataforma financiera para gestionar tus finanzas de manera efectiva.
        </p>
      </div>
      <div className="umsa-logo">
        <p>UMSA</p>
        {/* Agrega aquí el logotipo pequeño de UMSA */}
      </div>
    </div>
  );
};

export default Decoracion;
