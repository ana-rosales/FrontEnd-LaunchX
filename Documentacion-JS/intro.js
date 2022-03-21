console.log("\n********** Variables **********\n");
var numero1 = 4;
var numero2 = "4";
console.log("Número 1: " + numero1 + " Número 2: " + numero2);

console.log("\n********** Cadenas **********\n");
var frase1 = "Ejemplo comillas dobles";
var frase2 = 'Ejemplo "comillas" simples';
var frase3 = `Ejemplo comillas ${frase1} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3);

console.log("\n********** Condicionales **********\n");

console.log(numero1 === numero2);

/*  = valor
     == valor y contexto
     === valor, contexto y tipo */

console.log("\n********** Operador lógio AND **********\n");
console.log(true && true);

console.log("\n********** Operador lógico OR **********\n");
console.log(false || false);

console.log("\n********** Arreglos **********\n");
let listaDeNumeros = [2, 3, 5, 7, 11, 234];
//se utiliza dentro del bloque donde se declara

const gravedad = 9.81;
//no cambia su valor

console.log(listaDeNumeros[5]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);
//agrega valores al arreglo

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras = ["Explorer","MissionCommander","LaunchX","Innovacción"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

let palabra = "Explorer";
//funcionan como arreglos
//fuciones de arreglos sirven con cadenas
console.log(palabra[2]);
console.log(palabra.length);
//length es atributo

console.log("\n********** Objetos **********\n");

let explorer = {
    nombre: "Nombre de Explorer",
    email: "email@innovaccion.mx",
    numReg: 123456,
    mision: "FrontEnd",
    proyectos: ["Abogabot","Taquería","Pastelería","Vacunación"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
}
/* Java Script Object Notation (notación de escritura
   de un objeto)  ---> JSON*/

console.log(explorer);

console.log(explorer.email);

console.log(explorer.proPer.personal);
//obj dentro de obj

/* Flujo condicional */
let number1 = 2;
let number2 = 6;
console.log("\n********** if / else **********\n");
if(number1 > number2 && number2 > 5){
    console.log("El número 1 es mayor que número 2");
}
else if( number1 == number2 || number1 < 3){
    console.log("Los números son iguales");
}
else {
    console.log("El número 2 es mayor que número 1");
}

/* Ciclo condicional */
let numeroFor;
console.log("\n********** while **********\n");
let numberwhile = 0;
while(numberwhile <= 12){
    console.log(numberwhile);
    numberwhile += 2;
}

console.log("Aquí ya salió del while " + numberwhile);

/* Ciclo for con iteración controlada */
console.log("\n********** for **********\n");
for(numeroFor=0; numeroFor <=12; numeroFor += 1){
    console.log(numeroFor);
}
console.log("Aquí salimos del for "+ numeroFor);

/* Opciones para evitar anidar condicionales */
console.log("\n********** Switch **********\n");
switch (prompt("¿Cómo está el clima?")){
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "soleado":
        console.log("Ponte bloqueador");
        break;
    case "nublado":
        console.log("Tapate bien");
        break;
    default:
        console.log("No sé cómo está el clima");
        break;
}
console.log("Aquí salimos del switch");