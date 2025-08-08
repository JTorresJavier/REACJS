/*import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Leer carrito guardado o iniciar vacío
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Sumar el total de precios de productos en carrito
  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  // Aplicar descuento del 30% si total > 200000
  const descuento = total > 200000 ? total * 0.3 : 0;

  // Total final con descuento aplicado
  const totalConDescuento = total - descuento;

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, total, descuento, totalConDescuento }}>
      {children}
    </CartContext.Provider>
  );
};*/


import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem('carrito');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => [...prev, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
  const descuento = total > 200000 ? total * 0.3 : 0;
  const totalConDescuento = total - descuento;

  return (
    <CartContext.Provider value={{
      carrito,
      agregarAlCarrito,
      vaciarCarrito,
      total,
      descuento,
      totalConDescuento
    }}>
      {children}
    </CartContext.Provider>
  );
};
