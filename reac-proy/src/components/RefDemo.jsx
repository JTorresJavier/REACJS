import React, { useRef } from 'react';

export const RefDemo = () => {
  const inputRef = useRef();

  const manejarClick = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ margin: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
      <h2>useRef en acción</h2>
      <input ref={inputRef} placeholder="Escribí algo..." />
      <button onClick={manejarClick} style={{ marginLeft: '1rem' }}>
        Enfocar input
      </button>
    </div>
  );
};
