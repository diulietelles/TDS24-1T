//************************* Strings e Arrays ****************************//


/*********Exercicio 1:  concatenação e template:

let nome = prompt('Digite seu nome:')
let corFvorita = prompt('Digite sua cor favorita:')
console.log(`A cor favorita de ${nome} é ${corFvorita}`)
console.log('A cor favorita de ' + nome +  ' é ' + corFvorita)


//Exemplo 2:

//LENGHT:
const nome = 'Diulie Telles'
console.log(nome.length) //13  conta quantas letras e espaços na frase 
console.log(nome.toLocaleLowerCase()) // letras minusculas
console.log(nome.toLocaleUpperCase()) // letras maiusculas

//TRIM:
const email = ' tellesdiulie@gmail.com '
console.log(email.trim()) // retira os espaços do inicio e final do texto

// INCLUDES:
const frase = 'hoje eu comi cenoura'
console.log(frase.includes('cenoura'))// true
console.log(frase.includes('batata')) // false

// ReplaceAll:
const frase1 = 'hoje eu comi cenoura, adoro cenoura'
const newFrase = frase1.replaceAll('cenoura', 'batata')
console.log(frase1.replaceAll()) // troca palavra
console.log(newFrase.replaceAll())

//*********Exercicio 2:

let frase = prompt('Escreva uma frase:')
console.log('Frase original:', frase)
console.log('Letras maiúsculas:', frase.toUpperCase())
const novaFrase = frase.replaceAll('o', 'i')
console.log('língua do "I":', novaFrase.replaceAll())
console.log('Length:', frase.length)

    
//************************* Arrays **************************** //


const frutas = ['abacate', 'banana', 'tomate', 'milho','uva', 'morango']
const fruta = frutas[4]
console.log(frutas)
*/

//*********Exercicio 3:
const racaDogs = ['American Foxhound', 'French Bulldog', 'Golden Retriever', 'Beagle', 'Pinscher']
console.log('Raça scolhida: ', racaDogs)
const escolhaNumbero = prompt('Escolha entre 0 to 4: ')
if (escolhaNumbero >= 0 && escolhaNumbero <= 4) {
    console.log('A raça correspondente é : ' + racaDogs[escolhaNumbero])
} else {
    console.log('Numero invalido. Por favor, escolha entre 0 e 4: ')
}






