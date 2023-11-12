/* RESOLUCIÓN DEL MÓDULO 1 */

/* Dada una lista (o array) de número s enteros, 
encontrar el número más grande de la list a y mostrarlo
en consola. 

No se debe usar la función Math.max() max(), ni .forEach()*/

console.log('Resolución a preguntas practicas del Módulo 1\n\n\n');

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

/* RESOLUCIÓN DEL MÓDULO 3 */

/* Escribir una función en JavaScr i p t que tome un botón en el DOM y, al hacer click en él,
cambie el color de fondo de un elemento esp ecífico en la página. Luego, agregar el
botón y el elemento objetivo en el DOM y asoc iar la función al evento click*/

const colorButton = document.querySelector('.changeColorButton');

const text = document.querySelector('.colorText');
text.style.color = 'white';

const changeColor = (button, element) => {
  button.addEventListener('click', () => {
    if (element.style.color === 'white') {
      element.style.color = 'red';
    } else {
      element.style.color = 'white';
    }
  });
};

changeColor(colorButton, text);

/* Crea r una lista no ordenada de elementos (por ejemplo, elementos de lista) en el DOM.
Implementa r la delegación de eventos event delegation para que, al hacer clic en
cualquier elemento de la lista, se muestre un mensaje en la consola que indique qué
elemento de la lista se ha hecho clic. */

const list = document.querySelector('.list');

list.addEventListener('click', event => {
  console.log(`Click in: ${event.target.textContent}`);
});

/* Agr ega r un formulario a tu página web con un campo de entrada y un botón "Enviar".
Implementa r una función que sea llamada al enviar el formulario y que valide el campo
de entrada (por ejemplo, si está vacío) muestre un mensaje de error accesible si es
necesa rio y en caso de que el formulario esté correctamente diligenciado muestre en
cons ola un objeto con el dato que ha ingresado el usuario en el campo de entrada y un
alert co n el siguiente mensaje: Formulario correctamente dili genciado */

const formulario = document.querySelector('#formulario');
let entrada;

const handleSubmit = event => {
  event.preventDefault();
  entrada = document.querySelector('#entrada').value;

  if (entrada.trim() === '') {
    alert('el campo esta vacío');
  } else {
    console.log('Texto ingresado:', entrada);
    alert('Formulario correctamente diligenciado');
  }
};

formulario.addEventListener('submit', event => {
  handleSubmit(event);
});
