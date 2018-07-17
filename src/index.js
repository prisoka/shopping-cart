import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import CartHeader from './CartHeader';
// import CartItems from './CartItems';
// import CartFooter from './CartFooter';

import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<CartItems />, document.getElementById('items'));
// ReactDOM.render(<CartFooter />, document.getElementById('footer'));

registerServiceWorker();
