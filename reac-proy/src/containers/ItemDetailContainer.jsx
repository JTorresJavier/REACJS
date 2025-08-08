// src/containers/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/data';  // función simulada para obtener producto
import { ItemDetail } from '../components/ItemDetail'; 

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductById(id).then((data) => {
      setProducto(data);
    });
  }, [id]);

  if (!producto) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
