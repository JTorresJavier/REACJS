// src/components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
  const { carrito, vaciarCarrito, total, descuento, totalConDescuento } = useContext(CartContext);

  if (carrito.length === 0) return <p>El carrito está vacío.</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', maxWidth: 400 }}>
      <h3>Productos en el carrito</h3>
      <ul>
        {carrito.map((item, index) => (
          <li key={index}>
            {item.nombre} - Precio: ${item.precio.toLocaleString()}
          </li>
        ))}
      </ul>
      <p>Total: ${total.toLocaleString()}</p>
      {descuento > 0 && <p style={{ color: 'red' }}>Descuento: -${descuento.toLocaleString()}</p>}
      <p><strong>Total con descuento: ${totalConDescuento.toLocaleString()}</strong></p>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
      <button onClick={() => alert('¡Gracias por su compra! Vaciaré el carrito.') || vaciarCarrito()}>
        Finalizar compra
      </button>
    </div>
  );
};
