import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';
import CartModal from './components/UI/CartModal.js';

function App() {
  return (
    <Fragment>
      
  <Header/>
  <Meals></Meals>
  <CartModal></CartModal>
  </Fragment>
  );
}

export default App;
