
## Configuración del Proyecto

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

