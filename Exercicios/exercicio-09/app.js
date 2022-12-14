/*
  Dica:

  - Alguns exercícios utilizarão métodos, propriedades e funcionalidades vistos  
    no começo do curso. Se for necessário, reveja partes das aulas anteriores  
    para relembrar.
*/

/*
  01

  - Converta a função abaixo em uma arrow function e utilize-a para exibir um  
    valor no console.
*/

function convertToString (value) {
  return String(value)
}

convertToStringArrow = value => String(value)

console.log(typeof (convertToString(123)))
/*
  02

  - Crie uma função que retorne a quantidade de caracteres que uma string  
    recebida por parâmetro possui.
*/

function howManyChars (string) {
  return string.length
} 

console.log(howManyChars('inconstitucinalissimamente'))
/*
  03

  - Crie uma função que retorne todos os caracteres de uma string em letras  
    minúsculas;  
  - Utilize a função para exibir a string abaixo no console.

  "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
*/
function stringToLower (item) {
  return item.toLowerCase()
} 

console.log(stringToLower('CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO'))

/*
  04

  - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
  - Ao ser invocada, a função deve retornar o index do caractere na string.
*/
function findChar (string, index) {
  return string.charAt(index)
} 

console.log(findChar('Xablau', 3))

/*
  05

  - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
    passado por argumento existe no array (também passado por argumento).
*/
function hasItem (item, array) {
  if (array.includes(item)){
    return true
  }
  return false
}
console.log(hasItem(3, [0,1,2,3]))

/*
  06

  - Crie uma função que retorna a concatenação de 2 arrays, passados como  
    argumentos em sua invocação;
*/

function arrayJoiner(item1, item2){
  return item1.concat(item2)
}

console.log(arrayJoiner([1,2,3], [4,5,6]))
/*
  07

  - Crie uma função que retorna o array passado como argumento em sua invocação,  
    mas com o último item removido.
*/

function lessLast (array) {
    array.pop()
    return array
}

console.log(lessLast([1,2,3,4]))
/*
  08

  - Crie uma função que retorna se o valor passado como argumento em sua  
    invocação é null.
*/

function isNull(item) {
  if(item === null){
    return true
  }
  return false
}
console.log(isNull(null))
console.log(isNull('null'))
/*
  09

  - Crie uma função que apenas invoca uma função de callback recebida por  
    parâmetro;
  - Crie outra função que apenas exibe seu nome no console;
  - Invoque a função que recebe um callback por parâmetro, passando como  
    argumento a função que exibe seu nome no console e veja se o nome realmente  
    foi exibido.
*/

function invoqueCallback (callback) {
  return callback()
}
function showName(name) {
  console.log('Rafael')
}

invoqueCallback(showName)
/*
  10

  - Crie uma função que invoca uma função de callback recebida por parâmetro.  
    A invocação da função recebida por parâmetro deve receber um valor como  
    argumento;
  - Crie uma função que retorna o triplo de um número recebido por parâmetro;
  - Faça com que a invocação da função descrita no 1º item deste exercício (10)  
    resulte no triplo de 33.
*/
function invoqueCallbackWithParameter (callback, parameter) {
  return callback(parameter)
}function returnTriple(number){
  return number * 3
}
console.log(invoqueCallbackWithParameter(returnTriple, 11))


/*
  11

  - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
    mensagem abaixo no console, substituindo os "X" pelas informações corretas;
  
  "O Xº item do array [X, X, X] é X."
*/

const numbers = [1, 2, 3]

numbers.forEach((value, index, array) => {
  console.log(`O ${index+1}º item do array ${array} é ${value}.`)
})

/*
  12

  - Converta o for loop abaixo em um forEach;
  - Após a conversão, verifique se a cópia do array lettersCopy realmente foi  
    criada.
*/

const letters = ['v', 'e', 'p']
let lettersCopy = []

// for (let i = 0; i < letters.length; i++) {
//   lettersCopy.push(letters[i])
// }

letters.forEach(leter => lettersCopy.push(leter))

console.log(lettersCopy)

/*
  13

  - Inclua o markup abaixo em seu index.html;
  - Gere um template HTML com parágrafos. Cada parágrafo deve conter um item do  
    array "review";
  - Ao gerar o template, verifique no browser se os parágrafos foram incluídos  
    dentro da section vazia do markup abaixo.

  <article>
    <header>
      <h1>Sobre "Jurassic Park"</h1>
    </header>

    <section data-js="section"></section>
  </article>
*/

const section = document.querySelector('[data-js="section"]')

const review = [
  'Eu sempre adorei o filme e quando descobri que tinha o livro também fiquei doido. Demorei um pouco mas acabei comprando e finalmente li \o/.',
  'O primeiro filme foi baseado nesse livro, porém o livro (como sempre) é muito mais completo, com mais personagens, mais acontecimentos e até mesmo mais dinossauros. Na verdade nesse livro tem coisas do segundo e terceiro filme também, eles mudaram bastante nos filmes, acho que pra ficar mais comercial, e se o filme é bom, o livro é 100 vezes melhor.',
  'Michael é um ótimo autor, esse sim pesquisa muito antes de escrever um livro, além da história que já prende sua atenção, ele fala bastante de genética (pra explicar como os dinossauros foram criados) e acaba falando um pouco de programação (informática), por causa dos programas avançados e modernos que o parque tinha. E isso foi uma das coisas que eu achei muito legal, ele explica as coisas com gráficos, tabelas, códigos ... enfim, o cara é foda hahaha.',
  'Recomendo esse livro pra quem curte uma boa história de ficção. Apesar de muita gente pensar que o livro não tem graça, porque o legal mesmo é ver o dinossauro no filme, com todos os efeitos especiais, eu digo pra deixar esse pensamento de lado, pois a história é tão bem contada e os detalhes são tão bem relatados, que você passa a fazer parte da história, e vive todas as emoções hahaha.'
]

let paragraphs = ''
review.forEach(review =>{
  paragraphs += `<p>${review}</p>`
})
section.innerHTML = paragraphs

/*
  14

  - Implemente uma função que retorna uma string com a quantidade de pessoas que  
    curtiram um post, conforme descrito a seguir;
  - A função deve receber por parâmetro um array com os nomes das pessoas que  
    curtiram o post/vídeo/foto;  
  - Se o array recebido estiver vazio, a mensagem que a função deve retornar é  
    "Ninguém curtiu isso";  
  - Se o array conter apenas um nome, como "Rafael", por exemplo, a mensagem  
    retornada deve ser "Rafael curtiu isso";  
  - Se o array conter 2 nomes, a mensagem retornada deve ser  
    "NOME_1 e NOME_2 curtiram isso";  
  - Se o array conter 3 nomes, a mensagem retornada deve ser  
    "NOME_1, NOME_2 e NOME_3 curtiram isso";  
  - Se o array conter 4 ou mais nomes, a mensagem retornada deve ser  
    "NOME_1, NOME_2 e mais X pessoas curtiram isso". O "X" deve ser substituído  
    pelo restante da quantidade de pessoas que curtiram o post (além das duas  
    pessoas já mencionadas no início da mensagem).
*/
function likes(names) {
  if (names.length === 0){
    return `Ninguém curtiu isso`
  }else if(names.length === 1){
    return `${names.join()} curtiu isso`

  }else if(names.length === 2){
    return `${names.join(' e ')} curtiram isso`

  }else if(names.length === 3){
    let totals = ''
    for (let i = 0; i < 3 ; i++){
      if(i === 2){
        totals += `e ${names[i]}`
      }else if(i=== 1) {
        totals += `${names[i]} `
      }else{
        totals += `${names[i]}, `
      }
    }
    return `${totals} curtiram isso`

  }else if(names.length <= 4){
    const twoFirsts = `${names[0]}, ${names[1]}`
    return `${twoFirsts} e mais ${names.length - 2} pessoas curtiram isso`
  }
}

console.log(likes(['Rafael', 'Liara', 'Beatriz', 'Arthur']))