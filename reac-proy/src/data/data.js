// src/data/data.js
export const productos = [
  // Tecnología
  // Tecnología
  { id: 1, nombre: "Smartphone X", precio: 120000, categoria: "tecnologia" },
  { id: 2, nombre: "Laptop Pro", precio: 240000, categoria: "tecnologia" },
  { id: 3, nombre: "Auriculares", precio: 15000, categoria: "tecnologia" },
  { id: 4, nombre: "Smartwatch", precio: 30000, categoria: "tecnologia" },
  { id: 5, nombre: "Tablet", precio: 80000, categoria: "tecnologia" },
  { id: 6, nombre: "Monitor 27''", precio: 100000, categoria: "tecnologia" },
  { id: 7, nombre: "Teclado Mecánico", precio: 25000, categoria: "tecnologia" },
  { id: 8, nombre: "Mouse Gamer", precio: 20000, categoria: "tecnologia" },
  { id: 9, nombre: "Router WiFi", precio: 18000, categoria: "tecnologia" },
  { id: 10, nombre: "Cámara Web", precio: 22000, categoria: "tecnologia" },

  // Belleza
  { id: 11, nombre: "Perfume", precio: 17000, categoria: "belleza" },
  { id: 12, nombre: "Crema Facial", precio: 9000, categoria: "belleza" },
  { id: 13, nombre: "Shampoo", precio: 4000, categoria: "belleza" },
  { id: 14, nombre: "Plancha de pelo", precio: 25000, categoria: "belleza" },
  { id: 15, nombre: "Secador de pelo", precio: 20000, categoria: "belleza" },
  { id: 16, nombre: "Maquillaje", precio: 12000, categoria: "belleza" },
  { id: 17, nombre: "Crema Corporal", precio: 7000, categoria: "belleza" },
  { id: 18, nombre: "Desodorante", precio: 3000, categoria: "belleza" },
  { id: 19, nombre: "Kit de uñas", precio: 10000, categoria: "belleza" },
  { id: 20, nombre: "Serum capilar", precio: 8000, categoria: "belleza" },

  // Ropa
  { id: 21, nombre: "Camisa", precio: 11000, categoria: "ropa" },
  { id: 22, nombre: "Pantalón", precio: 15000, categoria: "ropa" },
  { id: 23, nombre: "Remera", precio: 8000, categoria: "ropa" },
  { id: 24, nombre: "Buzo", precio: 18000, categoria: "ropa" },
  { id: 25, nombre: "Zapatillas", precio: 30000, categoria: "ropa" },
  { id: 26, nombre: "Campera", precio: 35000, categoria: "ropa" },
  { id: 27, nombre: "Short", precio: 7000, categoria: "ropa" },
  { id: 28, nombre: "Medias", precio: 2000, categoria: "ropa" },
  { id: 29, nombre: "Gorra", precio: 5000, categoria: "ropa" },
  { id: 30, nombre: "Cinturón", precio: 6000, categoria: "ropa" },

  // Herramientas
  { id: 31, nombre: "Taladro", precio: 40000, categoria: "herramientas" },
  { id: 32, nombre: "Destornillador", precio: 2000, categoria: "herramientas" },
  { id: 33, nombre: "Martillo", precio: 3000, categoria: "herramientas" },
  { id: 34, nombre: "Llave inglesa", precio: 3500, categoria: "herramientas" },
  { id: 35, nombre: "Sierra", precio: 6000, categoria: "herramientas" },
  { id: 36, nombre: "Caja de herramientas", precio: 15000, categoria: "herramientas" },
  { id: 37, nombre: "Pistola de calor", precio: 9000, categoria: "herramientas" },
  { id: 38, nombre: "Multímetro", precio: 10000, categoria: "herramientas" },
  { id: 39, nombre: "Lijadora", precio: 17000, categoria: "herramientas" },
  { id: 40, nombre: "Nivel láser", precio: 22000, categoria: "herramientas" }
];


// Función para buscar producto por id, simulando async
export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((p) => p.id === id);
      resolve(producto);
    }, 1000);
  });
};