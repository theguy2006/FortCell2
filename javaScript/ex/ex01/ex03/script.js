function ver(){
    let data = new Date
    let ano = data.getFullYear()
    let fano = document.getElementById('idata')
    let res = document.getElementById('res')
    if(fano.value <= 0){
        alert('verifique suas informações')
    } else {
        let sex = document.getElementsByName('sex')
        let idade = ano - Number(fano.value)

        let gen = ''
        if(sex[0].checked){
            gen = 'homem'
        } else if (sex[1].checked){
            gen = 'mulher'
        }

        res.innerHTML = `detectamos: ${gen} com ${idade} anos`
    }
} 