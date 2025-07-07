# 🙍‍♂️ Proyecto: Registro e Inicio de Sesión
Este proyecto tiene como finalidad crear una página web responsive, de diseño suave y elegante, que permita al usuario registrarse y acceder a su sesión mediante formularios validados con JavaScript, sin necesidad de usar ninguna API externa. Toda la información se gestiona mediante LocalStorage.

--

## 🧠 Sprint Goal
Diseñar y programar una página web moderna, validada y funcional que permita a los usuarios registrarse y luego iniciar sesión con sus credenciales guardadas localmente.

--

## 🚀 Sprint Backlog

|Tarea                                                                                       |  Gadiel (G)  |  Edson (ER)  |  Christopher (CS)  |
|--------------------------------------------------------------------------------------------|--------------|--------------|--------------------|
|Crear estructura HTML para formularios de registro e inicio de sesión                       |    	 x      |    		   |    		        |
|Aplicar estilos CSS3 responsive, suaves y elegantes	                                     |       x		|    		   |    		        |
|Añadir animaciones básicas con JavaScript (transiciones, aparición de formularios, etc.)    |       x		|    		   |    		        |
|Implementar validación de cada campo del formulario de registro con JS	                     |     	 	    |	    x	   |    	  	        |
|Guardar datos del usuario en LocalStorage al registrarse		                             |       	    |    		   |    	 x	        |
|Verificar credenciales del usuario en inicio de sesión usando LocalStorage                  |	            |     	x	   |    	            |
|Mostrar mensajes de éxito o error según el resultado de validaciones o login			     |              |      		   |    	 x	        |
|Subir proyecto a GitHub		                                                             |      	    |    		   |    	 x	        |
|Documentar en el README.md		                                                             |      	    |    	x	   |    		        |

--

## 👥 Roles del Equipo

| Rol              | Nombre del integrante  | Función principal                                                    |
|------------------|------------------------|----------------------------------------------------------------------|
| Scrum Master     | Alfredo Gonzales       | Supervisa el avance del equipo y organiza las reuniones              |
| Product Owner    | Diego Espinoza         | Establece las metas del proyecto y ordena las tareas                 |
| Developer 1      | Gadiel Collazos        | Crea la interfaz y aplica el diseño responsivo                       |
| Developer 2      | Christopher Sosa       | Programación JS para Localstorage                                    |
| Developer 3      | Edson Rojas            | Programación JS para validacion de campos y verificar credenciales   |

--

## 🛠 Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript
- LocalStorage

--

## 🎨 Diseño de la Interfaz

✅ Estilo responsive adaptable a diferentes dispositivos.
✅ Paleta de colores suaves y moderna.
✅ Animaciones simples con JavaScript para transiciones de formularios.
✅ Estructura clara y accesible para mejorar la experiencia de usuario.

--

## 🔐 Funcionalidades

✅ Formulario de registro con validación en tiempo real.
✅ Inicio de sesión con verificación de usuario y contraseña.
✅ Almacenamiento de usuarios en LocalStorage.
✅ Mensajes de error claros para campos vacíos, mal formato o credenciales incorrectas.
✅ Botones para cambiar entre el formulario de registro e inicio de sesión.

--

## 🔗 Link de la Demo

[Ver demo en vivo](https://christho123.github.io/SCRUM-Y-XP/html/index.html)

--

## 📘 Cómo usar la aplicación
1. **Abre el archivo `index.html` (en `html/`) en tu navegador**
   Asegúrate de que los archivos `styles.css` (en `css/`) y `app.js` (en `js/`) estén correctamente enlazados.

2. **Interfaz principal:**

- Puedes registrarte llenando todos los campos del formulario.
- Si ya tienes una cuenta, cambia al formulario de **inicio de sesión**.
- **Ingresa** tus credenciales y accede.

3. **Validaciones activas:**

- Todos los campos son campos requeridos.
- Se muestran mensajes si hay campos vacíos o mal escritos.
- No se permite registrar dos usuarios con el mismo correo.