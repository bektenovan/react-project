import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AuthContextProvider from './contexts/authContext';
import CardContextProvider from './contexts/cardContext';
import ProductsContextProvider from './contexts/productsContext';
import Routing from './Routing';



function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider> 
        <CardContextProvider>
      <Header />
      <Routing />
      <Footer />
      </CardContextProvider>
      </ProductsContextProvider>
      </AuthContextProvider>
      
  );
}

export default App;
