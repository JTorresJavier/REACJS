import React from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { CicloDeVidaDemo } from './components/CicloDeVidaDemo';
import { ComponenteConChildren } from './components/ComponenteConChildren';
import { RefDemo } from './components/RefDemo';
import { PromesaDemo } from './components/PromesaDemo';
import { ListaDeProductos } from './components/ListaDeProductos';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido a MiTienda!" />
      <CicloDeVidaDemo />
      <ComponenteConChildren>
        <p>Esto es un children dentro de un componente reutilizable.</p>
      </ComponenteConChildren>
      <RefDemo />
      <PromesaDemo />
      <ListaDeProductos />
    </div>
  );
};

export default App;
