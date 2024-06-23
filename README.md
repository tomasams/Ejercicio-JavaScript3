## Trabajo Practico Opcional JS - 3

## Enunciado:
Gestión de una Biblioteca  
  
Estás a cargo de desarrollar un pequeño sistema de gestión para una biblioteca utilizando JavaScript. Este sistema debe permitir administrar libros y autores, y realizar algunas operaciones básicas sobre ellos.  
  
Para ello, debes crear un objeto Libro con las propiedades titulo (string), autor (string), añoPublicacion (número) y genero (string). Además, este objeto debe tener un método info que devuelva un string con la información del libro.  
  
  
Luego, crea un arreglo llamado biblioteca que contenga al menos tres objetos Libro con diferentes datos.  
  
A continuación, implementa una función buscarLibrosPorAutor que reciba como parámetro el nombre de un autor (string) y devuelva un arreglo con los libros escritos por ese autor.  
  
Finalmente, implementa una función añadirLibro que reciba como parámetros los datos de un nuevo libro (titulo, autor, añoPublicacion, genero) y lo añada al arreglo biblioteca.  
  
Tareas a realizar:  
  
Define el objeto Libro con las propiedades y métodos mencionados.  
Crea el arreglo biblioteca con al menos tres libros.  
Implementa la función buscarLibrosPorAutor.  
Implementa la función añadirLibro.  

Prueba tu código añadiendo un nuevo libro a la biblioteca y luego buscando libros por un autor específico.

## Funcionamiento del Programa

 - Se crea una clase llamada "Libro", la cual tiene las propiedades de Autor, Titulo, Año de publicación, y el genero principal del libro.
 - Se agregan una cantidad especifica de libros a un Array llamado "biblioteca"
 - Se crea una variable llamada "nombreAutor", que es de tipo String y debe ser modificada a gusto para usarla luego
 - La variable anterior se usa en una funcion llamada "buscarLibrosPorAutor" en la cual se le pasa la variable "nombreAutor" y verifica si existe un libro que haya sido escrito por el autor al cual hace referencia la variable anterior, en caso de que exista devuelve un String con todos los datos del libro, y en caso contrario informa de que no existe un libro de ese autor en la biblioteca
 - Función "añadirLibro" a la cual se le deben pasar todos los parámetros ya mencionados para crear un objeto de clase libro, esta función se encarga de crear un nuevo objeto de clase libro con los parámetros anteriores y añadirlo al Array biblioteca.
 
