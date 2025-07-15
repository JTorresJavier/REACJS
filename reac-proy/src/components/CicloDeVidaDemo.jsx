import React, { useState, useEffect } from 'react';

export const CicloDeVidaDemo = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('🟢 Componente montado');

    return () => {
      console.log('🔴 Componente desmontado');
    };
  }, []);

  useEffect(() => {
    console.log('🔁 Actualizado contador:', contador);
  }, [contador]);

  return (
    <div style={{ margin: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
      <h2>Ciclo de Vida</h2>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(c => c + 1)}>Incrementar</button>
    </div>
  );
};
