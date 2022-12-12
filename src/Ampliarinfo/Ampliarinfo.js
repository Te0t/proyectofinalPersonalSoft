import { useLocation } from "react-router-dom"
export function Ampliarinfo(){

    let recepcionDatos=useLocation()

    let producto=recepcionDatos.state.productoSeleccionado
    console.log(producto)

    return(
        <>
           <h1>{producto.nombre}</h1> 
        </>
    )
}