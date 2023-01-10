import { servicioCancionesTop } from "../services/servicioCanciones"

export function Music(){

    servicioCancionesTop()

    return(
        //Fragmento <></>
        <>
            <h1>Music cargando...</h1>
        </>
    )
}