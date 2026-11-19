function check(){
    var ic = document.getElementById('ic').value
    var check = document.getElementById('icheck')
    if(ic != 'Brasil'){
        check.innerHTML = `você é de fora, arrombado!`
    } else {
        check.innerHTML = `você é Brasileiro`
    }
}
