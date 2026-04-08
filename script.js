
function operate(operator, a, b) {
    switch (operator) {
        case "+": return a+b;
        case "-": return a-b;
        case "*": return a*b;
        case "/": if (b===0){
                    return 'erro divisao por zero'}
                    return a/b;
    }
}


let firstNumber , operator, secondNumber,resultado
let isFirstNumber = true
let flag = true
let result = document.querySelector('.result')
let buttons = document.querySelectorAll('.displayable')
console.log(buttons)

buttons.forEach(button => {
        button.addEventListener('click', () => {
            //lidar com operador
            if (button.value === '+' || button.value === '-'||
                button.value === '*' || button.value === '/'
                ){
                //lidar com operacoes em sequencias
                if (secondNumber !== undefined){
                    resultado = operate(operator, Number(firstNumber),Number(secondNumber))
                    result.textContent = resultado
                    firstNumber = resultado
                    secondNumber = undefined
                    isFirstNumber = false
                    flag = false
                    return
                }
                operator = button.value
                result.textContent = ''
                isFirstNumber = false
            //lidar com o resultado
            }else if(button.value === '='){ 
                if (secondNumber === undefined) {
                    result.textContent = firstNumber
                    return          // para 2 + =
                } 
                let number1 = Number(firstNumber)
                let number2 = Number(secondNumber)
                resultado = operate(operator, number1,number2)
                result.textContent = resultado
                firstNumber = resultado
                secondNumber = undefined
            //limpar os dados
            }else if (button.value === 'clear'){
                result.textContent = ''
                firstNumber = undefined
                secondNumber = undefined
                operator = undefined
                isFirstNumber = true
            //se for o primeiro numero da operacao
            }else if (isFirstNumber){
                result.textContent += button.value
                firstNumber = result.textContent
            //lida com o segundo numero
            }else{
                if (!flag) {result.textContent = ''} //para apaagar o numero da sequencia de operacoes
                result.textContent += button.value
                secondNumber = result.textContent
                
            }
        })
})
