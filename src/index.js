const player1 = {
    NOME: "MARIO",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 4,
    PONTOS: 0,
}

const player2 = {
    NOME: "LUIGI",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 4,
}

async function rollDice(){
    return (Math.floor(Math.random() * 6) + 1)
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`)
    }
}

(async function main(){
    console.log(
        `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
    )

    await playRaceEngine(player1, player2)
})()