import React from 'react';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#f8f8f8',
      borderBottom: '1px solid #ddd'
    }}>
      <h2 style={{ margin: 0 }}>MiTienda</h2>

      <nav style={{ display: 'flex', gap: '1rem' }}>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </nav>

      <CartWidget />
    </header>
  );
};