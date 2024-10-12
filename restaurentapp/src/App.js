import React, { Fragment ,useState} from 'react';
import './App.css';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';
import CartModal from './components/UI/CartModal.js';

function App(prop) {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal=()=>{
    setIsModalOpen(true)
  }

  const closeModal = () =>{
    setIsModalOpen(false)
  } 
  return (
    <Fragment>  
  <Header onCartClick={openModal}></Header>
  <Meals></Meals>
  {isModalOpen && <CartModal onClose={closeModal} />}
  </Fragment>
  );
}

export default App;
