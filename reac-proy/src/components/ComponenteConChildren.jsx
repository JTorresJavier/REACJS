import React from 'react';

export const ComponenteConChildren = ({ children }) => {
  return (
    <div style={{ border: '1px dashed gray', padding: '1rem', margin: '1rem 0' }}>
      <h3>Contenido del componente con children:</h3>
      {children}
    </div>
  );
};
