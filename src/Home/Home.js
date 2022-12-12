import './Home.css'

import { Footer } from '../shared/Footer/Footer'

export function Home(){

    return(
        <>
            <section>
                <div className="banner">

                </div>
            </section>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2>David Guetta</h2>
                            <p>
                            Pierre David Guetta (París, 7 de noviembre de 1967) es un DJ, compositor y productor francés. Actualmente, ocupa el puesto #2 según la encuesta realizada por DJ Magazine. Se inició como tal en varias discotecas durante las décadas de 1980 y de 1990, antes de fundar Gum Productions y lanzar su primer álbum: Just a Little More Love (2002). Años más tarde llegarían Guetta Blaster (2004), Pop Life (2007), el exitoso One love (2009), el cual incluye los sencillos «When love takes over» —junto a Kelly Rowland— lo que le valió para ganar un Grammy y ganar el éxito en todo el mundo, vendiendo más de 5,5 millones de copias en todo el mundo,​ «Sexy Bitch» —junto a Akon e incluido en el top 5 en Estados Unidos— y «Gettin' Over You» —junto a Chris Willis, Fergie y LMFAO—. Estas tres canciones fueron número uno en el Reino Unido. En 2011, Nothing But The Beat lanzado el 29 de agosto en Reino Unido y el 30 del mismo mes en Estados Unidos este nuevo álbum, con Dedos extra que contiene solamente música electrónica y finalmente, decidió re-lanzar su exitoso álbum con 1000nuevas canciones bajo el nombre de, Nothing But The Beat 2.0 que contiene los dos CD de este último, y uno extra con 10 remixes de sus canciones más populares.
                            </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/perfilDavidguetta.jpg?alt=media&token=048135ed-28fe-4d1b-a8c2-6f09a50f1e00" className="img-fluid w-100"/>
                        </div>

                        <div className="col-12 col-md-4 border-start align-self-center bg-dark text-white p-5">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="fw-bold">Proximos Conciertos</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Med</h3>
                                    <h5>Dec 2</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Cali</h3>
                                    <h5>Dec 3</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Bog</h3>
                                    <h5>Dec 4</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Barr</h3>
                                    <h5>Dec 5</h5>
                                </div>
                            </div>  

                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1>NOTICIAS</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/noticia2Concierto.jpg?alt=media&token=f7d4a8ff-fd33-4b52-bf43-a550b7a0e595" alt="noticia 1" className="img-fluid w-100"/>
                        </div>
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/noticia3Concierto.jpg?alt=media&token=e2dd014b-d167-4365-b0eb-e4471088abb0" alt="noticia 2" className="img-fluid w-100"/>
                        </div>
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/noticia3Concierto.jpg?alt=media&token=23e1a165-981f-4636-b032-11406202376a" alt="noticia 3" className="img-fluid w-100"/>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )

}