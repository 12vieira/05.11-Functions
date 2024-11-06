// como criar função:
// 
// function nomeDaFunção(){
//     o que ela deve realizar;
// }


// função com parâmetros
const prompt = require('prompt-sync')();

function soma(elements){
    let sum = 0;
    for(let i = 0; i<elements.length;i++){
           sum += elements[i];
    } return sum;
}

let numbers = new Array ();
const total = parseInt(prompt(`digite quantos números deseja somar: `));

/*for(let i = 0; i<total;i++){
    numbers[i] = parseFloat(prompt(`digite o número que deseja somar: `));   
}*/

for(let i = 0; i<total;i++){
    let valores = parseFloat(prompt(`digite o número que deseja somar: `));
    numbers.push(valores);   
}

console.log(numbers);

console.log(`a soma é ${soma(numbers)}`);