// En esta clase vemos la inicializacion de NodeJS y la instalacion de Express
// En NodeJS podemos instalar dependencias de producción y de desarrollo

// DEPENDENCIAS DE PRODUCCIÓN: 
// Son aquellas que se necesitan para que la aplicación funcione correctamente en
// un entorno de producción. Estas dependencias son esenciales para la ejecución 
// de la aplicación y se instalan utilizando el comando:
// npm install <nombre_paquete>

// Cuando ejecutamos un npm run build, estas dependencias se incluyen en el artefacto

// DEPENDENCIAS DE DESARROLLO:
// Son aquellas que se utilizan durante el proceso de desarrollo, pero no son 
// necesarias para que la aplicación funcione en producción. Estas dependencias 
// incluyen herramientas como compiladores, linters, frameworks de testing, entre otros.


// Cuando instalamos una dependencia, se agrega automaticamente la carpeta node_modules que podemos
// Agregar al gitigonre para no subir estos archivos al repo remoto

// También se crea el package-lock.json que es un archivo que contiene todas las otras dependencias
// Es decir, si necesitamos express, express a su vez necesita otras dependencias para funcionar, esto se llama
// dependencias circulares

// Por utlimo cabe aclarar que en el package.json se agrega esta linea:
/*   
"dependencies": {
    "express": "^5.1.0"
  }
*/

//En esto de las dependencias tambien podemos ver dependencias globales
// Las globales son aquellas que se instalan en todo el sistema y no en un proyecto en particular
// Se instalan utilizando la flag -g
// Es útil para paquetes que sabemos que vamos a utilizar en varios proyectos, como por ejemplo
// nodemon, typescript, etc.
// El problema con esto es que si trabajamos en equipo, cada uno va a tener que adivinar cual es esta dependencia global
// Por eso siempre es mejor instalar las dependencias en cada proyecto, ya que se quedan registradas en el package.json