'use strict'

const calcularIMC = (peso, altura) => peso / (altura ** 2)

function definirSituacao (imc) {
    if (imc < 18.5)
        return 'Abaixo do peso'
    else if (imc < 25)
        return 'Peso normal'
    else if (imc < 30)
        return 'Sobrepeso'
    else if (imc < 35)
        return 'Obesidade grau I'
    else if (imc < 40)
        return 'Obesidade grau II'
    else
        return 'Obesidade grau III'
}

function selecionarCor (imc) {
    if (imc < 18.5)
        return 'status1'
    else if (imc < 25)
        return 'status2'
    else if (imc < 30)
        return 'status3'
    else if (imc < 35)
        return 'status4'
    else if (imc < 40)
        return 'status5'
    else
        return 'status6'
}

function removerClasse() {
    document.getElementById('resultado')
        .classList.remove(
            'status1', 'status2', 'status3',
            'status4', 'status5', 'status6'
        )
}

function handleClick () {
    const altura = Number(document.getElementById('altura').value)
    const peso = Number(document.getElementById('peso').value)
    const resultado = document.getElementById('resultado')

    const imc = Number(calcularIMC(peso, altura).toFixed(2))
    const status = definirSituacao(imc)
    const cor = selecionarCor(imc)

    removerClasse()
    resultado.textContent = `${imc} = ${status}`
    resultado.classList.add(cor)
}