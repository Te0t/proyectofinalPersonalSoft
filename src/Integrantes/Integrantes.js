export function Integrantes() {


    let perfiles = [
        {
            nombre: "Dj Tiesto",
            perfil: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/perfilTiesto.jpg?alt=media&token=bb261676-2e72-4108-9dec-e177b3238082",
            vida: "Tijs Michiel Verwest ​ es un DJ y productor neerlandés. A pesar de que ha utilizado muchos alias en el pasado, es más conocido por su trabajo como DJ Tiësto o simplemente como Tiësto, un apodo que proviene de su sobrenombre de la infancia"
        },
        {
            nombre: "Dj Skrilex",
            perfil: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/perfilSkrillex.jpg?alt=media&token=6aa5c386-a6a1-497a-870b-27031237e6e8",
            vida: "Sonny John Moore, conocido por su nombre artístico Skrillex, es un cantante, productor discográfico y pinchadiscos estadounidense."
        },
        {
            nombre: "Dj Steve Aoki",
            perfil: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/perfilSteveaoki.jpg?alt=media&token=18a5198c-4655-4762-a084-797b9bf9e204",
            vida: "Steve Aoki, es un DJ y productor de EDM estadounidense de origen japonés, fundador del sello discográfico Dim Mak Records. Actualmente, ocupa el puesto #10, según el ranking de la revista DJ Mag."
        },
    ]

    return (
        //Fragmento <></>
        <div className="container bg-danger">
            <div className="row row-cols-1 row-cols-md-2 g-5 p-5">

                {
                    perfiles.map(function (perfile) {
                        return (
                            <>

                                <div className="col align-self-center shadow">
                                    <h4 className="pb-2 text-center">{perfile.vida}</h4>
                                </div>
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <img src={perfile.perfil} alt="foto" className="h-100 img-fluid w-100" />
                                        <hr />
                                        <h3 className="pb-2 text-center">{perfile.nombre}</h3>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}