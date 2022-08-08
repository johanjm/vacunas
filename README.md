# Información general del sistema


-El sistema esta desarrollado en FRONT END con la tecnomoggía de React.JS.

-La base de datos esta diseñada en un archivo .json, que es utilizada como una Fake-Api con los servicios de json-server.

-La aplicación está configurada para ejecutarse en el puerto 3000.

-La Fake-Api está configurada para ejecutarse en el puerto 5000.

-Se utilizó librerias como Bootstrap y ReactStrap para una buena estética.

-Se utilizó la libreria Cookies para el desarrollo de inicio de sesión y el manejo de datos.

# Inicio del sistema

Para iniciar la aplicación se utiliza "npm start" dentro del directorio donde se encuentren los archivos.

Para iniciar la Fake-Api, solo se debe ejecutar "npm run fake-api" dentro del directorio.

Por defecto se creo un usuario "administrador" con las siguientes credenciales:

user: maria

pasword: maria

Por defecto se encuentran creados varios usuarios "empleados", por ejemplo:

user: JohanHernan

password: JohanHernan

# Organización del sistema

El sistema se encuentra organizado en 5 carpetas: "routes", "pages", "css", "components" "api".

En la carpeta "api" se encuentra el archivo "db.json" que es la base de datos que se utiliza para la Fake-Api.

En la carpeta "routes" se encuentra un único archivo "Routes.js" donde solo se crearán los enrutamientos necesarios para las páginas del sistema.

En la carpeta "pages" se tiene:

-El archivo "Login.js" donde se encuentra el sistema de autenticación que mediante requerimientos a la Fake-Api valida los datos para permitir el acceso al sistema, identificando si se trata de un admiistrador o un empleado.

-El archivo "Admin.js" es basicamente la página donde se implementan los componentes que permiten agregar nuevos empleados, visualizar los empleados existentes y filtrar los empleados dependiendo los parametros especificados.

-El archivo "Empleado.js" es basicamente la página donde se implementan los componentes que permiten visualizar los datos del empleado y también el componente que permite completar y editar los datos del empleado.

En la caperta "css" se encuentran los archivos "Forms.css", "Login.css" y "Vistas.css" que son unicamente hojas de estilo para realizar una interfás gráfica mas amigable.

En la carpeta "components" se encuentran:

-Archivo "Request.js" es practicamente una librería que está diseñada para facilitar los requerimientos que se requieren hacer a la Fake-Api, aunque esta diseñada para realizar requerimientos a cualquier Api.

-Archivos "CrudApi.js" y "CrudApiE.js", contienen los métodos para y requerimientos necesarios para poder realizar la lectura, creación, actualización y eliminación (CRUD) de los datos, interactuando en tiempo real con la aplicación y la Fake-Api

-Archivos "FormAdmin.js" y "FormEmpleado.js", contienen los formularios que son utlizados y llamados en "CrudApi.js" y "CrudApiE.js" para poder realizar la creación o actualización de los datos.

-Archivos "VistaAdmin.js", es donde se encuentra los métodos para que se pueda visualizar mediante una tabla los datos principales de los empleados y además también el filtrado de información dependiendo de los parámetros requeridos.

-Archivos "VistaEmpleado.js", es donde se encuentra los métodos para que se pueda visualizar todos los datos del empleado.

# Funcionalidad del sistema

- Todos los campos de ingreso de datos se encuentran validados dependiendo del dato que se desee ingresar. 
- El sistema reconoce perfectamente que usuario ha ingreasado, diferenciando claramente si se trata de un empleado o un administrador.
- Los dos tipos de usuarios tienen páginas de sesión diferentes.
- El usuario "administrador" (una vez logueado), puede ver automaticamente todos los empleados registrados y puede filtrar a los empleados en "vacunado/no vacunado" y por el tipo de vacuna que se ha colocado.
- Al dar de alta o crear a un empleado, se crea automaticamennte un usuario y una contraseña que es la unión de sus dos nombres tanto para el usuario como para la contraseña
- al dar de alta o crear un empleado, el sistema le asigna automaticamente un id único.
- Ell usuario "empleado" (una vez logueado), puede vizualizar automáticamente su información personal pero tambien puede agregar y editar la información incompleta.
- 


