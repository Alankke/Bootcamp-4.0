# Asincronismo y Middlewares
---
## Asincronismo con callbacks y eventos en Node
Node es un entorno de ejecución de JavaScript que se caracteriza por su **naturaleza asíncrona** <br><br>
Esto significa que las operaciones que toman tiempo, como leer un archivo o hacer un a petición a un servidor, no bloquean el hilo principal de la ejecución.<br><br>
Para manejar la asincronía, node utiliza callbacks y eventos.

### Un callback es
Una función que se pasa como argumento a otra función.

### Que es un proceso asíncrono
1. Se ejecuta el flujo principal hasta que llega un momento que se hace una llamada a un proceso asíncrono.
2. Se hace una llamada a un proceso asíncrono.
3. Continua la ejecución del proceso principal.
4. 2 y 3 se ejecutan en secuencia, pero para nuestra percepción como humanos ocurren de inmediato, ya que el proceso asíncrono arranca. Pero toda la demora que podría producirse en el no se nota, ya que el flujo de ejecución se libera y con ello el flujo principal puede continuar su ejecución instantáneamente.

## Promesas
Las promesas proporcionan una forma mas fácil y legible de manejar operaciones asíncronas en JavaScript, en comparación del uso de callbacks solos.<br>
En lugar de encadenar callbacks anidados, puede usar el método then para definir como manejar una promesa cumplida y el método catch para definir como manejar una promesa rechazada

## Async / Await
``async`` es una palabra clave que se usa para indicar que una función es asíncrona y ``await`` se usa para esperar a que una promesa se cumpla antes de continuar con la ejecución.

## Middlewares 
Son funciones para procesar solicitudes entrantes antes de que alcancen su destino final y manejar las respuestas salientes antes de que sean enviadas de vuelta al cliente

Se sitúan entre la solicitud y la respuesta.
Tienen acceso a:
- **req:** información sobre la solicitud del cliente.
- **res:** información sobre la respuesta que se envía hacia el cliente.
- **next:** Es necesaria para pasar al control al siguiente middleware en la cadena. Si no se le llama a next() no se procesarán mas middlewares.