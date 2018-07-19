import React, { Component } from 'react';

class AddItem extends Component {

  // initializing the state
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      quantity: 0
    };
  }

  onSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    // console.log(this.props)
    const {selectedId, quantity} = this.state;

    const {products, onItemAdded} = this.props;

    const product = products.find(product => {
      return product.id === selectedId;
    })

    // console.log(product)

    const cartItem = {
      product: product,
      quantity: parseInt(quantity)
    }
    // console.log(cartItem)

    onItemAdded(cartItem)
  }

  onChange = (e) => this.setState({
    [e.target.name]: parseInt(e.target.value)
  })

  render() {
    // console.log(this.props); // this the the obj itself w/ key=products and values=[objs]
    // console.log(this.props.products); // this is an array of objects
    const { products } = this.props;

    return (
      <div >
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div>
              <label>
                Quantity
              </label><br/>
              <input type='number' name='quantity' onChange={this.onChange} />
            </div>
            <div >
              <label>
                Products
              </label><br/>
              <select name='selectedId' onChange={this.onChange} >
                <option value="" >Select an option</option>
                {products.map((product) => {
                  return <option key={product.id} value={product.id}>{product.name}</option>
                })}
              </select>
            </div><br/>
            <div>
              <input type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddItem;
