# Protocolo HTTP
---
## *¿Qué es?*
El protocolo HTTP es la base de la comunicación en la World Wide Web

## *¿Cómo funciona?*
1. **El cliente envía una petición al servidor:** El cliente, como un navegador web, envía una petición al servidor para solicitar
un recurso especifico, como una pagina web o una imagen. La petición incluye información sobre rel método HTTP utilizado ([Métodos](https://www.w3schools.com/tags/ref_httpmethods.asp)) la URL
del recurso y los encabezados HTTP necesarios.  
2. **El servidor procesa la petición y envía una respuesta:** El servidor recibe la petición, la procesa y envía una respuesta al cliente. La respuesta
incluye el recurso solicitado, junto con un código de estado HTTP ([Códigos](https://www.w3schools.com/tags/ref_httpmessages.asp)) y encabezados adicionales. La respuesta puede incluir datos en HTML, imágenes, archivos JSON, etc.

## *Componentes*
### Métodos
Definen la acción que se desea realizar sobre el recurso. Algunos métodos comunes: [Métodos](https://www.w3schools.com/tags/ref_httpmethods.asp).

### URL
Identifica el recurso específico que se solicita. Con el método y la URL ya casi tengo todo listo.

### Códigos de estado
Indican el resultado de la petición. Algunos códigos comunes: [Códigos](https://www.w3schools.com/tags/ref_httpmessages.asp)

### Encabezados HTTP
Se utilizan para transmitir información adicional tanto en las peticiones, como en las respuestas. Los encabezados pueden incluir información sobre el tipo de contenido, la longitud, la codificación, la autenticación, etc.

# Express.js
Es uno de los frameworks de backend mas populares para Node.js y es una parte extensa del ecosistema JavaScript.

## Ruta básica
Instalaremos el paquete de Express.js con `npm install express`
Crearemos un archivo `server.ts` para alojar dentro de ella la estructura principal del servidor