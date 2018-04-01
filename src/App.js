import React, { Component } from 'react'
import logo from './logo.svg'

import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategora from './LinkCategoria'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHome />
          <div className="container">
          <h3>Úlitmos anúncios</h3>
            <div className="row">
              <AnuncioHome />
              <AnuncioHome />
              <AnuncioHome />
            </div>
          <h3>Categorias</h3>
          <LinkCategora />
          <LinkCategora />
          <LinkCategora />
          <LinkCategora />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
