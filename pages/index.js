import React from 'react'
import { Header, Footer, ConfigManager } from 'myfonts-header-footer';
import "myfonts-header-footer/dist/main.css";

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

class Home extends React.Component {

  render() {
    return <div>
    <Header />
    niraj
    <p>hello</p>
    <Footer />

  </div>;
  }
}


export default Home
