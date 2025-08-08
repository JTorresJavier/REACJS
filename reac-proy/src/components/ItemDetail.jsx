// src/components/ItemDetail.jsx
import React from 'react';

export const ItemDetail = ({ producto }) => {
  return (
    <div style={{ padding: '2rem', border: '1px solid gray' }}>
      <h2>{producto.nombre}</h2>
      <p>Descripción: {producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
    </div>
  );
};
