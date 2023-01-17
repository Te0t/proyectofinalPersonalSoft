export function Historia() {


    let history = [
        {
            nombre: "2005",
            perfil: "https://firebasestorage.googleapis.com/v0/b/archivosfotos-73c21.appspot.com/o/imgTomorrowland.jpg?alt=media&token=b270770d-5d66-4ee7-98c1-1162405aee89",
            vida: "2005 - Sunday August 14, 2005 – a magical date in the history of Tomorrowland. A brand new festival popped up, transforming the town of Boom into a fairy tale dominion, where enchanting electronic music was to be heard from behind every tree and out of every rabbit hole. From the start Tomorrowland turned out to be a grand spectacle, unlike anything that came before it. But this was only the beginning of our fairy tale... About 10,000 people bore witness to the first edition of Tomorrowland, and to the magic that surrounded it (including DJ sets by Sven Väth, Sasha, Armin van Buuren, Erol Alkan and Justice)."
        },
        {
            nombre: "2006",
            perfil: "https://firebasestorage.googleapis.com/v0/b/archivosfotos-73c21.appspot.com/o/2006.jpg?alt=media&token=ece9888d-e38d-4466-ae0b-0758319d6f51",
            vida: "2006 - In the second year, Tomorrowland took place in July. Word-of-mouth was growing stronger throughout Belgium, and with eight stages and enough extra space to put up three thousand sleeping beauties, the second edition wasn’t only bigger in terms of attendance but also in magic and experience."
        },
        {
            nombre: "2007",
            perfil: "https://firebasestorage.googleapis.com/v0/b/archivosfotos-73c21.appspot.com/o/2007-2.jpg?alt=media&token=27dda378-051c-4c74-b4ea-f1f004d0a67c",
            vida: "2007 - Soon enough, word also travelled outside Belgium’s borders, and come the third edition, people from the Netherlands, France, Germany and the United Kingdom travelled to Belgium to unveil the mysteries of Tomorrowland. More than 20,000 people were welcomed and for the first time, Tomorrowland took place over 2 days."
        },
    ]

    return (
        //Fragmento <></>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-5 p-5">

                {
                    history.map(function (histor) {
                        return (
                            <>

                                <div className="col align-self-center shadow">
                                    <h4 className="pb-2 text-center">{histor.vida}</h4>
                                </div>
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <img src={histor.perfil} alt="foto" className="h-100 img-fluid w-100" />
                                        <hr />
                                        <h3 className="pb-2 text-center">{histor.nombre}</h3>
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