import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {

  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>

  <React.StrictMode>
    <BrowserRouter>
    <HelmetProvider>

    <App />
    </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
  </QueryClientProvider>
);


reportWebVitals();
