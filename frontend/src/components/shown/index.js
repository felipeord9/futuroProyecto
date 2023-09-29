import { useState } from "react";

export default function Shown({id,label}){
    const [password,setPassword]=useState();
    const [shown,setShown]=useState();
    const switchShown=()=>setShown(!shown);
    
    return(
    <div>
        <div className='input_group m-1 d-flex flex-column'>
            <input type={shown ? 'text':'password'} id='newPass' className='input_group_input' required onChange={(e)=> setPassword(e.target.value)} autoComplete="off"/>
            <label for="newPass" className='input_group_label'>{label}</label>
            <label>
            <input type="checkbox" className="fontSize:" onClick={switchShown}></input><strong>{shown ? 'Ocultar':'Mostrar'}</strong>
            </label>
        </div>
    </div>
    )
}