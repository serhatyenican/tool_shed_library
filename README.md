## Biblioteca de Herramientas para proyectos DIY Rafael Garcia

### deploy can be found at https://the-tool-shed-library.netlify.app

Nombre The Tool Shed Library
modelo de datos de usuario
USER:

{
userName: string, (unique, required)

passwd: string, (required)

email: string (unique, required)

favorites: Array<Types.ObjectId>

}
usuario

El usuario podrá añadir productos a su lista y solicitarlos para llevárselos si están disponibles.

El usuario podrá crearse a sí mismo via formulario register, para después acceder a la app via login.

El usuario podra añadir diferentes herramientas a su lista personal, y solicitar aquella que este disponible. Al entrar podra acceder a ese listado. La pagina requerirá registro y login para crear lista propia y solicitar herramientas.
Un interfaz de producto, con varias categorías, solo el propietario de la pagina crea productos:

nombre

categoría

imagen

está disponible

dueño (si tiene uno)

descripción

Las herramientas mostrarán si estan disponibles o si están siendo utilizadas por otro usuario, utilizando la categoría "owner" (herramientas sin "owner" están disponibles).
En este punto tengo dudas acerca de como proceder. Me gustaría que la pagina no dé demasiada impresión de estar a medias, y la solicitud de herramienta creo que es mejorable.
Modelo de datos.
PRODUCT: [
{
id: Type.ObjectId,

name: string,

category: general | wood | electrical_paint | garden,

images: ["url1", "url2", "url3"],

isAvailable: boolean,

description: string,

owner: Types.ObjectId | null

}
]
La aplicación contará con dos controllers, dos repositories y dos routers. Uno para los productos, y otro para los usuarios.  
La gestión de las imágenes de los productos se realizará utilizando la librería Firebase https://firebase.google.com/. 

Backend Endpoints:

◾ [POST]/user/register --> Registro de usuarios

◾ [POST]/user/login --> Login de usuarios

◾ [DELETE]/user/id: delete --> Usuario borra su cuenta

◾ [GET]/products/category[category] --> devuelve array de productos de una determinada categoría

◾ [GET]/products/find:key:value/(product.name) (search by query) para buscar productos en el campo busqueda...
◾ [[PATCH]/users/addProduct/:id] --> permite al usuario añadir un producto a su lista.
◾ [[PATCH]/products/id:update2]--> permite al usuario solicitar un producto que está en su lista. (patch --> cambia la categoría dueño a sí mismo).  
◾ [[PATCH]/users/removeProduct/:id] --> --> permite al usuario borrar un producto de su lista.

La página mostrará en su sección principal los productos disponibles de categoría general, y un menú de navegación para ir a cada categoría exclusivamente. Además, contará con un campo de búsqueda para quien esté intentando encontrar un producto en particular.
Front End components

header:

pinta el header, y contiene botones de register/login, búsqueda y menú navegación

footer:

pinta el boton de home y mock de formulario de contacto

home page:

contiene el listado de categorías en su versión móvil.

category pages:

Cada página contiene el listado de productos que coinciden con su categoría.

detail page:

Renderiza las características del product item, e incluye los botones de añadir a mi lista

how does it work page:

Contiene how does it work component

nav menu:

contiene los enlaces a las diferentes páginas del proyecto.

search:

Realiza una llamada a servicio repository, que a su vez, llamará a servicio GET/products/findByName y los devuelve.

register:

llama al servicio POST/register para crear un usuario

login:

llama al servicio POST/Login para validar un usuario, con ayuda del servicio Auth

product list:

Devuelve el listado de productos de cada categoria usando diferentes versiones de GET/product/findByCategory/category. Una para cada cada categoria

product item:

Contiene el list item que corresponde a su lista padre. Devuelve todas las características del producto.

how does it work component:

Contiene texto y/o gráfico explicativo con contexto de origen de esta iniciativa, como si fuera verdadera.

pagination:

realiza el servicio de fetch para capturar los elementos anteriores y siguientes para generar el correspondiente listado de productos.

add to my list:

Utiliza custom hook handleAdd + servicio PATCH/users/addProduct/:id para añadir un producto a la lista del usuario.

remove from my list:

Utiliza custom hook handleDelete + servicio PATCH/users/deleteProduct/:id para eliminar un producto de la lista del usuario.

my list:

Devuelve el listado de productos asociados al usuario.

request product:

Actualiza el estado del producto con handleUpdate + servicio PATCH/product para solicitar un producto y convertir al usuario en su dueño, haciendo que éste ya no esté disponible para el resto de los usuarios. (esta página solo tiene un producto en stock de cada ejemplo, que casualidad...)
