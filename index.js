let resultado = saldo(75, 28)
let nivel = " "

function saldo(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

if (resultado <= 10){
  nivel = "Ferro"
}
else if (resultado > 10 && resultado <= 20){
  nivel = "Bronze"
}
else if (resultado > 20 && resultado <= 50){
  nivel = "Prata"
}
else if (resultado > 50 && resultado <=80){
  nivel = "Ouro"
}
else if (resultado > 80 && resultado <=90){
  nivel = "Diamante"
}
else if (resultado > 90 && resultado <= 100){
  nivel = "Lendário"
}
else{
  nivel = "Imortal"
}

console.log("O herói tem saldo de " + resultado + " está no nível " + nivel)

