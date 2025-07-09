import React from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido a MiTienda!" />
    </div>
  );
};

export default App;