function conf(){
    let vel = Number(document.getElementById('ivel').value)
    let res = document.getElementById('res')

    if (vel <= 0) {
        res.textContent = `você está parado`
    } else if(vel  <= 60){
        res.textContent = `você está no limite de velocidade`
    } else if(vel <= 80){
        res.textContent = `você está acima do limite de velocidade, logo sera multado!`
    }

} 