import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Homerseklet from "./pages/homerseklet";
import Valuta from './pages/valuta';
import Calculator from './pages/calculator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<h1>404</h1>}></Route>
        <Route path='/homerseklet' element={<Homerseklet/>}></Route>
        <Route path='/valuta' element={<Valuta/>}></Route>
        <Route path='/calculator' element={<Calculator/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
