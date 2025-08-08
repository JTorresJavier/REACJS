/*// src/App.jsx
import React, { useState } from 'react';

//import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ComponenteConChildren } from './components/ComponenteConChildren';
import { RefDemo } from './components/RefDemo';
import { PromesaDemo } from './components/PromesaDemo';
import { ListaDeProductos } from './components/ListaDeProductos';
import CartWidget from './components/CartWidget';
import { CartProvider } from './context/CartContext';
import ItemDetailContainer from './containers/ItemDetailContainer'; */// lo vas a crear después

/*const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ItemListContainer saludo="¡Bienvenido a MiTienda!" />
              <CicloDeVidaDemo />
              <ComponenteConChildren>
                <p>Esto es un children dentro de un componente reutilizable.</p>
              </ComponenteConChildren>
              <RefDemo />
              <PromesaDemo />
              <ListaDeProductos />
            </>
          }
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  const [carrito, setCarrito] = useState([]); // array de productos en el carrito

  // Función para agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  // Función para eliminar todos los productos del carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <>
      <NavBar cantidad={carrito.length} vaciarCarrito={vaciarCarrito} />
      <ItemListContainer agregarAlCarrito={agregarAlCarrito} />
      {/* Rutas y demás *//*}
    /*</>
  );
}

export default App;*/

/*const App = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
  <CartProvider>
    <BrowserRouter>
      <NavBar cantidad={carrito.length} vaciarCarrito={vaciarCarrito} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ItemListContainer
                saludo="¡Bienvenido a MiTienda!"
                agregarAlCarrito={agregarAlCarrito}
              />
              
              <button onClick={vaciarCarrito}>Vaciar carrito</button>
            </>
          }
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;*/

// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a MiTienda!" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

