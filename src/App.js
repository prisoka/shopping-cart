import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

// const Copyright = (props) => (
//   <span> &copy; {props.year} </span>
// );
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <nav className="navbar navbar-dark bg-primary">
//             <a className="navbar-brand" href="#">Shopping Cart</a>
//           </nav>
//         </header>
//
//         <div className="container">
//           <h1>Cart Items</h1>
//         </div>
//
//         <footer>
//           <nav className="navbar navbar-dark bg-dark">
//             <a className="navbar-brand" href="#">
//                 <Copyright year="2016"/>
//             </a>
//           </nav>
//         </footer>
//       </div>
//     );
//   }
// }
//
// export default App;
