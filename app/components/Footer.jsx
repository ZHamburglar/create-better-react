import React, { Component } from 'react';
/*how the routes are defined, using inde link show the main link selected only when it is required*/
class Footer extends Component {
  render(){
    return (
      <footer className="challenge-footer">
      <div className="font main">
        <h6 className="foot createdby">
          Made with &#9829;
        </h6>
      </div>
      </footer>
    )
  }
};

export default Footer;
