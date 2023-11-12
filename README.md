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
    
## MÓDULO SOBRE DOM E INTERACCIÓN CON EL DOM 

1. El DOM es una interfaz de programación que permite crear una estructura de árbol en donde se pueden agregar elementos o nodos. 

2. El HTML es el lenguaje mediante el cual se puede agregar elementos al DOM, el DOM alberga toda la estructura HTML. 

3. Es importante entender y manipular el DOM, ya que este aloja todos los elementos de una página web, es en el DOM donde se verá representada la página en cuestión. 

4. Los eventos del DOM son funciones que se ejecutan cuando ocurre un determinado evento, por ejemplo un click o un evento de carga, estos son importantes ya que permiten agregar funcionalidad a una página web. 

5. Algunos ejemplos son: 

 
    ```
    const myButton = document.getElementById('myButton'); 
    
     myButton.addEventListener('click', () => { 
        console.log('¡Se hizo clic en el botón!'); 
    }); 
    

    const myForm = document.getElementById('myForm'); 

     myForm.addEventListener('submit', (event) => { 
        event.preventDefault();     
        console.log('¡El formulario se ha enviado!'); 
    
    }); 
    
    
    window.addEventListener('load', () => { 
        console.log('¡La página ha cargado completamente!'); 
    }); 
    
     
    document.addEventListener('DOMContentLoaded', () => { 
        console.log('¡El DOM se ha cargado!'); 
    }); 
    
    ```

6. Es importante manejar eventos ya que esto permite que la página sea una página interactiva y que responda a las interacciones del usuario. Los controladores en javascript se introducen con los listeners. 

7. Métodos para seleccionar elementos: 

    document.getElementById(‘id’) = con este método se obtiene el elemento con el determinado id 

    document.querySelector(.class) = con este método se obtiene el elemento con la determinada clase 

    document.querySelectorAll(.class) = con este método se obtienen todos los elementos con la determinada clase 

8. Para este fin primero se debe crear un nuevo elemento usando el método createElement de document, luego se usa el método appendChild para agregar el nuevo elemento a un elemento existente: 

    ```
    const newElement = document.createElement('p'); 
    
    newElement.textContent = 'new element'; 
    
    const MainContainer = document.querySelector('.mainContainer'); 
    
    MainContainer.appendChild(newElement); 
    ```

9. La manipulación del DOM permite agregar aún más dinamismo e interactividad a una página web, ya que, si un usuario interactúa con una página, los cambios se verán reflejados en el DOM de manera casi instantánea. 

10. Event Bubbling: básicamente el burbujeo de eventos describe un comportamiento de desencadenamiento cuando se ejecuta un evento en un elemeto hijo, ya que, este evento se ira propaganda hacia los elementos padre. 

    Event Delegation: la delegación de eventos evita que se tengan que agregar eventos a cada elemento, en lugar     de eso, solo se agrega el evento en el elemento padre. 

11. Estos dos conceptos son importantes ya que el uso de la delegación de eventos mejora de manera significativa la eficiencia de la página web.

## MÓDULO SOBRE COMUNICACIÓN CON EL SERVIDOR (STORAGE, PROMESAS ASINCRONÍA Y PETICIONES HTTPS) 

1. Local Storage: almacena datos en el navegador, estos datos persisten hasta que el usuario los elimine manualmente. 

    Session Storage: almacena datos en el navegador, los datos persisten hasta que se cierra la pestaña del navegador. 

2. La gran diferencia entre los dos tipos de almacenamiento es la persistencia de los datos, ya que con local storage los datos persisten de manera indefinida y con session storage los datos persisten hasta que se cierre el navegador. 

3. Estos dos métodos de almacenamiento son útiles ya que permiten la persistencia local de la información, permitiendo así a las páginas web funcionar sin conexión a internet. 

    El límite de almacenamiento para ambos métodos esta entre 5 MB y 10 MB. 

4. Las promesas son objetos que resultan de ejecutar una función asíncrona, son utilizadas para trabajar con solicitudes que no responden de manera inmediata si no que toman cierto tiempo, por ejemplo, la comunicación con un servidor. 

5. Una operación asíncrona es una operación de la cual se espera una respuesta, pero no de manera inmediata, lo que las promesas introducen es que no se tenga que parar el flujo del código hasta que se tenga la respuesta final de la operación, si no, que se pueda seguir con el flujo del código de manera paralela. 

6. El siguiente ejemplo es la implementación de una petición GET con axios: 

    ```
    export const getUsers = async () => { 
      try { 
        const { data } = await axios.get(endpoints.users); 
        return data.length ? data : null; 
      } catch (error) { 
        console.log(error); 
        return null; 
      } 
    }; 
    ```

7. JSON SERVER es una herramienta que permite construir una fake API a partir de un archivo json, esta herramienta es meramente usada para pruebas y no reemplaza una verdadera API 

8. Es útil simular una API ya que se puede realizar el frontend de una aplicación llevando a cabo todo tipo de pruebas con la fake API creada. 

9. then() está enfocado en cadenas de llamadas, lo que puede generar un código difícil de leer y mantener, mientras que async/await ofrece una sintaxis más fácil de leer y de mantener. 

    El manejo de errores con then() se hace usando catch() y en el caso de async/await se hace con try catch. 

10. Para configurar una API false con JSON SERVER se debe hacer lo siguiente: 

    Instalar json server: 
    ```
    npm install -g json-server 
    ```
 

    Configurar el archivo json: 
    
    ```
    { 
      "posts": [ 
        { "id": 1, "title": "Post 1" }, 
        { "id": 2, "title": "Post 2" }, 
        { "id": 3, "title": "Post 3" } 
      ] 
    } 
    ```
 

    Iniciar json server: 
    
    ```
    json-server --watch db.json 
    ```
 

    Implementar las peticiones: 

 
    ```
    async function obtenerDatos() { 
    
      try { 
        const respuestaGet = await fetch('http://localhost:3000/posts'); 
        const posts = await respuestaGet.json(); 
        console.log('Posts:', posts); 
    
    
        const respuestaPost = await fetch('http://localhost:3000/posts', { 
          method: 'POST', 
          headers: { 
            'Content-Type': 'application/json', 
          }, 
          body: JSON.stringify({ title: 'Nuevo Post' }), 
        }); 
    
    
        const respuestaPut = await fetch('http://localhost:3000/posts/1', { 
          method: 'PUT', 
          headers: { 
            'Content-Type': 'application/json', 
          }, 
          body: JSON.stringify({ title: 'Post Actualizado' }), 
        }); 
      
    
        const respuestaDelete = await fetch('http://localhost:3000/posts/3', { 
          method: 'DELETE', 
        }); 
    
        
      } catch (error) { 
        console.error('Error:', error); 
      } 
    
    } 
    ```
 

11. Fetch es una API nativa de javascript que tiene compatibilidad con la mayoría de los navegadores modernos, su sintaxis es básica y fetch puede requerir trabajo adicional para tareas más avanzadas. 

    Axios es una librería de terceros que funciona en navegadores y en Node.js, tiene sintaxis simple y         funcionalidades adicionales. 

12. Las peticiones HTTP son importantes ya que permiten interactuar con servidores para obtener o enviar información. 

13. Este seria el mismo ejemplo anterior usando axios: 

    ```
    async function obtenerDatos() { 
      try { 
        const respuestaGet = await axios.get('http://localhost:3000/posts'); 
        console.log('Posts:', respuestaGet.data); 

        const respuestaPost = await axios.post('http://localhost:3000/posts', { title: 'Nuevo Post' }); 
        console.log('Nuevo post agregado:', respuestaPost.data); 
    
        const respuestaPut = await axios.put('http://localhost:3000/posts/1', { title: 'Post Actualizado' }); 
        console.log('Post actualizado:', respuestaPut.data); 
    
        const respuestaDelete = await axios.delete('http://localhost:3000/posts/3'); 
        console.log('Post eliminado:', respuestaDelete.status === 200 ? 'Éxito' : 'Fallido'); 
    
      } catch (error) { 
        console.error('Error:', error); 
      } 
    } 
    ```

14. El manejo de errores es de suma importancia ya que no siempre el resultado de las promesas será un resultado exitoso, a veces el resultado será erróneo por lo que es menester capturar errores para evitar que el código se rompa. 

15. Los errores se manejan usando try catch, en el bloque try se escribe la petición y en el bloque del catch se captura el error evitando que el código se comporte de manera inesperada. 

16. then() maneja el resultado de las promesas con cadenas, lo que puede resultar en anidamientos complejos. Por otro lado, try/catch maneja excepciones de forma más directa y plana, aplicable tanto a errores síncronos como a promesas, lo que ofrece una estructura más clara y legible. 

17. código:  

    ```
    async function obtenerDatos() { 
      try { 
        const respuestaGet = await axios.get('http://localhost:3000/posts'); 
        console.log('Posts:', respuestaGet.data); 
      } catch (error) { 
        console.error('Error:', error); 
      } 
    }
    ```
