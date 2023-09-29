import fabrica1 from '../../assest/fabrica1.png'
import fab2 from '../../assest/Fabrica-2.png'
import React from "react"
import useUser from '../../hooks/useUser'
import { useNavigate } from 'react-router-dom';
export default function MisiVisi(){
    const {isLogged,logout}=useUser(false);
    const navigate=useNavigate();
    return(
    <>
    {isLogged && (
        <div className="d-flex justify-content-center text-align-center border-4 flex-row content-align-row ">
        <div className="flex-column d-flex text-align-center flex-column w-40 p-2" >
            <div>
            <h1> <strong>Mision</strong></h1>
            <p>El GRAN LANGOSTINO es una organización Colombiana registrada legalmente, que se dedica a la comercialización de pescado y mariscos, para la industria alimenticia Nacional, en los canales mayoristas y minoristas, cumpliendo con los estándares de calidad requeridos por ley y con el apoyo de un recurso humano capacitado, logrando diferenciarnos por nuestro servicio, calidad y variedad de productos que comercializamos.</p>
            <img alt="" src={fabrica1} className='w-100' />
            </div>
        </div>
        <div className="flex-column d-flex text-align-center flex-column w-50 p-2" >
            <h1> <strong>Vision</strong></h1>
            <p>En el año 2020 la empresa El GRAN LANGOSTINO será una organización reconocida en el mercado por sus buenas prácticas legales y medio- ambientales, identificada por que ofrece productos de alta calidad al consumidor, hoteles, restaurantes, supermercados de cadena y grandes superficies, toda vez que nos ajustamos a los requerimientos y expectativas de nuestros clientes, diferenciándonos en el mercado por contar con certificaciones en los procesos de calidad estandarizados.</p>
            <img src={fab2} alt=""/>
        </div>
    </div>
    )}
    </>
    )
}