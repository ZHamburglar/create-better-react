import React, { Component } from 'react';
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var {Link, IndexLink} = require('react-router');

import * as Redux from 'react-redux';
import router from 'app/router/';

class Nav extends Component{
  render() {
    return(
      <div>
        <nav className="top-bar" role="navigation">
            <ul className="small-block-grid-4" data-dropdown-menu>
              <li>
                <Link to="/main" className="eachLink" activeClassName="active">HOME</Link>
              </li>
              <li>
                <Link to="/about" className="eachLink" activeClassName="active">ABOUT</Link>
              </li>
  					</ul>
        </nav>
		</div>
    );
  }
};

export default Nav;
