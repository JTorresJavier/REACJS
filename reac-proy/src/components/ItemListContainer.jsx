/* import React, { useEffect, useState, useContext } from 'react';
import { productos } from '../data/data'; // array de productos
import { Item } from '../components/Item'; // componente presentacional
import { CartContext } from '../context/CartContext'; // importa el contexto

export const ItemListContainer = ({ saludo }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const { agregarAlCarrito } = useContext(CartContext); // accede a la función del contexto
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    const fetchProductos = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(productos);
        }, 1000);
      });
    };

    fetchProductos().then((data) => {
      setListaProductos(data);
    });
  }, []);

  // Filtrar productos por categoría y búsqueda
  const productosFiltrados = listaProductos.filter((producto) => {
    const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria ? producto.categoria === categoria : true;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div>
      <h2>{saludo}</h2>

      {/* 🔍 Buscador y filtro *//*}
      {*//* <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Todas las categorías</option>
          <option value="tecnologia">Tecnología</option>
          <option value="belleza">Belleza</option>
          <option value="ropa">Ropa</option>
          <option value="herramientas">Herramientas</option>
        </select>
      </div>

      {/* 🛒 Lista de productos filtrada *//*}
      {*//* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {productosFiltrados.map((producto) => (
          <Item
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
    </div>
  );
}; }}*/


import React, { useEffect, useState, useContext } from 'react';
import { productos } from '../data/data';
import { Item } from '../components/Item';
import { CartContext } from '../context/CartContext';

export const ItemListContainer = ({ saludo }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const { agregarAlCarrito } = useContext(CartContext);  // usar contexto directamente
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    const fetchProductos = () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(productos), 1000);
      });
    };
    fetchProductos().then((data) => setListaProductos(data));
  }, []);

  const productosFiltrados = listaProductos.filter(p => {
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria ? p.categoria === categoria : true;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div>
      <h2>{saludo}</h2>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
        <select value={categoria} onChange={e => setCategoria(e.target.value)}>
          <option value="">Todas las categorías</option>
          <option value="tecnologia">Tecnología</option>
          <option value="belleza">Belleza</option>
          <option value="ropa">Ropa</option>
          <option value="herramientas">Herramientas</option>
        </select>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {productosFiltrados.map(producto => (
          <Item
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
    </div>
  );
};

