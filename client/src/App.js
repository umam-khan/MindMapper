import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from "./pages/Login"
import Register from './pages/Register';
import Home from './pages/Home';

export default function App(){
  return (
    <>
      <Routes>
        <Route path='/' element={<><h1>Hello World</h1></>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </>
  );
}