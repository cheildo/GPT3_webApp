import React from 'react';
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';
import {Brand, CTA, Navbar} from './components';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className= "gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
