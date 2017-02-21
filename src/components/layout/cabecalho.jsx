import React from 'react';

const Cabecalho = React.createClass({

render() {

  return (
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Store</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
})

export default Cabecalho;
