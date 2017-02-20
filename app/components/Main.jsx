import React from 'react';


class Main extends Component {

  render: function() {
    return (
      <div className="font main">
        <Nav/>
        <div className="page-actions"></div>
        <div className="row" id="logorow">
          <div className="columns medium-3 large-2 small-centered">
            <LogoLeft/>
          </div>
          <div className="columns medium-6  large-8 small-centered">
            <ChatRoom></ChatRoom>
          </div>
          <div className="columns medium-3 large-2 small-centered">
            <LogoRight/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
};

// module.exports = Main;
export default Main;
