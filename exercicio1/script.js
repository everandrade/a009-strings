// Faça um programa que pergunte ao usuário seu nome 
//e suas três comidas favoritas. 
//Em seguida, Imprima no console a seguinte mensagem:
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```

// Você deve usar apenas um `console.log()` para isso

const nomeDoUsuario = prompt("Qual o seu nome?")
const Comida1 = prompt("Me fale suas 3 comidas favoritas. Qual é a primeira?")
const Comida2 = prompt("Qual sua segunda comida favorita?")
const Comida3 = prompt("Qual sua terceira comida favorita?")

console.log(`Estas são as comidas favoritas de ${nomeDoUsuario} \n- ${Comida1}\n- ${Comida2}\n- ${Comida3}`)