//* Para coger la logica aca la informacion de interior.gob.es: 
/* « Los NIE's de extranjeros residentes en España tienen una letra (X, Y, Z), 7 números y dígito de control.

Para el cálculo del dígito de control se sustituye:

X → 0
Y → 1
Z → 2

y se aplica el mismo algoritmo que para el NIF. »  */


const letraDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

//? En este input vas a meter tu DNI o NIE. 
//? Si es un DNI, tienes que entrarlo de type = number, si es un NIE tienes que entrarlo de type = string:
let inputNIE = 81234567


let numberNIE

if (typeof inputNIE === "string") {
  calcularNIE(inputNIE)
}

if (typeof inputNIE === "number") {
  calcularDNI(inputNIE)
}


function calcularDNI(calcularDNI) {
  let finalDNI = letraDNI[inputNIE % 23]
  console.log("Eres Español: El numero de tu DNI completo es: " + inputNIE + finalDNI);
}

function calcularNIE(calcularNIE) {
  if (inputNIE[0] === "X") {
    numberNIE = "0" + inputNIE.substring(1)
  }

  if (inputNIE[0] === "Y") {
    numberNIE = "1" + inputNIE.substring(1)
  }

  if (inputNIE[0] === "Z") {
    numberNIE = "2" + inputNIE.substring(1)
  }

  Number(numberNIE)
  let finalNIE = letraDNI[numberNIE % 23]

  console.log("Eres Extranjero residente en España: EL numero de tu NIE completo es: " + inputNIE + finalNIE);
}