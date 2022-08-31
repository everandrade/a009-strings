const fraseA = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(fraseA)

const fraseB = fraseA.replace("verde", "rosa").replace("azul", "laranja")
console.log(fraseB)

console.log(`A nova frase possui a palavra "\verde"\: ${fraseB.includes("verde")}\nA nova frase possui a palavra \"laranja\": ${fraseB.includes("laranja")}`)

const gatoMaiusculo = "mas não deixe o gato sair"
const fraseC = `Jorge tem uma casa verde e com portão azul, com os dizeres: "\"BOAS VINDAS, ${gatoMaiusculo.toUpperCase()}"\"`
console.log(fraseC)