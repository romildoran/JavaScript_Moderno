# Historia de JavaScript:
JavaScript fue creado por Brendan Eich en 1995 mientras trabajaba en Netscape Communications. Inicialmente se diseñó como un lenguaje de scripting para realizar interacciones simples en páginas web. Con el tiempo, JavaScript evolucionó y se convirtió en un lenguaje de programación completo, ampliamente utilizado tanto en el frontend como en el backend de las aplicaciones web.

# Uso de JavaScript en la industria actual:
JavaScript se ha convertido en un pilar fundamental de la industria del desarrollo web. Es utilizado para agregar interactividad y dinamismo a las páginas web, permitiendo la creación de aplicaciones web modernas y complejas. Además, JavaScript también se utiliza en el desarrollo de aplicaciones móviles, aplicaciones de escritorio, servidores y la creación de interfaces de usuario en diferentes tecnologías.

# Hola Mundo en JavaScript:
El clásico "Hola Mundo" en JavaScript se logra con una simple línea de código:

```javascript
console.log("Hola Mundo"); inpmrime en consola
console.write("Hola Mundo"); inpmrime en el cuerpo del documento web
```

Este código imprimirá la frase "Hola Mundo" en la consola del navegador o en la consola de JavaScript de un entorno de desarrollo.

# Creación de variables y constantes:
En JavaScript, las variables se crean utilizando las palabras clave `var`, `let` o `const`. `var` y `let` permiten declarar variables que pueden cambiar su valor a lo largo del programa, mientras que `const` se utiliza para declarar constantes, es decir, variables cuyo valor no puede ser modificado una vez asignado.

```javascript
var numero = 10;
let mensaje = "Hola";
const PI = 3.1416;
```

# Introducción a la consola de JavaScript:
La consola de JavaScript es una herramienta que permite ejecutar código JavaScript y ver los resultados. Se puede acceder a la consola del navegador presionando F12 y seleccionando la pestaña "Consola". Desde allí, se pueden probar diferentes fragmentos de código y recibir mensajes de salida o errores.

# Depuración y breakpoints:
La depuración en JavaScript es el proceso de identificar y solucionar errores en el código. Un breakpoint es un punto de interrupción que se coloca en una línea específica del código para detener la ejecución en ese punto y permitir inspeccionar el estado de las variables y seguir paso a paso la ejecución. Los breakpoints son herramientas útiles para analizar el flujo del programa y encontrar y corregir errores.

# Problemas con la declaración de variables con var:
La declaración de variables con la palabra clave `var` puede presentar problemas de alcance (scope) en JavaScript. Si se declara una variable con `var` dentro de una función, su alcance se limita a la función en la que se declara, lo que puede provocar comportamientos inesperados y dificultar el mantenimiento del código.

# Prompts, alerts, confirms:
Los métodos `prompt`, `alert` y `confirm` son funciones integradas en JavaScript que permiten interactuar con el usuario. `prompt` muestra un cuadro de diálogo que solicita al usuario que ingrese un valor, `alert` muestra un mensaje de advertencia y `confirm` muestra un cuadro de diálogo con una opción de confirmación (Aceptar/Cancelar). Estas funciones son útiles para obtener información del usuario o proporcionar mensajes informativos o de confirmación. 

```javascript
let nombre = prompt("Por favor, ingrese su nombre:");
alert("¡Hola, " + nombre + "! Bienvenido.");
let

 respuesta = confirm("¿Está seguro de que desea continuar?");
```

# Versiones de JavaScript.

- 1996: livescript a JavaScript (estándar)
- 1997: ES1 (ECMAScript 1)
- 2009: ES5 (ECMAScript 5) con muchas características nuevas
- 2'015: ES6/ES2015 (ECMAScript 2015) que fue la actualización mas grande de JavaScript hasta el momento.
- 2015: se estableció que los nuevos lanzamientos de JavaScript se realizarían cada año.
- 2016/2017/2018/2019/2020...
- - 2016: ES7/ES2016 (ECMAScript 2016) introduce características como el operador de exponente (`**`), la función `includes()` para arrays y la función `padStart()` y `padEnd()` para cadenas.
- 2017: ES8/ES2017 (ECMAScript 2017) incluye nuevas características como las funciones `async/await` para manejar de manera más sencilla las operaciones asíncronas, el objeto `Object.values()` y `Object.entries()` para trabajar con objetos y el método `padStart()` para añadir espacios en blanco al principio de una cadena.
- 2018: ES9/ES2018 (ECMAScript 2018) trae mejoras significativas como las funciones `rest/spread` para manipular arrays y objetos de forma más flexible, la función `Object.getOwnPropertyDescriptors()` para obtener las descripciones de todas las propiedades de un objeto y la función `Promise.finally()` para ejecutar un código independientemente de si una promesa se resuelve o se rechaza.
- 2019: ES10/ES2019 (ECMAScript 2019) introduce características como los métodos `Array.prototype.flat()` y `Array.prototype.flatMap()` para trabajar con arrays multidimensionales, el operador de propagación en objetos (`{...obj}`), el método `trimStart()` y `trimEnd()` para eliminar espacios en blanco al inicio y final de una cadena, y la función `Array.prototype.flat()` para eliminar elementos vacíos de un array.
- 2020: ES11/ES2020 (ECMAScript 2020) agrega características como el operador de encadenamiento opcional (`?.`) para acceder a propiedades anidadas de forma segura, el operador de asignación `||=` y `&&=` para asignación condicional, la función `BigInt` para trabajar con enteros de precisión arbitraria y los métodos `String.prototype.matchAll()` y `Promise.allSettled()`.
- A partir de 2020, JavaScript sigue lanzando nuevas versiones anualmente, con cada versión trayendo nuevas características y mejoras al lenguaje.

# Polyfill
Polyfill, también conocido como "shim", es una pieza de código que proporciona implementaciones adicionales para características o funcionalidades que no son compatibles en todas las versiones o navegadores de JavaScript. Un polyfill permite que el código escrito con características más recientes funcione en entornos más antiguos al agregar la funcionalidad faltante.

# ¿Qué son los primitivos?
Los primitivos en JavaScript son los tipos de datos más básicos y simples. Incluyen valores como números, cadenas de texto, booleanos, null y undefined. Estos tipos de datos son inmutables, lo que significa que no se pueden modificar directamente. Se utilizan para almacenar y representar valores individuales en JavaScript.

# Palabras reservadas
Las palabras reservadas en JavaScript son términos que tienen un significado especial en el lenguaje y están reservados para su uso específico. No se pueden utilizar como nombres de variables, funciones u objetos personalizados. Ejemplos de palabras reservadas incluyen if, else, for, while, function, return, var, const, class, entre otros. Estas palabras tienen una función o sintaxis específica en el lenguaje y deben usarse correctamente según las reglas de JavaScript.

enlace:
<a href="https://mothereff.in/js-variables#%E0%B2%A0%5f%E0%B2%A0">validador de nombres de variables</a>

# Arreglos
Los arreglos en JavaScript son estructuras de datos que permiten almacenar múltiples valores en una sola variable. Se representan mediante corchetes [] y los elementos dentro del arreglo se separan por comas. Los arreglos pueden contener cualquier tipo de dato, incluyendo primitivos y objetos. Se puede acceder a los elementos del arreglo mediante su índice y se pueden realizar diversas operaciones como agregar elementos, eliminar elementos, buscar valores y recorrer el arreglo utilizando bucles.

# Objetos literales
Los objetos literales en JavaScript son estructuras de datos que permiten agrupar propiedades y valores relacionados. Se definen utilizando llaves {} y contienen una lista de pares clave-valor separados por comas. Las claves son strings que representan los nombres de las propiedades y los valores pueden ser cualquier tipo de dato, incluyendo primitivos, arreglos u otros objetos. Los objetos literales son útiles para representar entidades complejas y organizar datos de manera estructurada.

# Funciones básicas
Las funciones básicas en JavaScript son bloques de código reutilizables que realizan una tarea o cálculo específico. Se definen utilizando la palabra clave function seguida de un nombre y un conjunto de paréntesis que pueden contener parámetros. Las funciones pueden tener un cuerpo de código que se ejecuta cuando se invoca la función. Se utilizan para modularizar y reutilizar código, mejorar la legibilidad y permitir la ejecución de tareas específicas.

# Funciones de flecha
Las funciones de flecha, o arrow functions en inglés, son una forma más concisa de definir funciones en JavaScript introducida en ECMAScript 6. Se definen utilizando la sintaxis () => {} y son anónimas por defecto. Las funciones de flecha no tienen su propio valor this y heredan automáticamente el contexto de su entorno. Son especialmente útiles para escribir código más legible y compacto, especialmente cuando se trabaja con funciones de orden superior o se necesitan funciones cortas y simples.

las funciones de flecha (=>) son una forma concisa de escribir funciones y se utilizan principalmente para crear funciones anónimas o para simplificar la sintaxis de las funciones. La sintaxis de las funciones de flecha proporciona una manera más compacta de definir funciones en comparación con la sintaxis de funciones tradicionales, y su uso es común en JavaScript para escribir código más conciso y legible.

# Retorno de las funciones
El retorno de las funciones en JavaScript se refiere al valor devuelto por una función después de que se ha ejecutado. Puede haber declaraciones de retorno explícitas utilizando la palabra clave return, que especifican el valor que se debe devolver. Si no se especifica ningún valor de retorno o no se utiliza la palabra clave return, la función devuelve automáticamente el valor undefined. El retorno de las funciones es útil para obtener resultados calculados, realizar operaciones condicionales o pasar valores a otras partes del código.

# convenciones de escritura comunes para nombrar variables en JavaScript:

- Camel Case: Escribir las palabras enlazadas sin espacios ni guiones, pero comenzando cada palabra (excepto la primera) con una letra mayúscula. Por ejemplo, miVariableEspecial. la convención mas usada en el lenguaje JavaScript en particular.

- Pascal Case: Similar a Camel Case, pero comienza cada palabra con una letra mayúscula, incluso la primera palabra. Es comúnmente utilizado para nombrar clases o constructores. Por ejemplo, MiVariableEspecial.

- Kebab Case: Las palabras se separan utilizando guiones (-). Todas las letras suelen ser minúsculas. Por ejemplo, mi-variable-especial. se recomienda nombrar a los archivos usando este método.

- Upper Case: Es una convención de escritura en la cual todas las letras de una palabra o frase están en mayúsculas. Se utiliza para nombrar constantes o variables que se consideran valores fijos y no deben modificarse.

- Snake Case: Es una convención de escritura en la cual las palabras se separan utilizando guiones bajos (_). Todas las letras suelen ser minúsculas. Se utiliza para nombrar variables, funciones o archivos en los que se desea tener una separación clara entre las palabras y facilitar la legibilidad.

### Palabras reservadas para control de flujo y estructuras de control
if,
else,
for,
while,
do,
switch,
case,
break,
continue,
default,
return.

### Palabras reservadas para declaración de variables y funciones
var,
let,
const,
function,
class,
this,
super,
new,
typeof,
instanceof.

### Palabras reservadas para manipulación de objetos y propiedades
object,
prototype,
delete,
in,
get,
set,
extends.

### Palabras reservadas para manejo de excepciones
try,
catch,
finally,
throw.

### Palabras reservadas para manejo de módulos y exportación/importación
import,
export,
default,
from.

Esta lista incluye algunas de las palabras reservadas más comunes en JavaScript, pero hay más palabras reservadas en el lenguaje. Es importante recordar que no se pueden utilizar estas palabras como identificadores (nombres de variables, funciones, objetos, etc.) en el código, ya que tienen un significado especial y están reservadas para su uso específico en el lenguaje.

# Ciclos y estructuras de control
1. Estructuras de control de flujo: Son mecanismos que nos permiten controlar el flujo de ejecución de un programa. Podemos tomar decisiones o repetir ciertas instrucciones según ciertas condiciones. Las estructuras de control más comunes son: `if` y `else`, `switch`, `while`, `do while` y `for`.

2. Paso de variables por valor y por referencia: Al pasar una variable por valor, se copia el valor actual de la variable en otra variable o función, creando una copia independiente. Al pasar una variable por referencia, se pasa la referencia o dirección de memoria de la variable, lo que significa que ambos apuntan al mismo valor en la memoria.

3. Romper referencia de objetos: Se refiere a eliminar la conexión entre dos variables que apuntan al mismo objeto. Esto se puede lograr asignando un nuevo valor a una de las variables o utilizando métodos como `Object.assign()` o el operador de propagación (`...`).

4. `if` y `else`: Permite ejecutar un bloque de código si una condición es verdadera (`if`) y otro bloque de código si la condición es falsa (`else`). La sintaxis es:

```javascript
if (condicion) {
  // código a ejecutar si la condición es verdadera
} else {
  // código a ejecutar si la condición es falsa
}
```

5. Lógica booleana: Es el área de la programación que involucra expresiones y operaciones basadas en valores booleanos (`true` o `false`). Se utilizan operadores lógicos como `&&` (AND), `||` (OR) y `!` (NOT) para combinar y evaluar estas expresiones.

6. Operadores y operadores de asignación: Los operadores se utilizan para realizar operaciones matemáticas o comparaciones entre valores. Algunos ejemplos son `+` (suma), `-` (resta), `*` (multiplicación), `/` (división), `===` (igualdad estricta). Los operadores de asignación (`=`, `+=`, `-=`, etc.) se utilizan para asignar valores a variables.

7. Operador condicional ternario: Es una forma abreviada de escribir una declaración `if`/`else` en una sola línea. La sintaxis es: `condicion ? valorSiVerdadero : valorSiFalso`. Por ejemplo: `let resultado = edad >= 18 ? "Mayor de edad" : "Menor de edad";`.

8. Diferentes usos del operador condicional ternario: Puede usarse para asignar un valor condicionalmente, mostrar un mensaje basado en una condición o filtrar elementos en un arreglo, entre otros casos.

9. `switch`: Permite evaluar una expresión y ejecutar diferentes bloques de código según el valor de esa expresión. La sintaxis es:

```javascript
switch (expresion) {
  case valor1:
    // código a ejecutar si expresion es igual a valor1
    break;
  case valor2:
    // código a ejecutar si expresion es igual a valor2
    break;
  default:
    // código a ejecutar si ninguno de los casos anteriores se cumple
}
```

10. `while`: Per

mite ejecutar un bloque de código mientras una condición sea verdadera. La sintaxis es:

```javascript
while (condicion) {
  // código a ejecutar mientras la condición sea verdadera
}
```

11. `do while`: Similar a `while`, pero primero ejecuta el bloque de código y luego verifica la condición. Garantiza que el bloque de código se ejecute al menos una vez. La sintaxis es:

```javascript
do {
  // código a ejecutar
} while (condicion);
```

12. `for`: Permite repetir un bloque de código un número determinado de veces. La sintaxis es:

```javascript
for (inicio; condicion; incremento) {
  // código a ejecutar en cada iteración
}
```

- `for in`: Se utiliza para iterar sobre las propiedades enumerables de un objeto. La sintaxis es:

```javascript
for (variable in objeto) {
  // código a ejecutar en cada iteración
}
```

- `for of`: Se utiliza para iterar sobre elementos iterables como arreglos o cadenas de texto. La sintaxis es:

```javascript
for (variable of iterable) {
  // código a ejecutar en cada iteración
}
```
## Laboratorio:
<hr>
1. Trabajar con arreglos: Los arreglos son estructuras de datos que nos permiten almacenar y manipular múltiples valores en JavaScript. Podemos acceder a los elementos del arreglo utilizando índices y realizar operaciones como agregar, eliminar, modificar y recorrer los elementos.

2. Mezclar los valores de los arreglos: Mezclar los valores de los arreglos significa combinar o intercalar los elementos de dos o más arreglos en uno solo. Esto se puede lograr utilizando diferentes métodos, como el uso de bucles y funciones como `concat` o `spread operator`, para crear un nuevo arreglo que contenga los elementos mezclados de los arreglos originales.

3. Introducción a la manipulación del DOM: El DOM (Document Object Model) es una representación estructurada y jerárquica de un documento HTML. Manipular el DOM significa interactuar con los elementos HTML y realizar cambios en su contenido, estilos y comportamiento utilizando JavaScript. Podemos seleccionar elementos, modificar atributos, añadir o eliminar elementos, y responder a eventos del usuario.

4. Eventos: Los eventos son acciones que ocurren en una página web, como hacer clic en un botón, desplazarse por el documento o cargar la página. En JavaScript, podemos capturar y responder a estos eventos mediante la asignación de funciones o callbacks a los elementos HTML. Esto nos permite ejecutar código específico cuando un evento ocurre, como mostrar un mensaje, realizar una acción o actualizar el contenido de la página.

5. Crear imágenes en la página: Podemos crear imágenes en una página web utilizando la etiqueta `<img>` en HTML y asignar la ruta de la imagen al atributo `src`. También es posible crear imágenes dinámicamente utilizando JavaScript, creando elementos `<img>` en el DOM y configurando sus atributos, como el origen de la imagen y el texto alternativo.

6. Realizar la lógica para implementar un competidor de cartas: Implementar un competidor de cartas implica desarrollar la lógica del juego utilizando JavaScript. Esto implica la creación de las reglas del juego, la representación de las cartas, la asignación de valores y la comparación entre ellas, y el manejo de los eventos del usuario, como hacer clic en una carta o realizar movimientos. La implementación puede involucrar el uso de estructuras de datos, algoritmos y manipulación del DOM para mostrar las cartas y actualizar el estado del juego.