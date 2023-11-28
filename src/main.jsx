import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline } from "@mui/material";

export const getProductById = async (id) => {
  try {
    const response = await fetch(`/api/products/${id}`);
    console.log(response); 

    if (!response.ok) {
      throw new Error('Error al recuperar el producto por ID: ' + response.statusText);
    }

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al analizar JSON:', error);
      throw new Error('Error al analizar JSON: ' + error.message);
    }
  } catch (error) {
    console.error('Error al recuperar el producto:', error);
    throw new Error('Error al recuperar el producto por ID: ' + error.message);
  }
};



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
    <App />
  </React.StrictMode>,
)
