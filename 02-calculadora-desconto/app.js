'use strict'

function removerClasse() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('ate', 'entre', 'acima')
}

function calcularDesconto() {
    const preco = document.getElementById('preco')
    const percentual = document.getElementById('percentual')
    const resultado = document.getElementById('resultado')
    
    const p = document.createElement('p')

    const decimal = percentual.value / 100
    
    removerClasse()
    if (percentual.value <= 5)
        resultado.classList.add('ate')
    else if (percentual.value > 5 && percentual.value < 10)
        resultado.classList.add('entre')
    else
        resultado.classList.add('acima')

    let valorFinal = preco.value - (preco.value * decimal)
    let valorEconomizado = preco.value * decimal

    resultado.textContent = `Valor economizado: ${valorEconomizado}\nValor final: ${valorFinal}`
}