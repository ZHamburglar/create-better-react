import React, { Component } from 'react';
var {Link} = require('react-router');
import Nav from 'Nav';
import Footer from 'Footer';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import router from 'app/router/';

class Challenge extends Component{


  render() {
    return (
      <div className="font-main">
        <Nav/>
        <div className="page-actions"></div>
        <div className="row" id="logorow">
          <div className="columns medium-3 large-2 small-centered">
            Left Side
          </div>
          <div className="columns medium-6  large-8 small-centered">
            <p>This is the second page!</p>
            <p>Look at you navigating!</p>
          </div>
          <div className="columns medium-3 large-2 small-centered">
            Right Side
          </div>
        </div>
        <Footer />
      </div>
    )
  }
};

// module.exports = Challenge;
export default Challenge;
