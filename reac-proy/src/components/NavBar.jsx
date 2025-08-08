/*import React from 'react';
import CartWidget from './CartWidget';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export const NavBar = () => {
  const { carrito, vaciarCarrito, total, descuento, totalConDescuento } = useContext(CartContext);

  return (
    <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <h1>MiTienda</h1>
      <CartWidget cantidad={carrito.length} />
      <span>Total: ${total.toLocaleString()}</span>
      {descuento > 0 && (
        <>
          <span>Descuento: -${descuento.toLocaleString()}</span>
          <span><strong>Total con descuento: ${totalConDescuento.toLocaleString()}</strong></span>
        </>
      )}
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </nav>
  );
};*/

// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';

export const NavBar = () => {
  return (
    <nav style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#222',
      color: 'white',
      position: 'relative'
    }}>
      <h1 style={{ marginRight: 'auto' }}>MiTienda</h1>
      <CartWidget />
    </nav>
  );
};


