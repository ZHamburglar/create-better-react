var React = require('react');
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var {Link, IndexLink} = require('react-router');

import * as Redux from 'react-redux';
import * as actions from 'actions';
import router from 'app/router/';

var Nav = React.createClass({
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
  });

module.exports = Nav;
// export default Redux.connect()(Nav);
