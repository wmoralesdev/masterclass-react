// // C++ - JS
// var array = ['Daniela', 'Ambrea (Natalia)', 'Xiomara', 'Cader', 'Pinto', 'MigueJoto (Coge prros)', 'Joto']

// // filter
// // Dada una lambda, filtra y devuelve un arreglo eliminando los elementos que cumplan la condicion de la lambda
// // Predicative: lambda, arrow, o funcion en general que devuelve un valor de verdad. Verifica una condicion
// var evenNames = array.filter((e) => e.length % 2 == 0);

// console.log(evenNames)

// // map
// // Dada una lambda (que si o si retorne un valor) retorna una array modificando cada uno de los elemenentos
// // contenidos

// var numArray = [1, 3, 5, 7, 9]

// var evenNums = numArray.map((e) => `Num: ${e}`);

// console.log(numArray)
// console.log(evenNums)

// String operations
// Dada una frase, agregar una A al final de cada palabra

// var phrase = "Tu prima se la come"

// console.log(phrase.split(" ").map(e => e + "A").join(" "))

// Objects

var obj = {
    num: 2,
    str: "Tu prima se la come",
    bool: true,
    fun: (e) => e * 2
}

obj.tuPrima = 'Tu prima'

// spread operator

var redFruits = ['Manzana', 'Frambuesa']
var fruits = [ 'Pera', 'Guineo', ...redFruits, 'Nance' ]

console.log(fruits)

var objNumBool = {
    num: obj.num,
    bool: obj.bool
}

console.log(objNumBool)