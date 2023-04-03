import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Our Menu</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div class="booking-button">
      <button>Make a Booking</button>
    </div>
    <div class="btm-image">
      <h2>Japanese so fresh, any fresh you have to fly to Japan</h2>
    </div>
  </React.Fragment>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
