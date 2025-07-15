import React from 'react';

const productos = [
  { id: 1, nombre: 'Zapatillas', precio: 12000 },
  { id: 2, nombre: 'Remera', precio: 5000 },
  { id: 3, nombre: 'Gorra', precio: 3000 },
];

export const ListaDeProductos = () => {
  return (
    <div style={{ margin: '2rem' }}>
      <h2>Productos</h2>
      <ul>
        {productos.map(prod => (
          <li key={prod.id}>
            {prod.nombre} - ${prod.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};
