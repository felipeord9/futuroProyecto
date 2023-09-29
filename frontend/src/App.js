import './App.css';
import { BrowserRouter as Router, Routes,Route,Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './context/authContext';
import Historia from '../src/components/historia';
import Login from './components/Login/login';
import Misivisi from "./components/MIsi&Visi"
import Recovery from './components/recovery';
import Navbar from '../src/components/navbar';
import Restart from './components/restart';
import Productos from '../src/components/productos';
import React, { Component } from "react";
import PrivateRoute from '../src/components/PrivateRoute';

function App() {
  /* const {token,setToken}=UseToken();
  if (!token){
    return <Login setToken={setToken}/>
  } */
  return(
    <AuthContextProvider>
    <Router>
      <Navbar/>
      <div id='wrapper' className="d-flex vh-100 overflow-scroll">
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/recovery' element={<Recovery/>}/>
        {/* <Route path='/restart/Password' element={<RestartPassword/>}/> */}
        <Route path='/restart' element={<Restart/>}/>
        {/* <Route path='/navbar/historia' element={<Historia/>}/>
        <Route path='/navbar/misiVisi' element={<Misivisi/>}/> */}
        <Route path='/navbar/historia' element={<PrivateRoute component={Historia}/>}/>
        <Route path='/navbar/misiVisi' element={<PrivateRoute component={Misivisi}/>}/>
        <Route path='/navbar/productos' element={<PrivateRoute component={Productos}/>}/>
      </Routes>
      {/* <Login/> */}
      </div>
    </Router>
  </AuthContextProvider>
);
}

export default App;
