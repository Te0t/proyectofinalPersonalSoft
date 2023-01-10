// Receta para consumir un api con react

export async function servicioCancionesTop(){
    //1. pa donde vas y a que vas
    //escribir  la url del servicio api
    const URL="https://api.spotify.com/v1/artists/1Cs0zKBU1kc0i8ypK3B9ai/top-tracks?market=US"

    //2. que operacion va hacer en la base de datos
    //configurar la petecion de envio hacia el servidor
    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQCw0GZkQ7NalO1uEOeOAdX14kSVC8eRby0PePF3sROjKVxBsrqhGA0x1qE2JmUFCfFq2LH2wSKZxPxcg9BBpCsEdptGThuFvHeCnuymmFfXxxxEuFj1jENJFT2Kt47Penc601SULEadNv-ueAjVsNsj0vmJPNAbWk2POCntb5ylTdOOWOPcwsxBgz6FVtMA87o"}
    }
    //3. nos vamos pal restaurante
    //consumimos el api
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    console.log(canciones)
}

