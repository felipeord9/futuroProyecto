import { useState } from "react";
import Swal from 'sweetalert2';
import Logo from '../../assest/logo-gran-langostino.png'
import { sendRecovery } from "../../services/authService";
import { defer, useNavigate } from "react-router-dom";

export default function Recovery(){  
    const[email,setEmail]= useState("");
    const [error,setError]=useState('');
    const Navigate =useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        sendRecovery(email)
        .then((data)=>{
            Swal.fire({
                title:'CORRECTO',
                text:'El correo de recuperacion se ha enviado a su correo',
                icon:'success',
                confirmButtonText:'Aceptar'
            })
            Navigate('/login')
        })
        .catch((error)=>{
          setError(error)
          setTimeout(() => setError(''),2500)
      })
    }

    return(
    <div className=" wrapper d-flex justify-content-center align-items-center vh-100 w-100 m-auto">
      <div className='rounder-4'>
      <div className='login-wrapper p-2 shadow border-light rounded-4 border border-1 bg-gradient' /* style={{ background:"white"}} */>
      <img src={Logo} alt=''/>
      <h1 className="m-2">Recovery Password</h1>
      <form onSubmit={handleSubmit} className=''>
        <div className='input_group m-2'>
          <input type='text' id='usuario' className='input_group_input' required onChange={(e)=> setEmail(e.target.value)}/>
          <label for="usuario" className='input_group_label'>Ingrese su Email</label>
        </div>
        <div className='align-content-center text-align-center align-items-center ms-4'>
          <button type="submit">Enviar Correo</button>
        </div>
        <a href="/login" className="text-decoration-none text-align-center m-5"style={{fontSize:'medium'}}><strong>Volver al Login</strong></a>
      </form>
    </div>
    </div>
    </div>
  )
}