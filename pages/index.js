import React from 'react';

let Header;
let Footer;
let ConfigManager;

class Home extends React.Component {

  constructor() {
    super(); 
    this.state = {
      showHeaderFooter: false
    }
  }

  componentDidMount() {
    const headerFooter = require('myfonts-header-footer'); 
    Header = headerFooter.Header;
    Footer = headerFooter.Footer;
    ConfigManager = headerFooter.ConfigManager;

    const headerApi = {
      url: 'http://localhost:3001/',
      endpoints: {
        cart: 'backbone/cart/',
        login: 'backbone/user/login/',
        logout: 'backbone/user/logout',
        searchAutocomplete: 'ajax-server/search_suggest.php',
        userInfo: 'backbone/info/details',
        userSubscriptions: 'backbone/info/subscriptions',
      },
    };
    
    ConfigManager.setApiEndpoints(headerApi);
    this.setState({showHeaderFooter: true});
  }

  render() {
    return <div>
    {
      this.state.showHeaderFooter ? <Header></Header> : null
    }
    <p> I am NIraj</p>
     {
      this.state.showHeaderFooter ? <Footer></Footer> : null
    }
  </div>;
  }
}


export default Home
