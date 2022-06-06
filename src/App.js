import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AuthContextProvider from './contexts/authContext';
import ProductsContextProvider from './contexts/productsContext';
import Routing from './Routing';


function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider> 
      <Header />
      <Routing />
      <Footer />
      </ProductsContextProvider>
      </AuthContextProvider>
      
  );
}

export default App;
