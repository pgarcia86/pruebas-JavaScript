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