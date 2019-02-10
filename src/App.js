import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ProductContainer from './Containers/ProductContainer';
import Footer from './Components/Footer';
import MessageContainer from './Containers/MessageContainer';
import CartContainer from './Containers/CartContainer';

class App extends Component {

  render() {
    
    return (
      <div>
        {/* Header */}
        <Header />
        <main id="mainContainer">
          <div className="container">

            {/* Products */}
            <ProductContainer />
            {/* Message */}
            <MessageContainer />
            {/* Cart */}
            <CartContainer />


          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    )

  }
}

export default App;
