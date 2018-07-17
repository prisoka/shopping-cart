import React, { Component } from 'react';

const Copyright = (props) => (
  <span> &copy; {props.year} </span>
);

class CartFooter extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <Copyright year="2016"/>
        </a>
      </nav>
    );
  }
}

export default CartFooter;
