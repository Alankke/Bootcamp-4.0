# Inicialización de NodeJS e Instalación de Express

## Tipos de Dependencias en NodeJS

### Dependencias de Producción
Las dependencias de producción son esenciales para que la aplicación funcione correctamente en un entorno de producción. Estas son requeridas para la ejecución de la aplicación.

**Instalación:**
```bash
npm install <package_name>
```

Al ejecutar `npm run build`, estas dependencias se incluyen en el artefacto de construcción.

### Dependencias de Desarrollo
Las dependencias de desarrollo se utilizan durante el proceso de desarrollo pero no son necesarias para que la aplicación se ejecute en producción. Estas incluyen:
- Compiladores
- Linters
- Frameworks de pruebas
- Otras herramientas de desarrollo

## Archivos y Carpetas Importantes

### node_modules
Al instalar una dependencia, la carpeta `node_modules` se crea automáticamente. Esta carpeta debe agregarse a `.gitignore` para evitar subir estos archivos al repositorio remoto.

### package-lock.json
Este archivo contiene todas las dependencias transitivas. Por ejemplo, si necesitamos Express, Express en sí requiere otras dependencias para funcionar. Esto se llama dependencias circulares.

### package.json
Las dependencias se registran en `package.json`:
```json
"dependencies": {
    "express": "^5.1.0"
}
```

## Dependencias Globales
Las dependencias globales se instalan a nivel del sistema en lugar de en un proyecto específico.

**Instalación:**
```bash
npm install -g <package_name>
```

**Casos de uso:** Paquetes utilizados en múltiples proyectos (ej., nodemon, TypeScript)

**Desventaja:** En entornos de equipo, los miembros del equipo deben adivinar qué dependencias globales se requieren.

**Mejor práctica:** Siempre instalar dependencias por proyecto para mantenerlas registradas en `package.json`.ion

## Dependency Types in NodeJS

### Production Dependencies
Production dependencies are essential for the application to function correctly in a production environment. These are required for the application's execution.

**Installation:**
```bash
npm install <package_name>
```

When running `npm run build`, these dependencies are included in the build artifact.

### Development Dependencies
Development dependencies are used during the development process but are not necessary for the application to run in production. These include:
- Compilers
- Linters
- Testing frameworks
- Other development tools

## Important Files and Folders

### node_modules
When installing a dependency, the `node_modules` folder is automatically created. This folder should be added to `.gitignore` to avoid uploading these files to the remote repository.

### package-lock.json
This file contains all transitive dependencies. For example, if we need Express, Express itself requires other dependencies to function. This is called circular dependencies.

### package.json
Dependencies are registered in `package.json`:
```json
"dependencies": {
    "express": "^5.1.0"
}
```

## Global Dependencies
Global dependencies are installed system-wide rather than in a specific project.

**Installation:**
```bash
npm install -g <package_name>
```

**Use cases:** Packages used across multiple projects (e.g., nodemon, TypeScript)

**Drawback:** In team environments, team members must guess which global dependencies are required.

**Best practice:** Always install dependencies per project to keep them registered in `package.json`.