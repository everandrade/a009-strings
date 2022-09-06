const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// a) Remova o excesso de espaços no final da string;
const minhaStringEspaco = (minhaString.trim())

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(`A quantidade de caracteres da string com espaço é de: ${minhaString.length}`)
console.log(`A quantidade de caracteres da string sem espaço é de: ${minhaStringEspaco.length}`)

// c) Substitua os traços `________` por “sticioso”.
const minhaStringSubstituida = minhaString.replaceAll("________", "“sticioso”")
console.log(minhaStringSubstituida)