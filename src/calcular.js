// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  // TODO: implementar função
  let resultado
  if (typeof(num1) !== "number" || typeof(num2) !== "number"){
    return "Erro: parâmetros inválidos"
  } else if (num2 === 0 && operador === '/') {
    return "Erro: divisão por zero"
  }
  switch (operador){
    case '+':
      resultado = num1 + num2
      break
    case '-':
      resultado = num1 - num2
      break
    case '*':
      resultado = num1 * num2
      break
    case '/':
      resultado = num1 / num2
      break
    default:
      return "Erro: operação inválida"
  }
  return resultado
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };