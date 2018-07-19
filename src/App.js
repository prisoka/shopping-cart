import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './Components/CartHeader';
import CartItems from './Components/CartItems';
import CartFooter from './Components/CartFooter';
import AddItem from './Components/AddItem';


class App extends Component {
  state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    cartTotal: 399 + (499*2) + 1999
  }

  addedItem = (cartItem) => {
    this.setState({cartTotal: this.state.cartTotal + (cartItem.product.priceInCents * cartItem.quantity)}),
    this.setState(prevState => {
      return {
        products: prevState.products,
        cartItemsList: prevState.cartItemsList.concat(cartItem),
      }
    })
  }

  render() {
    const {cartItemsList, products, cartTotal} = this.state;

    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItemsList={cartItemsList} />
        <p className="container" id='cartTotal'>Total: ${this.state.cartTotal/100}</p>
        <AddItem products={products} onItemAdded={ (item) => this.addedItem(item)}/>
        <CartFooter />
        {/* <CartFooter copyright="whenever you're creating this app :)" /> */}
      </div>
    );
  }
}

export default App;
