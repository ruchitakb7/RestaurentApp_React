import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';
import CartItem from './components/Cart/CartItem.js';
function App() {
  return (
    <Fragment>
      
  <Header/>
  <Meals></Meals>
  <CartItem></CartItem>
  </Fragment>
  );
}

export default App;
