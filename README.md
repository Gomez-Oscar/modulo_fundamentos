## MÓDULO SOBRE LÓGICA DE PROGRAMACIÓN Y PROGRAMACIÓN CON JAVASCRIPT 

1. La lógica es la capacidad de una persona, es este caso de un programador, de organizar sus ideas de manera puntual y sistemática para darle resolución a un problema. La lógica es de suma importancia en el desarrollo web y en la programación en general, ya que esta nos permite resolver todo tipo de problemas de la vida real y plasmarlos en código generando así una solución a un problema real. 

 

2.  Un algoritmo es un conjunto determinado de pasos que se deben seguir para completar una tarea. Un ejemplo sencillo es el algoritmo para averiguar si un número ingresado es par o impar, esto es:  se debe primero recibir un número, luego se debe hallar el módulo del número ingresado, si el módulo es cero se determina que el número ingresado es un número par. 

 

3. Las estructuras de control son estructuras que permiten cambiar el flujo del código según se requiera en un determinado programa. Se tienen estructuras condicionales y ciclos, por ejemplo, estructuras if-else y switch en el caso de los condicionales y estructuras while, do while y for en el caso de los ciclos. 

    La estructura if-else permite tomar decisiones teniendo en cuenta una condición de evaluación, ya que si una     condición se cumple el programa tomará un camino, pero si no se cumple esa condición el programa tomará el       otro camino. 

    La estructura While permite realizar iteraciones siempre y cuando se cumpla una condición, si esta condición     no se cumple el ciclo terminara. 

 

4. Anteriormente las variables en JavaScript se declaraban usando la palabra reservada var, actualmente las variables se declaran con la palabra reservada let y las constantes con la palabra reservada const. El problema de declarar variables usando var radica en el scope o el alcance que tiene esta variable, ya que esta podía ser accedida desde fuera del scope donde fue declarada, algo así como una variable global, lo que puede incurrir en errores a la hora de la ejecución del código. 

 

5. Las funciones en javascript se pueden declarar de tres formas: 

    Declaración de función: se usa la palabra reservada function, el nombre de la función, los parámetros que        recibirá la función y el cuerpo de la misma. 

    ```
    function suma(a, b) { 
      return a + b; 
    } 
    ```
 
    Expresión de función: se sigue el mismo proceso anterior, solo que esta función se guarda en una variable. 

    ```
    const suma = function(a, b) { 
        return a + b; 
    }; 
    ```

    Función de flecha: en esta declaración no se usa la palabra function y se simplifica la sintaxis. 
    
    ```
    const suma = (a, b) => a + b; 
    ```
    
    Cuando se usa la declaración de una función con la palabra reservada function esta puede ser usada antes o       después de la declaración, esto no se puede hacer con los demás tipos de declaraciones. 

 
6. Las funciones son necesarias en el desarrollo de software ya que permiten tener un código limpio y ordenado, evitar código repetido, facilitar la lectura del código, facilitar la implementación de pruebas y reducir el número de líneas de código. Las funciones son fundamentales cuando por ejemplo se está haciendo un llamado a una API o una base de datos para traer cierta información, y estos llamados se deben hacer desde diferentes páginas o partes de la aplicación, en este caso se tiene una función que trae los datos y esta se utiliza donde sea necesario. Las funciones flechas se utilizan cuando se tienen que realizar funciones muy simples para reducir la cantidad de código y hacer este mas legible y fácil de mantener. 

7.  El parámetro es la variable que se creó en la declaración del método, y el argumento es el valor que se le pasa a la función. 

8. Un callback es una función que se pasa como argumento a otra función. Un ejemplo práctico es una eventListener en javascript en donde si se dispara el evento ‘click’ se ejecuta una función que fue pasada como argumento que realzará una determinada acción. 

9. El hoisting es la propiedad que tiene javascript para colocar las funciones declaradas de manera tradicional y variables declaradas con var al principio del código para que estas puedan ser leÍdas en el transcurso de la ejecución sin problema, sin embargo, el hoisting no funciona con otro tipo de declaraciones de funciones o variables declaradas con let o const. 

 
    En el siguiente caso muestre el número 1 en consola: 
    ```
    console.log(a);  
    var a = 1; 
    ```

    En este caso se obtiene un error: 
    
    ```
    console.log(a);  
    let a = 1; 
    ```
 
    En este caso se obtiene ‘hola’ en consola: 

    ```
    saludar(); 
    
    function saludar() { 
        console.log("hola"); 
    } 
    ```
 

    En este caso se obtiene un error: 

    ```
    saludar(); 

    const saludar = () => console.log("hola") 
    ``` 
 

10. Los objetos en javascript consisten en pares clave-valor que permiten almacenar información. Los objetos se declaran de la siguiente manera. 

 
    ```
    const objeto = { 
        color: ‘rojo’ 
        Saludar: function(){ 
            Console.log(‘hola’); 
        } 
    } 
    ```
 

11. Las propiedades son las variables de un objeto, mientras que los métodos son las funciones de este. 

 

12.  Se pueden usar la notación punto o la notación corchete, la notación punto se usa en la mayoría de los casos por su limpieza y simplicidad, mientras que la notación corchete se usa cuando la propiedad a la que se accede contiene algún espacio o carácter especial. 

        Ejemplo => Objeto.propiedad vs Obejto[‘propiedad’] 
 
13. Para recorrer las propiedades de un objeto de utiliza la estructura for-in  

    ```
    const object = { a: 1, b: 2, c: 3 }; 

    for (const property in object) { 
        console.log(`${property}: ${object[property]}`); 
    } 
    ```
 

14. Los objetos son útiles en la programación ya que permiten almacenar propiedades y métodos que pueden ser reutilizados en el código. En un objeto se pueden almacenar todo tipo de datos y funciones. 

 

15. Un array en javascript es un tipo de dato que permite almacenar una lista de elementos de manera secuencial, los array son esenciales ya que precisamente podemos guardar información en estos y luego recuperarla. 

 

16. Se accede de la siguiente manera:  

    ```
    const myArray = [1, 2, 3]; 
    Console.log(myArray[0]); // la respuesta seria 1 
    ```
 

17. Algunas funciones de array son: 

    Map: devuelve un nuevo array transformado teniendo en cuenta una condición que se le pasa 

    Find: devuelve un elemento del array que cumple la condición que se le pasa 

    Filter: devuelve un nuevo array teniendo en cuenta una condición que se le pasa 

  

18. Este sería un ejemplo para el caso del filtrado, para encontrar los números pares en un arreglo de números: 

 
    ```
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    
    const numerosPares = numeros.filter(numero => numero % 2 === 0); 
    ```
 

    Este es un ejemplo para el caso de la transformación de un array en donde se duplican los números 

 
    ```
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
    
    const duplicarNumeros = numeros.filter(numero => numero * 2); 
    ```
## MÓDULO SOBRE HTML, CSS Y RESPONSIVE DESIGN 

1. HTML significa Hypertext Markup Language, se podría ver a HTML como el esqueleto de una página web, con este lenguaje de marcado se definen los elementos que contendrá la página web. 

2. La estructura básica de un documento HTML a grandes rasgos se compone de las etiquetas html, head, body, main, section, article, aside, footer. 

3. CSS significa cascading styled sheets, este lenguaje de marcado tiene como propósito darle estilos a una página web 

4. Los selectores en css son los selectores que se usan para delimitar el elemento que se quiere estilizar; los principales tipos de selectores son: selectores de elementos (h1, span, p, div), selectores de clase (.class) y selectores de ids (#myElemento); la especificidad es importante en css por qué se debe estar al tanto de cuales estilos serán aplicados en caso de dos o más selectores estén apuntado a un mismo selector, en este caso se considerara el que tenga más especificidad. 

5. Los estilos en línea son los que se agregan en el mismo elemento html, los estilos internos se agregan en el mismo documento HTML dentro del tag style y los estilos externos son los que se agregan de manera independiente en un archivo alterno. Es recomendado usar estilos externos ya que propicia el orden en el código, así como la corrección de errores.  

6. Flexbox es una propiedad de css para mostrar los elementos en pantalla y tener la facilidad de organizar estos de una manera más sencilla.  

    Para utilizar flexbox se debe usar el siguiente comando: 

    ```
    Display: flex; 
    ```

7. Flexbox tiene diversas propiedades, entre las más importante están: 

    Flex-direction: row o column, permite cambiar la dirección del eje principal 

    Align-items: center, permite alinear los elementos de manera central 

    Justify-content: center, permite justificar el contenido de la página al centro de la misma 

    Flex-wrap: wrap, permite agrupar todos los elementos 

    justify-content: space evenly o between, permite espaciar los elementos  

8. Grid layout es una propiedad de css que permite disponer elementos de manera bidimensional en filas y columnas. Cabe aclarar que flexbox está diseñado para disponer elementos en manera unidimensional. 

9. Para crear una cuadricula sencilla con grid se puede usar el siguiente código: 

    En HTML: 

    ```
    <div class="grid-container"> 
        <div class="item">1</div> 
        <div class="item">2</div> 
        <div class="item">3</div> 
        <div class="item">4</div> 
    </div> 
    ```

    En CSS:  

    ```
    .grid-container { 
      display: grid; 
      grid-template-columns: 100px 100px; 
      grid-gap: 10px; 
    } 
    
    .item { 
      background-color: red; 
      padding: 10px; 
    } 
    ```

10. El diseño responsivo trata de que cuando la pantalla cambie de tamaño la aplicación también debe cambiar de tamaño y en algún momento o limite los elementos de la página deben cambiar de disposición para adaptarse por ejemplo a un nuevo dispositivo. 

11. Para lograr diseños responsivos se deben usar: media querys, unidades relativas (em, porcentajes) y disposición de elementos flexible. 
    
