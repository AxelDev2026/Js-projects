const dias = 12
const valordia = 135.33

// Alterado de 'const' para 'let' para permitir que o valor seja modificado depois
let calculo = dias * valordia 

if (dias > 10) {
    const desconto = calculo * 0.15
    calculo = calculo - desconto
} else if (dias > 5) { 
    // Usando 'else if' para que ele não aplique duas taxas cumulativas se dias for maior que 10
    const desconto = calculo * 0.20
    calculo = calculo - desconto 
}

console.log(`o valor total é R$ ${calculo.toFixed(2)}`)
