import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { BusinessContextProvider } from './context/businessContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BusinessContextProvider>
        <App />
      </BusinessContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

