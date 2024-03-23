const products = [
  {
    id: 1,
    title: "Hamburguesa completa",
    price: 4000,
    description: "Medallon de ternera, jamon,queso,tomate,lechuga",
    img: "https://res.cloudinary.com/dmgnxlety/image/upload/v1709066707/antsvasdm8efjtogoqam.jpg",
    stock: 20,
    category: "Hamburguesas",
  },
  {
    id: 2,
    title: "Hamburguesa morada",
    price: 4500,
    description: "Medallon de ternera,cebolla morada,jamon, queso",
    img: "https://res.cloudinary.com/dmgnxlety/image/upload/v1709066773/r3ynovpfytdn4zomwcqd.jpg",
    stock: 20,
    category: "Hamburguesas",
  },
  {
    id: 3,
    title: "Hamburguesa mutante",
    price: 5000,
    description:
      "Medallon de ternera, tomate,lechuga,queso cheddar y huevo frito",
    img: "https://res.cloudinary.com/dmgnxlety/image/upload/v1709066809/images_gebhp7.jpg",
    stock: 20,
    category: "Hamburguesas",
  },
  {
    id: 4,
    title: "Chicken burguer",
    price: 4500,
    description: "Medallon de pollo, jamon, queso, tomate y lechuga",
    img: "https://res.cloudinary.com/dmgnxlety/image/upload/v1709066838/images_h9pbts.jpg",
    stock: 20,
    category: "Hamburguesas",
  },
  {
    id: 5,
    title: "Pizza especial",
    price: 6000,
    description: "Jamon, mozzarella, morron, huevo",
    img: "https://res.cloudinary.com/dmgnxlety/image/upload/v1709066931/lq9jtf0q8ojlgwttdbjx.jpg",
    stock: 20,
    category: "Pizzas",
  },
  {
    id: 6,
    title: "Mozzarella, oregano, aceitunas",
    price: 5500,
    description: "Pizza mozzarella",
    img: "https://res.cloudinary.com/dmgnxlety/image/upload/v1709066945/zouyhbqokftffi3nv8od.jpg",
    stock: 20,
    category: "Pizzas",
  },
  {
    id: 7,
    title: "Choripan",
    price: 3000,
    description: "Doble chori mariposa,chimi,tomate,lechuga",
    img: "https://res.cloudinary.com/dmgnxlety/image/upload/v1709067186/i0ndlsbzvplggvh5ad3u.jpg",
    stock: 20,
    category: "Sanguches",
  },
  {
    id: 8,
    title: "Lomo completo",
    price: 4000,
    description: "Bife de lomo, jamon,queso,tomate,lechuga",
    img: "https://res.cloudinary.com/dmgnxlety/image/upload/v1709067198/d5q7c3rpcalx9swhx5ki.jpg",
    stock: 20,
    category: "Sanguches",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === Number(id));

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con id ${id}`);
        }
      }, 1000);
    } else {
      reject("No hay productos");
    }
  });
};
