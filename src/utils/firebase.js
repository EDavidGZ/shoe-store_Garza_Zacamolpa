import { initializeApp } from "firebase/app";
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "shoesstore-97a8f.firebaseapp.com",
  projectId: "shoesstore-97a8f",
  storageBucket: "shoesstore-97a8f.appspot.com",
  messagingSenderId: "442178618276",
  appId: "1:442178618276:web:241ac0077609d5887c7731"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

async function cargarBaseDeDatos() {
  const promise = await fetch('./Json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (producto) => {
    await addDoc(collection(db, "productos"), {
      title: producto.title,
      price: producto.price,
      category: producto.category,
      cantidad: producto.cantidad,
      image: producto.image,
      genero: producto.genero
    });
  })

}

const getProduct = (id) => {
  getDoc(doc(db,"productos",id))
}
const getProducts = async () => {
  const productos = await getDocs(collection(db,"productos"))
  return  productos
}
const updateStock = async (id, cantidad) => {
  const producto = doc(db, 'productos', id);

  await updateDoc(producto, {
    cantidad:  cantidad,
  });
};


export { db, app, cargarBaseDeDatos, getProduct, getProducts, updateStock }