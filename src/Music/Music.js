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
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-5 g-5">
            {
                canciones.tracks.map(function(cancion,id){
                    return(
                        <div key={id}>
                            <div className="col h-100">
                                <div className="card h-100 shadow">
                                    <img src={cancion.album.images[0].url} className="h-100 img-fluid w-100"></img>
                                    <h2 className="pb-1 text-center">{cancion.name}</h2>
                                        <div className="text-center">
                                            <audio controls src={cancion.preview_url}></audio>
                                            </div>
                                    <h1 className="pb-2 text-center"></h1>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
                </div>
            </div>
            </>
        )
    }
}