import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';

function App() {
  return (
    <Fragment>
  <Header/>
  <Meals></Meals>
  </Fragment>
  );
}

export default App;
