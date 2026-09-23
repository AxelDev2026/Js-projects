const user = {
    name: 'Axel',
    age: 34,
    email: 'axelsaude@gmail.com',
    brasileiro: true,
    genero: 'masculino'

}
const filmes = [
    {
        titulo: 'O Poderoso Chefão',
        ano: 1972,
        genero: 'Crime, Drama',
        paramaioridade: false

    },
    {
        titulo: 'O Senhor dos Anéis: O Retorno do Rei',
        ano: 2003,
        genero: 'Aventura, Fantasia',
        paramaioridade: false}
]

if (user.idade >= 18 && user.genero === 'masculino') {
    console.log("${user.name} deve se alistar!")
    return

}

console.log("não precisa se alistar!")


