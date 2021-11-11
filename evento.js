let participantes = 99;

let datahoje = 20; // Dia de uma data fictícia 

let idade = 18;

do {
    console.log("Cadastro de Participante")
    
    if(datahoje < 21){
        console.log("Data permitida, seguir com o cadastro")
        if(idade >= 18){
            console.log("Idade permitida")
            console.log("Parabéns, você está cadastrado no evento")
        }else { participantes = participantes
            console.log("Idade não permitida")
            console.log("Cadastro não pode ser realizado, devido a sua idade")
        }
    }else { participantes = participantes
        console.log("Data não permitada, evento já está em andamento")
    }   

    console.log(participantes) // Para observar a quantidade de candidatos cadastrados
    
    participantes++
} while (participantes < 101);

    console.log("Cadastro não pode ser realizado, limite de particantes alcançado")