function carregar(){
let hora = document.querySelector('.mensage')
let img = document.querySelector('.foto')
let data = new Date()
let time = data.getHours()
hora.innerHTML = `Agora são ${time} horas!`
if (time >= 0 && hora <12){
document.body.style.background = '#F5DEB3'
} else if(time >= 12 && time <18){
    document.body.style.background = '#0EA5E9'

} else {
    document.body.style.background = '#342C80'
}

}
