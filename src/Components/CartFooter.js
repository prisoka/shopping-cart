import React, { Component } from 'react';

// const Copyright = ({year}) => (
//   <span> &copy; {year} </span>
// );
//
// class CartFooter extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-dark bg-dark">
//         <a className="navbar-brand" href="#">
//           <Copyright year="2016"/>
//         </a>
//       </nav>
//     );
//   }
// }

const CartFooter = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">&copy; {props.copyright}</a>
    </nav>
  )
}

export default CartFooter;
