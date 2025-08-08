import React from 'react';

export const Item = ({ producto, agregarAlCarrito }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', width: '200px' }}>
      <h4>{producto.nombre}</h4>
      <p>Precio: ${producto.precio}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  );
};
