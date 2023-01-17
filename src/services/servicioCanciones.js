import { generarToken } from "./servicioToken"

// Receta para consumir un api con react

export async function servicioCancionesTop(){

    let token=await generarToken()

    //1. pa donde vas y a que vas
    //escribir  la url del servicio api
    const URL="https://api.spotify.com/v1/artists/1Cs0zKBU1kc0i8ypK3B9ai/top-tracks?market=US"

    //2. que operacion va hacer en la base de datos
    //configurar la petecion de envio hacia el servidor
    const PETICION={
        method:"GET",
        headers:{Authorization:token}
    }
    //3. nos vamos pal restaurante
    //consumimos el api
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return(canciones)
}

