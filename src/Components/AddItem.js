import React, { Component } from 'react';

class AddItem extends Component {
  render() {
    // console.log(this.props); // this the the obj itself w/ key=products and values=[objs]
    // console.log(this.props.products); // this is an array of objects
    const { products } = this.props;

    return (
      <div>
        <form>
          <label>
            Quantity
          </label>
            <input type='text' />
          <label>
            Products
          </label>
          <select>
            <option value="">Select an option</option>
            {products.map((product) => {
              return <option key={product.id} value={product.id}>{product.name}</option>
            })}
          </select>
          <input type='submit' value='Submit' />
        </form>
       </div>
    );
  }
}

export default AddItem;
