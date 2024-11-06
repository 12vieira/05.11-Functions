const prompt = require('prompt-sync')();
function fatorial(x){
    let fat = 1;
    for(let i = 1; i<=x;i++){
        fat *= i;
    } return fat;
}

let number = parseInt(prompt(`Digite o número: `))
console.log(`O fatorial de ${number} é ${fatorial(number)}`);