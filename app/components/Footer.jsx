var React = require('react');
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var Footer = React.createClass({
  render : function(){
    return (
      <footer className="challenge-footer">
      <div className="font main">
        <h6 className="foot createdby">
          Made with &#9829;
        </h6>
      </div>
      </footer>
    );
  }
});

module.exports = Footer;
