# Aplicación de lista de tareas pendientes

Esta es una aplicación de lista de tareas pendientes sencilla e interactiva creada con React. La aplicación permite a los usuarios administrar sus tareas de manera eficiente con un diseño limpio y minimalista inspirado en el diseño clásico de "tareas pendientes". La aplicación incluye características clave como la adición y eliminación de tareas y contadores de tareas para mejorar la usabilidad.

## Características

- **Agregar tareas**: los usuarios pueden agregar fácilmente nuevas tareas escribiendo en el campo de entrada y presionando "Enter".
- **Eliminar tareas**: las tareas se pueden eliminar haciendo clic en el botón Eliminar, que solo aparece al pasar el cursor sobre la tarea.
- **Contador de tareas**: un pie de página muestra la cantidad de tareas restantes de manera dinámica.
- **Diseño interactivo**: estilo minimalista con efectos de desplazamiento para una mejor experiencia del usuario.

## Instalación

Para ejecutar el proyecto localmente, siga estos pasos:

1. Clone el repositorio:
```bash
git clone <repository-url>
```
2. Navegue hasta el directorio del proyecto:
```bash
cd todo-list-app
```
3. Instale las dependencias:
```bash
npm install
```
4. Inicie el servidor de desarrollo:
```bash
npm start
```
5. Abra su navegador y navegue hasta:
```
http://localhost:3000
```

## Descripción general del código

### Componente principal: `Todo`

- Administra el estado general de la aplicación.
- Almacena tareas en una variable de estado (`useState`).
- Maneja la adición y eliminación de tareas.

### Componentes

1. **`InputField`**:
- Un campo de entrada controlado para agregar tareas.
- Actualiza el estado del componente principal cuando el usuario presiona "Enter".

2. **`TaskList`**:
- Muestra la lista de tareas.
- Delega cada tarea al componente `TaskItem`.

3. **`TaskItem`**:
- Representa una tarea individual.
- Incluye un botón de eliminación que aparece solo al pasar el mouse sobre el elemento.

4. **Footer**:
- Muestra dinámicamente la cantidad de tareas restantes.
- Proporciona información cuando no quedan tareas.

## Estructura del archivo

```plaintext
.
├── src
│ ├── componentes
│ │ ├── InputField.js # Componente de campo de entrada
│ │ ├── TaskList.js # Lista de tareas
│ │ └── TaskItem.js # Componente de tarea individual
│ ├── App.js # Punto de entrada principal para la aplicación
│ ├── index.js # Punto de entrada de React
│ └── styles.css # Estilo de la aplicación
├── público
│ └── index.html # Plantilla HTML principal
├── package.json # Dependencias del proyecto y scripts
└── README.md # Documentación del proyecto
```

## Mejoras futuras

- **Edición de tareas**: permite a los usuarios editar tareas existentes directamente.
- **Filtrado de tareas**: agrega opciones para filtrar tareas (p. ej., completadas, activas).
- **Persistencia de tareas**: guarda las tareas en el almacenamiento local para conservarlas en las distintas sesiones.

## Licencia

Este proyecto tiene licencia MIT.

## Autor

- **Desarrollado por JulioRom**
- **Contacto:** [julioandrescampos@gmail.com](correo a:julioandrescampos@gmail.com)
- **GitHub:** [https://github.com/JulioRom](https://github.com/JulioRom)