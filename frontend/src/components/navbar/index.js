/* import { useState } from "react"; */
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import Login from '../Login/login'
import useUser from "../../hooks/useUser";
import Logo from "../../assest/logo-gran-langostino.png";
import './styles.css'
/* import log2 from "../src/assest/logo-langos.png" */
import React from "react";
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";

 export default function Navbar() {
    const [isOpen,setIsOpen]=useState(false)
    const { isLogged, logout } = useUser();
    const navigate = useNavigate();
  
    const onClick =async(e)=>{
      e.preventDefault();
      navigate('/login')
    }
    return (
      <>
        {isLogged && (
          <div
            className="position-sticky bg-light w-100"
            style={{ fontSize: 11, left: 0, height:"100px", zIndex: 2}}
          >
            <div className="d-flex flex-row justify-content-between align-items-center w-100 h-100 px-3 shadow h-100">
              <div
                id="logo-header"
                className="d-flex flex-row align-items-center gap-3 " 
              >
                <img
                  src={Logo}
                  width={100}
                  onClick={(e)=>logout()}
                  alt=""
                  style={{ cursor: "pointer" , height:"80px", width:"300px"}}
                />
              </div>
  

              <div className="d-flex flex-row align-items-center gap-3">
                <div className="">
                    <div className={`nav_items ${isOpen && "open"}`}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{backgroundColor: '#FE7F29'}}>
                        <Button><a href="/navbar/historia">Nuestra Historia</a></Button>
                        <Button><a href="/navbar/misivisi">Mision y Vision</a></Button>
                        <Button><a href="/navbar/productos">Catálogo</a></Button>
                        <Button ><a style={{cursor:'pointer'}} onClick={(e)=>logout()} className="fw-bold ">Cerrar Seccion<FiIcons.FiLogOut /></a></Button>
                    </ButtonGroup>
                    </div>
                    <div className={`nav_toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)} navigate to="/login">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )} <navigate to='/login'/>
      </>
    );
  }
/* );
} */

/* export default Navbar; */