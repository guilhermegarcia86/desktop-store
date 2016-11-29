/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import Sidebar from './sidebar';


const Header = React.createClass({

render() {

  return (
    <div id="wrapper" className="content">
      <Navbar fluid={true}  style={ {margin: 0} }>
          <Brand>
            <span>
                <span>LOJA</span>
                <button type="button" className="navbar-toggle"  style={{position: 'absolute', right: 0, top: 0}}>
                  <span className="icon-bar"></span>
                </button>
            </span>
          </Brand>
          <ul className="nav navbar-top-links navbar-right">
           <NavDropdown title={<span><i className="fa fa-tasks fa-fw"></i> </span>} id = 'navDropdown2222'>
                  <MenuItem eventKey="1" style={ {width: 300} }>
                    <div>
                      <p> <strong>Caixa</strong> <span className="pull-right text-muted">40% Complete</span> </p>
                      <div>
                        <ProgressBar  bsStyle="success" now={40} />
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">
                    <div>
                      <p> <strong>Estoque</strong> <span className="pull-right text-muted">20% Complete</span> </p>
                      <div>
                        <ProgressBar  bsStyle="info" now={20} />
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem divider />
                </NavDropdown>
          </ul>
          <Sidebar />
    </Navbar>
    </div>
  )
}
})

export default Header;
