const alunos = [
    { nome: "João", idade: 20, nota: [7, 8, 9] },
    { nome: "Maria", idade: 22, nota: [3, 2, 1] },
    { nome: "Pedro", idade: 19, nota: [7.5, 8.0, 8.5] },
    { nome: "Ana", idade: 21, nota: [8.0, 8.5, 9.0] },
];

function calcularMedia(n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3

    return media.toFixed(2)

}

for (let i = 0; alunos.length > i; i++) {
    const aluno = alunos[i]
    const media = calcularMedia(aluno.nota[0], aluno.nota[1], aluno.nota[2])

    console.log(`A média do aluno ${aluno.nome} é ${media}`)

    let status = "";
    if (media >= 6.0) {
        console.log('${aluno.nome} a média é ${media} - APROVADO')

    }
    console.log(`${aluno.nome} a média é ${media} - REPROVADO`)
    }







    



