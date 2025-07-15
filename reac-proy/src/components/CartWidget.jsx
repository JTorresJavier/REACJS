import React from 'react';

export const CartWidget = () => {
  const items = 3;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <span role="img" aria-label="carrito">🛒</span>
      <span>{items}</span>
    </div>
  );
};
