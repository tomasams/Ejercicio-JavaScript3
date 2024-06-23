class Libro{
    constructor(titulo, autor, añoPublicacion, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.añoPublicacion = añoPublicacion
        this.genero = genero
    }

    info(){
        console.log(`El titulo del libro es ${this.titulo} escrito por ${this.autor} en el año ${this.añoPublicacion}, este libro es de genero ${this.genero}`)
    }
}

let libro1 = new Libro("Don Quijote", "Miguel de Cervantes", 1605, "Novela Historica")
let libro2 = new Libro("Historia de dos ciudades", "Charles Dickens", 1859, "Novela Historica")
let libro3 = new Libro("El Señor de los Anillos", "J. R. R. Tolkien", 1954, "Literatura Fantastica")
let libro4 = new Libro("El principito", "Antoine de Saint-Exupéry", 1943, "Literatura Infantil")

let biblioteca = [libro1, libro2, libro3, libro4]

let nombreAutor = "Cao Xueqin"

function buscarLibrosPorAutor(nombreAutor){
    let libroFound = false 
    for (const libro of biblioteca) {
        if (nombreAutor == libro.autor){
            libro.info()
            libroFound = true
            break
        }
    }

    if (libroFound == false){
        console.log("No se ha encontrado un libro del autor solicitado")
    }
}

function añadirLibro(titulo, autor, añoPublicacion, genero){
    let libro = new Libro(titulo, autor, añoPublicacion, genero)
    biblioteca.push(libro)
}

añadirLibro("Sueño en el pabellón rojo", "Cao Xueqin", 1791, "Novela")

buscarLibrosPorAutor(nombreAutor)