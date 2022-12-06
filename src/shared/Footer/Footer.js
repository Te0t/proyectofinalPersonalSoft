import "./Footer.css";

export function Footer() {
    return (
        <footer>
            <div class="container-fluid">
                <div class="row p-5 pie">
                    <div class="col-12 col-md-4 align-self-center">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/logoGuetta.png?alt=media&token=9ccdce27-5106-4553-9c2e-c13517ba4814"
                            alt=""
                        />
                    </div>
                    <div class="col-12 col-md-4 text-center">
                        <h2 class="fw-bold">SOBRE EL DJ</h2>
                        <h4>Dj profesional del tomorrowland</h4>

                        <h2 class="fw-bold">SOBRE EL DJ</h2>
                        <h4>Dj profesional del tomorrowland</h4>
                    </div>
                    <div class="col-12 col-md-4">
                        <i class="bi bi-instagram fuente me-5"></i>
                        <i class="bi bi-tiktok fuente me-5"></i>
                        <i class="bi bi-facebook fuente me-5"></i>
                        <i class="bi bi-vimeo fuente me-5"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
}
