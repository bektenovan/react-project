import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductsContextProvider from './contexts/productsContext';
import Routing from './Routing';


function App() {
  return (
    <div>
      <ProductsContextProvider> 
      <Header />
      <Routing />
      <Footer />
      </ProductsContextProvider>
      
    </div>
  );
}

export default App;
