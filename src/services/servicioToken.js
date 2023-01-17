export async function generarToken(){

    const client_id="client_id=949f6df0548a4bd08d46be21c0438471"
    const client_secret="client_secret=c684afa6ebbc452787592d92daa2497a"
    const grant_type="grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id 

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,PETICION)

    let token=await respuesta.json()

    let tokenDefinitivo=token.token_type+" "+token.access_token

    console.log(tokenDefinitivo)

}