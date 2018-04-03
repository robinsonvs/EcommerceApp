import React, { Component } from 'react'
import logo from './logo.svg'

import Footer from './Footer'
import Home from './Home'

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact component={Home} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
