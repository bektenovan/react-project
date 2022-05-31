import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Routing from './Routing';


function App() {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
