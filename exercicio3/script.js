const nome = prompt('Qual é seu nome?').toLowerCase()
const idade = Number(prompt('Qual é a sua idade?'))


if(nome === "jose"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}

nome === 'jose' ? console.log('Oi, Zé!'):console.log('Olá', nome)

idade >= 18 ? console.log("pode tirar carteira de motorista!"):console.log("Ainda não pode tirar carteira de motorista")