import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';

import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<CartHeader />, document.getElementById('root'));
ReactDOM.render(<CartItems />, document.getElementById('cart_items'));
ReactDOM.render(<CartFooter />, document.getElementById('footer'));

registerServiceWorker();
