import { servicioCancionesTop } from "../services/servicioCanciones"
import { useState,useEffect } from "react"

export function Music(){

    //usando el hook usestate para almacenar la respuesta del api en forma global
    const[canciones,setCanciones]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    //usando el hook useeffect para limitar el consumo del api a una sola vez
    useEffect(function(){
        servicioCancionesTop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
        })
    },[])

    //render del componente:
    if(estadoCarga==true){
        return(
            <>
                <h2>Estamos cargando las canciones</h2>
            </>
        )
    }else{
        return(
            <>
            <h2>Canciones de la banda</h2>
            <div className="row row-cols-1 row-cols-md-5 g-5">
            {
                canciones.tracks.map(function(cancion,id){
                    
                    return(
                        <div key={id}>
                            <div className="col">
                                <div className="card h-100 shadow">
                                    <img  className="card-img-top" src={cancion.album.images[0].url}></img>
                                    <div class="card-body">
                                        <h6 class="card-title">{cancion.name}</h6>
                                        <audio className="w-75 d-block mx-auto" controls src={cancion.preview_url} auto></audio>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Popularidad: {cancion.popularity}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
                </div>
            </>
        )
    }
}