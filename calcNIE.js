
const letraDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];


let inputNIE = "Z6936128"
let numberNIE


if (inputNIE[0] === "X") {
  numberNIE = "0"+inputNIE.substring(1)
}

if (inputNIE[0] === "Y") {
  numberNIE = "1"+inputNIE.substring(1)
}

if (inputNIE[0] === "Z") {
  numberNIE = "2"+inputNIE.substring(1)
}

Number(numberNIE)
let finalNIE = letraDNI[numberNIE%23]

console.log("EL numero de tu NIE completo es: " + inputNIE + finalNIE);