let numberOne = prompt("Digite o primeiro numero:")
let numberTwo = prompt("Digite o segundo numero:")

let soma = Number(numberOne) + Number(numberTwo)
let sub = Number(numberOne) - Number(numberTwo)
let multi = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)
let resto = Number(numberOne) % Number(numberTwo)

alert(`Esses são o resultados: 
\n Soma: ${soma.toFixed(2)} 
\n Subtração: ${sub.toFixed(2)} 
\n Multiplicação: ${multi.toFixed(2)}
\n Divisão: ${div.toFixed(2)}
\n Resto: ${resto.toFixed(2)}.`)

if(numberOne == numberTwo){
    alert("Os numeros eram iguais.")
}else{
    alert("Os numeros eram diferentes.")
}

if((soma % 2) == 0){
    alert("O resultado da soma é par")
}else{
    alert("O resultado da soma é impar")
}