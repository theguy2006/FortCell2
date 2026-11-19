function ver() {
    let idade = (document.getElementById('iage').value)
    let resultado = document.getElementById('verificacao')

    if (idade < 18) {
        resultado.innerHTML = `você tem ${idade} anos, você é de menor`
    } else {
        resultado.innerHTML = `você tem ${idade} anos, você é de maior`
    }
}