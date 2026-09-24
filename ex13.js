const users = [
    {
        name: 'Axel',
        age: 34,
        email: 'axel@example.com',
        senha: '123456'
    },
    {
        name: 'Beatriz',
        age: 17,
        email: 'beatriz@example.com',
        senha: '654321'
    }
];

const produtos = [
    {
        nome: 'nescau',
        preço: 2.99,
        restrito: false
    },
    {
        nome: 'café',
        preço: 10.99,
        restrito: false
    },
    {
        nome: 'Sao braz',
        preço: 10.00,
        restrito: true
    },
    {
        nome: 'cigarro',
        preço: 12.00,
        restrito: true
    }
];

function login(email, senha) {
    if (email === "" || senha === "") {
        console.log("Email e senha são obrigatórios!")
        return
    }
    const userdata = users.find(user => user.email === email)
    if (!userdata) {
        console.log("Usuário não encontrado!")
    }
    return userdata

}
function listarprodutos(idade) {
    if (idade < 18) {
        const produtosNaoRestritos = produtos.filter(produto => produto.restrito === false)
        return produtosNaoRestritos
    }
    return produtos

}

async function acessarSistema(email, senha) {
    const userdata = await Promise.resolve(login(email, senha))

    if (userdata === undefined) {

        return
    }

    const produtos = listarprodutos(userdata.age)

    console.log(produtos)
}

acessarSistema('axel@example.com', '123456')
