# ArqHexagonal - Proyecto de arquitectura hexagonal en Angular

## Descripción
Este proyecto es un ejemplo de una aplicación Angular que sigue la arquitectura hexagonal (también conocida como puertos y adaptadores). Incluye un formulario de login simple, pruebas unitarias y configuración de Karma y Jasmine para medir la cobertura de código.

## Requisitos previos
- Node.js (v16 o superior)
- Angular CLI (v14 o superior)
- IDE (opcional, recomendado: Visual Studio Code, WebStorm)

## Estructura del proyecto
El proyecto está organizado en las siguientes capas:

```
src/
└── app/
    ├── adapters/
    │   └── auth.adapter.ts
    ├── components/
    │   └── login
    │       └── login.component.ts
    ├── domain/
    │   ├── ports/
    │   │   └── auth.port.ts
    │   └── auth.service.ts
    ├── app.component.ts
    └── main.ts
```

## Cómo levantar la aplicación
Sigue estos pasos para ejecutar la aplicación en tu entorno local.

### 1. Clonar el repositorio
Clona el repositorio a tu máquina local:
```bash
git clone <URL-del-repositorio>
```

### 2. Navegar al directorio del proyecto
Accede a la carpeta del proyecto:
```bash
cd ArqHexangular-frontend
```

### 3. Instalar dependencias
Instala las dependencias necesarias:
```bash
npm install
```

### 4. Compilar y ejecutar la aplicación
Usa Angular CLI para compilar y ejecutar la aplicación:
```bash
ng serve
```
La aplicación estará disponible en:
```
http://localhost:4200
```

## Funcionalidades disponibles
### Login
- **Usuario:** user
- **Contraseña:** password

Al ingresar las credenciales correctas, se mostrará el mensaje "Login successful!". De lo contrario, se mostrará "Invalid credentials".

## Ejecutar pruebas
El proyecto incluye pruebas unitarias. Para ejecutarlas, usa el siguiente comando:
```bash
ng test
```

### Pruebas unitarias
Las pruebas unitarias cubren las siguientes clases:
- `LoginComponent`
- `AuthAdapter`

### Generar informe de cobertura
El proyecto está configurado con Karma y Jasmine para medir la cobertura de código. Para generar el informe de cobertura, ejecuta:
```bash
ng test --code-coverage
```
El informe se generará en:
```
coverage/<nombre-del-proyecto>/index.html
```
Abre el archivo `index.html` en tu navegador para ver el informe de cobertura.

### Excluir archivos del informe de cobertura
Si deseas excluir ciertos archivos del informe de cobertura (por ejemplo, archivos de configuración o pruebas), puedes modificar el archivo `angular.json`:
```json
"test": {
  "options": {
    "codeCoverage": {
      "exclude": [
        "src/test.ts",
        "src/**/*.spec.ts",
        "src/environments/*.ts"
      ]
    }
  }
}
```

## Tecnologías utilizadas
- **Angular:** Framework para construir aplicaciones web.
- **Jasmine:** Framework para pruebas unitarias.
- **Karma:** Herramienta para ejecutar pruebas en el navegador.
- **Arquitectura hexagonal:** Patrón de diseño que separa la lógica de negocio de la infraestructura.

<img src="https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png" alt="Arquitectura Hexagonal" width="400"/>