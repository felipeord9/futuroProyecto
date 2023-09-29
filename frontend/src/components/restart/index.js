import { useState } from "react";
import Shown from "../shown";
import { useNavigate, useParams } from "react-router-dom";
import { changePassword, changeRecoveryPassword } from "../../services/authService";
import Logo from '../../assest/logo-gran-langostino.png'

export default function Restart(){
    const[newPass,setNewPass]=useState();
    const[confirmPass,setConfirmPass]=useState();
    const[mistake,setMistake]=useState();
    const {token}=useParams();
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(newPass !== confirmPass){
            setMistake('Passwords are not the same')
            return setTimeout(()=>setMistake(''),3000)
        }
        changeRecoveryPassword({token,newPass})
            .then((data)=>{
                console.log(data)
            })
            .catch((error)=>{
                setMistake('El token espiró')
                console.log(error)
            })
    }

    return(
    <div className=" wrapper d-flex justify-content-center align-items-center vh-100 w-100 m-auto">
      <div className='rounder-4'>
      <div className='login-wrapper p-2'>
      <img src={Logo} alt=''/>
      <h1>Restart Password</h1>
      <form onSubmit={handleSubmit} className=''>
        <div>
        <Shown label='New Password' password={newPass} setPassword={setNewPass}/>
        </div>
        <div>
        <Shown label='Confirm New Password' password={confirmPass} setPassword={setConfirmPass}/>
        </div>
        <div className='align-content-center text-align-center align-items-center p-2'>
          <button type="submit">Reestablecer</button>
        </div>
      </form>
    </div>
    </div>
    </div>
    )
}