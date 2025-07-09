import React from 'react';

export const ItemListContainer = ({ saludo }) => {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{saludo}</h1>
      <p>Acá pronto verás nuestros productos destacados.</p>
    </main>
  );
};