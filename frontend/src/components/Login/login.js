import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assest/logo-gran-langostino.png'
import './login.css';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const {login,isLoginLoading,hasLoginError,isLogged}=useUser()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate =useNavigate()

  useEffect(()=>{
    if(isLogged)navigate('/navbar');
  },[isLogged,navigate]);

  const handleLogin=async(e)=>{
    e.preventDefault();
    login({email,password});
  }

  const [shown,setShown]=useState("");
  const switchShown =()=>setShown(!shown);
  const onChange=({currentTarget})=>setPassword(currentTarget.value);

  return(
    <div className=" wrapper d-flex justify-content-center align-items-center vh-100 w-100 m-auto">
      <div className='rounder-4'>
      <div className='login-wrapper p-2 shadow border-light rounded-4 border border-1 bg-gradient d-flexjustify-content-between'>
      <img src={Logo} alt=''/>
      <h1>Log In</h1>
      <form onSubmit={handleLogin} className=''>
        <div className='input_group m-2 '>
          <input type='text' id='usuario' className='input_group_input' required onChange={(e)=> setEmail(e.target.value)}/>
          <label for="usuario" className='input_group_label'>Usuario</label>
        </div>
        <div className='input_group m-2 d-flex flex-column'>
          <input type={shown ? 'text':'password'} onChange={(e)=>setPassword(e.target.value)} id='email' className='input_group_input' required/>
          <label for="email" className='input_group_label'>Password</label>
        
        <label className=''>
          <input type='checkbox' onClick={switchShown}></input><strong>{shown ? 'Ocultar':'Mostrar'}</strong>
          {/* <Checkbox defaultChecked sx={{'& .MuiSvgIcon-root':{fontSize:28}, color:FE7F29}}/>{shown ? 'Ocultar':'Mostrar'} */}
        </label>
        </div>
        <div className='align-content-center text-align-center align-items-center ms-5'>
          <button type="submit"><strong>Entrar</strong></button>
        </div>
        <label><a href='/recovery' className='text-decoration-none m-2' style={{fontSize:'medium'}}><strong>¿Olvidaste tu constraseña?</strong></a></label>
      </form>
      {isLoginLoading && <div className='loading'>Cargando...</div>}
      {hasLoginError && <div className='text-danger text-center mt-2'>Credenciales Incorrectas</div>}
    </div>
    </div>
    </div>
  )
}

/* Login.propTypes = {
  setToken: PropTypes.func.isRequired
}; */