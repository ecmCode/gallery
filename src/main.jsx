import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Home from './pages/Home'
import Header from './pages/Header';
import Blog from './pages/Blog';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/404' element={<NotFound/>} />
            <Route path='*' element={<Navigate to='/404'/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
