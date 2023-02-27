var peso = 80;
var altura = 1.76;
var imc = (peso / (altura ^ 2));

console.log("Seu imc é: " + imc)

switch(true) {
    case imc < 18,5:
        console.log ('Você está abaixo do peso');
    break

    case imc >= 18,5 && imc <= 25:
        console.log ('Você tem um peso normal');
    break
    
    case imc > 25 && imc < 30:
        console.log ('Você está acima do peso');
    break
    
    case imc >= 30:
        console.log ('Você está obeso');
    break
        
    }
