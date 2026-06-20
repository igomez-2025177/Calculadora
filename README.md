# Calculadora
Este proyecto es una aplicacion de consola hecha en TypeScript que calcula el subtotal, IVA y total de una compra.

Lo hice como parte de una actividad para aprender a usar funciones, modulos y documentacion en TypeScript. La idea era separar cada calculo en su propio archivo y que todo trabajara junto desde un archivo principal.


Para que sirve

Ingresas los precios de tus productos y el programa te calcula automaticamente cuanto es el subtotal, cuanto es el IVA (12%) y cuanto es el total a pagar.

Por ejemplo, si tienes 3 productos que cuestan Q25, Q50 y Q100, el programa suma todo, le aplica el IVA del 12% de Guatemala y te muestra el total final. Al terminar te pregunta si quieres hacer otro calculo o salir.


Por que use TypeScript y no JavaScript

TypeScript me permite decirle al codigo que tipo de dato va en cada variable, por ejemplo si es un numero o un texto. Esto ayuda a evitar errores antes de ejecutar el programa. Ademas hace el codigo mas facil de entender para cualquiera que lo lea.


Tecnologias que use


TypeScript
Node.js
readline-sync (para pedir datos al usuario en la terminal)



Como esta organizado el codigo

Cada calculo tiene su propio archivo dentro de la carpeta calculos. Esto lo hice para que cada archivo tenga una sola funcion y sea mas facil de entender y modificar.


subtotal.ts se encarga de sumar todos los precios
iva.ts se encarga de calcular el impuesto
total.ts se encarga de sumar el subtotal con el IVA


Luego el archivo index.ts importa las tres funciones y las usa juntas para mostrar el resultado al usuario.


Como ejecutarlo

Primero instala las dependencias:

bashnpm install

Luego para compilar y ejecutar:

bashnpm run dev

Si solo quieres compilar:

bashnpm run build

Si solo quieres ejecutar (despues de compilar):

bashnpm run start
