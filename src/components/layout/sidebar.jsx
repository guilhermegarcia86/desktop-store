import React from 'react';
import Link from 'react-router'

const Sidebar = React.createClass({

  render() {
    return (
      <div>
        {/*Sidebar*/}
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
                        Start Bootstrap
                    </a>
                </li>
                <li>
                    <a href="#">Painel Administrativo</a>
                </li>
                <li>
                    <a href="#">
                      Estoque
                    </a>
                </li>
                <li>
                    <a href="#">Relatórios</a>
                </li>
                <li>
                    <a href="#">Gráficos</a>
                </li>
            </ul>
        </div>
      </div>
    );
  }
})

export default Sidebar;
