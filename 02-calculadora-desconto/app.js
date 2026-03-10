'use strict'

function removerClasse() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('ate', 'entre', 'acima')
}

function calcularDesconto() {
    const preco = document.getElementById('preco')
    const percentual = document.getElementById('percentual')
    const resultado = document.getElementById('resultado')
    
    const div = document.createElement('div')

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')

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

    p1.textContent = `Valor economizado: ${valorEconomizado}`
    p2.textContent = `Valor final: ${valorFinal}`

    div.appendChild(p1.textContent)
    div.appendChild(p2.textContent)

    resultado.textContent = `${div}`
}