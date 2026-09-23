

const dias = 12
const valordia = 113.42

const totalSemDesconto = dias * valordia
let totalComDesconto = totalSemDesconto

if (dias > 10) {
  totalComDesconto = totalSemDesconto - 50
}

console.log(`Valor total da locação: R$ ${totalComDesconto.toFixed(2)}`)
