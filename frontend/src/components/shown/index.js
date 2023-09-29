import { useState } from "react";

export default function Shown({id,label}){
    const [password,setPassword]=useState();
    const [shown,setShown]=useState();
    const switchShown=()=>setShown(!shown);
    
    return(
    <div>
        <div className='input_group p-2' style={{cursor:"pointer"}}>
            <input type={shown ? 'text':'password'} id='newPass' className='input_group_input' required onChange={(e)=> setPassword(e.target.value)} autoComplete="off"/>
            <label for="newPass" className='input_group_label'>{label}</label>
        </div>
        <div className="d-flex align-items-center position-relative">
            <label>
            <input type="checkbox" className="fontSize:" onClick={switchShown}></input>{shown ? 'Ocultar':'Mostrar'}
            </label>
        </div>
    </div>
    )
}