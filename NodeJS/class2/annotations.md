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
Instalaremos el paquete de Express.js con <br>`npm install express`<br><br>
Crearemos un archivo `server.ts` para alojar dentro de ella la estructura principal del servidor

## *Rutas*
### Ruta
Es una cadena de texto que representa la URL que desencadenará la ejecución del controlador.

### Controlador
Es una función que se ejecuta cuando se recibe una solicitud GET a la ruta especificada.

## *Parámetros y Querys*
Las rutas GET, por ejemplo, pueden incluir parámetros para capturar información especifica de la solicitud. Los parámetros se definen utilizando expresiones regulares en la ruta y se pueden acceder desde el objeto req en el controlador

### Querys
El objeto req.query permite acceder a los parámetros de consulta que se envían dentro de la solicitud
Estos parámetros son pares clave-valor que se agregan a la URL después del signo de interrogación y se separan por el símbolo &.

Ejemplo:  
```localhost:3000/user?nombre=John&apellido=Connor&edad=30```

## Envío de datos
### Verbos HTTP
Los verbos definen el tipo de acción que se desea realizar sobre un recurso en el servidor.

## Cuerpos de la solicitud
El cuerpo de la solicitud HTTP es donde se envían los datos reales.<br><br>
Formatos:<br><br>
**JSON**: Formato de texto ligero y estructurado para intercambiar datos<br><br>
**HTML**: Datos enviados a traves de formularios web. Formato application/x-www-form-urlencoded<br><br>
**Archivos**: Envío de archivos binarios, como imágenes o documentos. Formatos como multipart/form-data

## Cabeceras de la solicitud
Las cabeceras de solicitud HTTP **proporcionan metadatos adicionales sobre la solicitud.** Tipo de contenido del cuerpo, longitud de datos, origen de solicitud.<br><br>
Algunas cabeceras comunes para el envío son:<br><br>
**Content-Type:** Indica el tipo de datos que se envían en el cuerpo de la solicitud
**Content-Length:** Especifica la longitud de los datos en bytes en el cuerpo de la solicitud.