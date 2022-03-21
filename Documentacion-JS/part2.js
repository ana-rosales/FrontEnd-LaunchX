/* un parámetro */
const cuadrado = function(x){
    return x * x;
}
//const definida como función

let numero = 4;
console.log(cuadrado(numero));

const ruido = function() {
    console.log("kataplum!")
}

ruido();

/* más de un parámetro */
const exponencial = function (base, exponente) {
    let resultado = 1;
    for (let i=0;i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}

console.log(exponencial(4,3));

/* no importa donde se declaren */
console.log(sumar(5,65));
function sumar (x,y){
    return x+y;
}

/* arrow function */
const restar = (a,b) => {
    return a - b;
    //permiten uso de this
}
console.log(restar(4,2));

function saludar(quien){
    console.log("Hola "+ quien);
}
saludar("MC");
console.log("Bye");

/* Excepciones */
function preguntaDireccion(pregunta){
    let result = prompt(pregunta);
    if(result.toLowerCase() == "izquierda") return "I";
    if(result.toLowerCase() == "derecha") return "D";
    throw new Error("Dirección inválida: " + result);
}

function mirar(){
    if(preguntaDireccion("A qué lado?") == "I"){
        return "una casa";
    } else {
        return "2 osos hambrientos";
    }
}

try {
    console.log("Mira a ", mirar());
} catch(error){
    console.log("Hubo un error: "+error);
    console.log("Mira a ", mirar());
}