function inverterString(str){
    let reverso = []
    for(let i=str.length-1; i>=0;i--){
        reverso.push(str[i])
    }
    return reverso.join('')
}

const stringOriginal = "hello"
const stringInvertida = inverterString(stringOriginal)

console.log("String original: ", stringOriginal)
console.log("String invertida: ", stringInvertida)