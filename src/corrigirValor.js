// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  // TODO: implementar função
  let valorConvertido = Number(valor)
  if (typeof (valorConvertido) !== "number") {
    return "Valor inválido"
  } else {
    return valorConvertido
  }
}

console.log(Number('abc'))


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };