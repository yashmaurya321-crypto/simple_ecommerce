import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { UserProvider } from './Comp/UserContext';
ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Wrap your entire application with BrowserRouter */}
    <UserProvider>
    <Provider store={store}>
        <App />
      </Provider>
    </UserProvider>
     
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
