
import './App.css';
import React from 'react';
import Advanced from './examples/Advanced';
import LoginScreen from './examples/LoginScreen';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterScreen from './examples/RegisterScreen';




function App  () {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element ={<LoginScreen/> } />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route exact path="/advanced" element={<Advanced/>} />
      </Routes>
    </Router>
  );
};

   




export default App;
