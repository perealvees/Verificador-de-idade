function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('dataNasc')
    var res = document.getElementById('res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = "Homem"
            if(idade >= 0 && idade < 10) {
                img.setAttribute("src", "/img/homem criança.png")
            } else if(idade >= 10 && idade <= 21) {
                img.setAttribute("src", "/img/menino adolescente.png")
            } else if (idade < 50) {
                img.setAttribute("src", "/img/homem adulto.png")
            } else {
                img.setAttribute("src", "/img/homem idoso.png")
            }

        } else if (fsex[1].checked) {
            genero = "Mulher"
            if(idade >= 0 && idade < 10) {
                img.setAttribute("src", "/img/menina criança.png")
            } else if(idade >= 10 && idade <= 21) {
                img.setAttribute("src", "/img/menina adolescente.png")
            } else if (idade < 50) {
                img.setAttribute("src", "/img/mulher adulta.png")
            } else {
                img.setAttribute("src", "/img/mulher idosa.png")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}