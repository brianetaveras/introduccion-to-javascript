


// Declara la variable 
var soyUnaVar = 42;
// cambia el valor
soyUnaVar = 43;

// constante = no cambia
const pepe = "Pepe";
// nombre = "Papolo";

// Scope/Alcance
let impuestos = 5;

// Miles de lineas de códgo

// String = "texto"
const string = "42";
// Number = 42
const number = 42;
// Boolean = true/false   
const bool = true;
const bool2 = false;



let indefinido;
let nulo = null;



1 + 1 // 2
2 * 2 // 4
2 - 2 // 0
2 / 2 // 1


const nombre = "Frederick";
const apellido = "Perez";

console.log(nombre + " " + apellido);

const profits = "2000";
const deuda = 4000;

// parseInt función integrade en Javascript para 
// convertir de texto a números ENTEROS
// Para decimales, vean parseFloat
console.log(parseInt(profits) + deuda);

// Math es una clase con funciones que nos ayudan a realizar
// operaciones matematicas

const n = 0.546;

// Math.round siempre redondea de acuerdo a las reglas 
// matemáticas
console.log(Math.round(n));
// Math.floor redondea hasta abajo (como wissin y yandel)
console.log(Math.floor(n));
// Math.ceil siempre redondea hacia arriba
console.log(Math.ceil(n));

/* 
Valores que siempre son interpretados como verdaderos
true
1 (positivios y negativios)
" "
[]
{}
function(){}


Valores que son interpretados como falso:
false
0
undefined
null


// Operadores de comparación
    Nos ayudan a evaluar valores de acuardo a su comparación

1 > 2 // false
2 < 3 // true
10 >= 5 // true
7 <= 7 // true

Comparadores de igualdad:

Comparación suave (no compara tipos)
==
Comparación estricta (compara tipos)
===

// Se utiliza el operador ! para negar una expresión
3 != 4

!== (básicamente una comparación estricta (===))
!= (basicamente una comparación suave (==))

// let eseHijoEsDeFrederick = true;


// if(!eseHijoEsDeFrederick){
//     console.log("El niño es lindo");
// } else {
//     console.log("Que muchacho ni mas feo :(")
// }



Operadores Lógicos:

Valores con &&
| falso | falso |   verdadero
| verdadero | falso |  falso

Valores con ||
| falso | falso |  falso
| verdadero | falso |  verdadero



(10 === 9 || 1 > 2) false 
(10 === 10 || 1 > 2)  true

(10 === 9 && 1 > 2) false 
(10 === 10 && 1 > 2) falso


*/




let eseHijoEsDeFrederick = true;
let laJevaVieneDeUnaFamiliaConCuarto = true

if (!eseHijoEsDeFrederick && laJevaVieneDeUnaFamiliaConCuarto) {
} else {
    console.log("Que muchacho ni mas feo :(")
}
