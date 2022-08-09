const num = Numero(prompt('Coloque aqui um número'))

if(num % 2 ===0){
    if(num % 3 ===0){
        console.log('Muito bem, seu número é divisível por 2 e por 3')
    }
}else{
    console.log('Que pena, seu número não é divisível por 2 e nem por 3')
}

if( num % 2 === 0 && num % 3 ===0){
    console.log('Muito bem, seu número é divisível por 2 e por 3')
}else{
    console.log('Que pena, seu número não é divisível por 2 e nem por 3')
}

