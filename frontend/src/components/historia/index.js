import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function Historia(){
    const {isLogged,logout}=useUser(false);
    const navigate = useNavigate();
    return(
        <>
        {isLogged &&(
            <div className="text-align-center mt-2 p-2">
            <h1><strong>Nuestra Historia</strong></h1>
            <p>El GRAN LANGOSTINO S.A.S Fue constítuida en febrero de 2001 en la ciudad de Buenaventura, donde sus socios fundadores contaban con una trayectoria comercial en el sector pesquero de 27 años como personas dedicadas a la compra y venta de toda clase de pescados, mariscos y moluscos; de esta manera su experiencia y respeto comercial les permitió gozar de un amplio reconocimiento en la región.</p>

            <p>Las instalaciones de la empresa se encuentran ubicados en el sector pesquero de la ciudad de Buenaventura, y cuenta con una planta donde se procesa el producto que se compra directamente a los pescadores artesanales.</p>

            <p>En el año 2016 se construye la planta de proceso de YUMBO, para dar abastecimiento a la gran demanda de filete de salmón, donde El GRAN LANGOSTINO es uno de los principales proveedores a nivel nacional</p>
        </div>
        )}
    </>
    )
}