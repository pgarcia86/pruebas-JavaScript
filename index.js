console.log("Hola mundo")

//Las variables de declaran con "let", "var" o "const"
//no se usa var porque vuelve al inicio cuanod ejecuta
let variable = "Perro!"
console.log(variable)

variable = "Pecorino"
console.log(variable)

let boolean = false
console.log(boolean)

let num1 = 2
let num2 = 10

console.log("La suma es: " + (num1 + num2));
console.log("La resta es: " + (num2 - num1));
console.log("La multiplicacion es: " + (num1 * num2));
console.log("La division es: " + (num2 / num1));
console.log("La potencia es: " + (num2**num1));
console.log(variable);
console.log(boolean);

//Objetos: son una lista de variables que tienen sentido entre si, pueden tener distintos tipos de datos
const newObject = {
    num1: 2,
    num2: 10,
    string1: "Pecorino",
    boolean1: false
}

console.log("La suma es: " + (newObject.num1 + newObject.num2));
console.log("La resta es: " + (newObject.num2 - newObject.num1));
console.log("La multiplicacion es: " + (newObject.num1 * newObject.num2));
console.log("La division es: " + (newObject.num2 / newObject.num1));
console.log("La potencia es: " + (newObject.num2**newObject.num1));
console.log(newObject.string1);
console.log(newObject.boolean1);

//Arrays

const newArray = [2, 10, "Pecorino", false]

console.log("La suma es: " + (newArray[0] + newArray[1]));
console.log("La resta es: " + (newArray[1] - newArray[0]));
console.log("La multiplicacion es: " + (newArray[1] * newArray[0]));
console.log("La division es: " + (newArray[1] / newArray[0]));
console.log("La potencia es: " + (newArray[1] ** newArray[0]));
console.log(newArray[2]);
console.log(newArray[3]);

newArray.push("blester boll")
console.log(newArray[4]);

//si declaro una variable con const, este no se va a poder cambiar. Para modificarlo, tengo que declararlo con let

//ESTE CODIGO VA A DAR ERROR
// const suma=1
// const num3 = 1
// const otroNum = 17
// suma = 17+1
// console.log(suma);           

let suma = 1
let num = 17
let otroNum = 1
suma = num + otroNum
console.log(suma);

//Los comparadores funcionan igual. Excepto la igualdad y la desigualdad

const result = 5 === 6          //Tres iguales, es para comparacion exacta
const result2 = 5 == '5'        //Esta comparacion da verdadera porque el string vale lo mismo que el numero 5, otro ejemplo
const result3 = 525 == '525'    //Esta comparacion devuelte true
const result4 = 5 === '5'       //Esta comparaciondevuelve falso porque compara que los valores sean extrictamente iguales
const result5 = 5 !== 6         //Esto devuelve true
const result6 = 5 != '5'        //Esto devuelve false


console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);

//or = ||, and = &&, not = !

//if

if (5 == '5') {
    console.log("Son iguales");
}
else{
    console.log("Son distintos");
}

const edad = 10

if (edad > 5 && edad < 18){
    console.log("Tiene entre 5 y 18 años");
}
else {
    console.log("Tiene o menos de 5 o mas de 18");
}

if (edad < 8) {
    console.log("tiene menos de 8 años");
}
console.log("Tiene mas de 8 años");

//while

let x=0

while(x < 5) {
    console.log(x);
    x++
}
console.log("Termino");

//switch
let other = 1                   //Uso let para definir la variable porque const no se puede cambiar
while (other < 10) {
    switch (other) {
        case 1: {
            console.log("1");
            other++
            break;
        }
        case 2: {
            console.log("2");
            other++
            break;
        }
        case 3: {
            console.log("3");
            other++
            break;
        }
        case 4: {
            console.log("4");
            other++
            break;
        }
        default: {
            console.log("El numero no existe");
            other++
            break
        }
    }
}

//for
for(let i=0; i < 10; i++){
    console.log(i);
}

const letras = ['a','b','c','d','e','f','g','h','i','j']

for(let i=0; i<letras.length; i++){
    console.log(letras[i]);
}
console.log("\n");                  //Salto de linea

//FUNCIONES
function nombreFuncion(array) {
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
}
nombreFuncion(letras)

function sumaNumeros(a, b) {
    return a+b
}

console.log("\nAca va",sumaNumeros(2,3), "el resultado");           //Esto agrega el resultado al string que quiero devolver
console.log("\nAca va" + sumaNumeros(2,3) + "el resultado");        //Esto concatena los strings

//callbacks: Es una funcion dentro de otra funcion. Dentro de otraVezSuma, ejecuto callback que solo imprime por pantalla
//Las funciones son valores, por eso se pueden pasar como parametro a otra funcion
function otraVezSuma(a, b, cb) {
    const res = a+b
    cb(res)
}
function callback(result){
    console.log('resultado: ', result);
}

otraVezSuma(2,3, callback)  //Aca no se ejecuta, se pasa como parametro el callback


//Fat Arrow function: No se declaran con la palabra function
//Si es de una sola linea
const fatArrowFunction = (a, b) => a + b    //Son como las lambdas
console.log(fatArrowFunction(2,3));

//Si es de mas de una linea
const otraFatFunc = (a, b) => {
    return a + b
}
const r = otraFatFunc(2,3)
console.log(r);


//Funciones anonimas: con function(r), paso como parametro la funcion y la declaro ahi mismo, en el lugar
otraVezSuma(2,3, function(r){
    console.log("Esta funcion es anonima" , r);
})