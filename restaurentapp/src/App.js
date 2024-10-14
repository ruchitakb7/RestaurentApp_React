import React, {useState} from 'react';
import './App.css';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';
import CartModal from './components/UI/CartModal.js';
import CartProvider from './store/CartProvider.js';


function App(props) {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal=()=>{
    setIsModalOpen(true)
  }

  const closeModal = () =>{
    setIsModalOpen(false)
  } 
  return (
  <CartProvider>  
  <Header onCartClick={openModal}></Header>
  <Meals></Meals>
  {isModalOpen && <CartModal onClose={closeModal} />}
  </CartProvider>
  );
}

export default App;
