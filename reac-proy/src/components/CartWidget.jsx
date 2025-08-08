// src/components/CartWidget.jsx
/*import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Cart } from './Cart'; // importar componente carrito

export const CartWidget = () => {
  const { carrito } = useContext(CartContext);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}
        onClick={() => setMostrarCarrito(!mostrarCarrito)}
        title="Abrir carrito"
      >
        <span role="img" aria-label="carrito">🛒</span>
        <span>{carrito.length}</span>
      </div>

      {mostrarCarrito && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          backgroundColor: 'white',
          border: '1px solid gray',
          padding: '1rem',
          zIndex: 10,
          width: '300px'
        }}>
          <Cart />
        </div>
      )}
    </div>
  );
};

export default CartWidget;*/

/*import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Cart } from './Cart';

export const CartWidget = () => {
  const { carrito } = useContext(CartContext);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}
        onClick={() => setMostrarCarrito(!mostrarCarrito)}
        title="Abrir carrito"
      >
        <span role="img" aria-label="carrito">🛒</span>
        <span>{carrito.length}</span>
      </div>

      {mostrarCarrito && (
        <div style={{
          position: 'absolute',
          top: '110%',
          right: 0,
          backgroundColor: 'white',
          border: '1px solid gray',
          padding: '1rem',
          zIndex: 100,
          width: '350px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          borderRadius: '4px'
        }}>
          <Cart />
        </div>
      )}
    </div>
  );
};

export default CartWidget;*/


import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
  const { carrito, vaciarCarrito, total, descuento, totalConDescuento } = useContext(CartContext);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}
        onClick={() => setMostrarCarrito(!mostrarCarrito)}
        title="Abrir carrito"
      >
        <span role="img" aria-label="carrito">🛒</span>
        <span>{carrito.length}</span>
      </div>

      {mostrarCarrito && (
        <div style={{
          position: 'absolute',
          top: '110%',
          right: 0,
          backgroundColor: 'white',
          border: '1px solid gray',
          padding: '1rem',
          zIndex: 100,
          width: '350px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          borderRadius: '4px',
          color: 'black'
        }}>
          {carrito.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <>
              <h3>Productos en el carrito</h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, maxHeight: '200px', overflowY: 'auto' }}>
                {carrito.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>
                    {item.nombre} - Precio: ${item.precio.toLocaleString()}
                  </li>
                ))}
              </ul>
              <p>Total: ${total.toLocaleString()}</p>
              {descuento > 0 && <p style={{ color: 'red' }}>Descuento: -${descuento.toLocaleString()}</p>}
              <p><strong>Total con descuento: ${totalConDescuento.toLocaleString()}</strong></p>
              <button onClick={vaciarCarrito}>Vaciar carrito</button>
              <button onClick={() => { alert('¡Gracias por su compra!'); vaciarCarrito(); }}>
                Finalizar compra
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartWidget;
