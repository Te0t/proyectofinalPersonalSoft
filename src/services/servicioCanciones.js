// Receta para consumir un api con react

export async function servicioCancionesTop(){
    //1. pa donde vas y a que vas
    //escribir  la url del servicio api
    const URL="https://api.spotify.com/v1/artists/1Cs0zKBU1kc0i8ypK3B9ai/top-tracks?market=US"

    //2. que operacion va hacer en la base de datos
    //configurar la petecion de envio hacia el servidor
    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQBSFsxJKsG50UoWlxrQjIc_oZ_BmrB5cUGbdkl1PhosiDcx8NU6tml4whhX6bhk0-BZB51GSeS9y5Om2H56LavrGl0sjgR0efqczlpZaRS7AaeeX7bEKPzQmjHtNw3PwQEe312Xu-cR7_PpAZuWyPmfw-S2gOf6hBhFVGDGyotMai_c9ypa57p2d6uLyyFKKq4"}
    }
    //3. nos vamos pal restaurante
    //consumimos el api
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return(canciones)
}

