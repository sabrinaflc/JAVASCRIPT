var idade = "64";

if (idade < 16) {
    console.log("Não pode votar");

} else if (idade == 16 || idade == 17 || idade >= 65 ) {
    console.log("Voto é facultativo"); 

} else {
    console.log("É obrigatório votar");
}