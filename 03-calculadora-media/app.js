'use strict'

const calcularMedia = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3

function definirSituacao (media) {
    if (media < 5)
        return 'reprovado'
    else if (media < 7)
        return 'recuperacao'
    else
        return 'aprovado'
}

function removerClasse() {
    document.getElementById('resultado')
    .classList.remove('reprovado', 'recuperacao', 'aprovado')
}

function handleClick () {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const resultado = document.getElementById('resultado')

    const media = calcularMedia(nota1, nota2, nota3)
    const statusECor = definirSituacao(media)

    removerClasse()
    resultado.textContent = `O aluno possui a média final ${media}, estando (de) ${statusECor}`
    resultado.classList.add(statusECor)
}