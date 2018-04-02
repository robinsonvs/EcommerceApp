import React from 'react'
import logo from './logo.png'

//functional stateless component
const HeaderHome = (props) => {
    return (
        <div className="jumbotron">
        <div className="container">
          <h1 className="display-3 text-center"><img src={logo} className="App-logo" alt="logo" width="150" /></h1>
          <p className="text-center"><a className="btn btn-anuncie btn-lg" to="/novo-anuncio" role="button">Anuncie &raquo;</a></p>
        </div>
        </div>        
    )
}

export default HeaderHome