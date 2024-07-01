
## Configuración del Proyecto

se utilizo el proyecto de noticias para realizar el proyecto final

### Requisitos

- Node.js
- npm o yarn

### Instalación

1. Clona el repositorio:

2. Instala las dependencias:

   npm install

### Ejecución en Desarrollo

npm run dev

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

Se realizo la solucion del proyecto

para el la creacion, modificacion se utilizo un objeto adicional ya que la variable price se recuperaba como cadena asi que con este objeto lo casteamos a la variable que requerimimos

ModalNews.tsx

      var datosUpdate = {
        name: Productos.name,
        description: Productos.description,
        price: parseFloat((Productos.price+"").replace(',', '.')),
      }

## Inplementacion de cypress abrir para ejecutar los ejercicios

   ```bash
   npx cypress open
   ```

## Automatización de Flujos Críticos

1. Login
   Autologin.spec.cy.ts

2. Crear Producto
   CrearProducto.spec.cy.ts
3. Editar Producto
   EditarProducto.spec.cy.ts

4. Eliminar Producto
   EliminarProducto.spec.cy.ts

5. Crear, Verificar y eliminar un producto
   VerificacionProductoYeliminacion.spec.cy.ts

## Automatización de Flujos alternos

1. Crear Producto
   LoginFail.spec.cy.ts

2. Crear producto sin precio sale error se corrige se verifica y se elimina
   ErrorCrearProducto.spec.cy.ts
3. Creacion doble de un producto se requiere correccion
   Autologin.spec.cy.ts

## Agregando un video para verificacion del uso de cypress en todo el proceso

# Carpeta video_testing

   video_testing > Video Testing Cypress.mp4