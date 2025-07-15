import React, { useEffect, useState } from 'react';

export const PromesaDemo = () => {
  const [mensaje, setMensaje] = useState('Cargando...');

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        const exito = true;
        exito ? resolve('✅ Datos cargados correctamente') : reject('❌ Error al cargar datos');
      }, 2000);
    });

    promesa
      .then(res => setMensaje(res))
      .catch(err => setMensaje(err))
      .finally(() => console.log('✔ Promesa finalizada'));
  }, []);

  return <p>{mensaje}</p>;
};
