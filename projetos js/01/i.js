function attemp(){
var display = document.querySelector('.display')
var hora = new Date();
var horario = cortime(hora.getHours()) + ':' + cortime(hora.getMinutes()) + ':' + cortime(hora.getSeconds())
display.textContent = hora
display.textContent = horario;
console.log(horario);
}
function cortime(num){
    if (num < 10){
        num = '0' + num;
    }
    return num;
}
setInterval(attemp, 1000);

