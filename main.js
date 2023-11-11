/* Dada una lista (o array) de número s enteros, 
encontrar el número más grande de la list a y mostrarlo
en consola. 

No se debe usar la función Math.max() max(), ni .forEach()*/

const numbers = [-1, 3, 0, 4, -6];

let max = numbers[0];

for (let index = 1; index < numbers.length; index++) {
  if (numbers[index] > max) {
    max = numbers[index];
  }
}

console.log('Punto 1');
console.log('El número mayor entre:', numbers);
console.log('Es igual a: ', max);

/* Escribir una función en JavaScript que tome dos números como argumentos y devuelva su suma. 
Luego, escribir la misma función utilizando una función flecha (arrow function) y comparar ambas declaraciones. Llamar a ambas funciones con valores de ejemplo y
mostrar los resultados en la consola del navegador. */

function addition(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

console.log('\n\nPunto 2');

console.log('Resultado con función estandar');
console.log('6 + 8 =', addition(6, 8));

console.log('Resultado con función flecha');
console.log('4 + 8 = ', add(4, 8));

/* Escribir una función en JavaScript que reciba un array de números como argumento y utilizar la función de array para calcular la suma de todos los números pares en el array.
Luego, llamar a la función con un array de ejemplo y mostrar el resultado en la consola del navegador. */

const arrayAddition = array => {
  let result = 0;
  array.map(item => {
    result += item;
  });
  return result;
};

const randomNumbers = [-1, 3, 0, 4, -6, 8];

console.log('\n\nPunto 3');
console.log('La suma de ', randomNumbers);
console.log('es igual a ', arrayAddition(randomNumbers));
