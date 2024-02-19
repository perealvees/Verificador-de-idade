function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    console.log(data)
    var fano = document.getElementById('dataNasc')
    var res = document.getElementById('res')

    if (fano.value.length ==  0 || parseInt(fano.value) > ano) {
        alert('#ERRO. Verifique novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        res.innerHTML = `Sua idade é ${idade}`
    }

    if(fsex [1].checked){
        genero = 'Homem'
    } else if (fsex[0].checked) {
        genero = 'Mulher'
    } 
    res.innerHTML = `Você é do genero ${genero} e sua idade é ${idade}`
}

