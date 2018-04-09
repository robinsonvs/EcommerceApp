import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

class HeaderInterno extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark">
            <div className="container">
              <Link className="navbar-brand" to="/"><img alt="MercadoDev" src={logo} height={80} /></Link>
              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>            
        )
    }
}

export default HeaderInterno