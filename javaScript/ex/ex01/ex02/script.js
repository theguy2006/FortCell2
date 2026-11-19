function ver(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')
    if (fano.value <= 0){
        alert('verifique os dados')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        
        var gen = ''
        if (sex[0].checked){
            gen = 'Homem'
        } else if (sex[1].checked){
            gen = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos: ${gen} com ${idade} anos`
    }
}