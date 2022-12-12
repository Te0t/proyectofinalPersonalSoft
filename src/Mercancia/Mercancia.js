import { Footer } from '../shared/Footer/Footer'
import { useNavigate } from 'react-router-dom'

export function Mercancia(){

    let navegacion=useNavigate()

    //que hago cuando se de el evento...
    function detectarEvento(productoSeleccionado){
        navegacion('/tienda',{
            state:{productoSeleccionado}
        })
    }

    let titulo="Productos del Dj"

    let productos=[
        {
            nombre:"Camiseta original",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/productoDavidcamisa.webp?alt=media&token=19cc3a51-a540-4ff1-a926-b027a299a62d",
            precio:"USD "+99
        },
        {
            nombre:"Discos original",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/productoDaviddisco.jpg?alt=media&token=1fee95df-d44c-4446-86d1-04a6476addbc",
            precio:"USD "+199
        },
        {
            nombre:"Audifonos originales david guetta",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/productoDavidaudifonos.jpg?alt=media&token=9f4a0a9a-b511-47dc-8261-c4943ff35e89",
            precio:"USD "+259
        },
        {
            nombre:"Zapatos ultimo concierto david guetta",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/productoDavidzapatos.png?alt=media&token=e72f75b7-a8ce-4819-9017-2dcf1f390a0a",
            precio:"USD "+179
        },
        {
            nombre:"Album david guetta",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/productoDavid1.jpg?alt=media&token=0605ead5-704a-4604-adcd-f48c132028ee",
            precio:"USD "+349
        },
        {
            nombre:"Gafas david guetta",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/productoGafas.jpg?alt=media&token=86603dac-33e0-4eff-80c8-f623d37aa198",
            precio:"USD "+109
        },
    ]

    return(
        <>
            <h1>{titulo}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    
                    {
                        productos.map(function(producto,id){
                            return(
                                <>
                                    <div className="col" key={id}>
                                        <div className="card h-100 shadow">
                                        <button className="btn btn-primary mx-5 my-3" onClick={
                                            function(){
                                                detectarEvento(producto)
                                            }
                                        }>Ampliar</button>
                                            <img src={producto.foto} alt="foto" className="h-100 img-fluid w-100"/>
                                            <hr/>
                                            <h3 className="pb-2 text-center">{producto.nombre}</h3>
                                            <h4 className="pb-2 text-center">{producto.precio}</h4>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}