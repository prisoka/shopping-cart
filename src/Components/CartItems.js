import React, { Component } from 'react';
import CartItem from './CartItem';

class CartItems extends Component {
  render() {
    // console.log(this.props);
    const { cartItemsList } = this.props;

    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {cartItemsList.map((item, i) => {
            return <CartItem key={i} item={item} />;
          })}
          {/* loop through the arr of cartItemsList props
            / for each item of the items render a cart item Component
            / pass in the keys as props */}
        </div>
      </div>
    );
  }
}

export default CartItems;
