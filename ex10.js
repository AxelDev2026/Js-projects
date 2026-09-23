const user = {
    name: 'Axel',
    age: 34,
    email: 'axel@example.com',
    senha: '123456',
}
const email = "axel@example.com"
const senha = "123456"

if (email !== user.email || senha !== user.senha) {
    console.log("Email ou senha incorretos!")
    return
}

console.log(`Bem vindo ${user.name}!`)

