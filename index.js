class Usuario {
    constructor (nombre,apellido,libros=[],mascotas=[]){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
        
    }

    getFullName() {
        return `${this.nombre} ${this.apellido} `
        
    }

    addMascota(mascota){
        this.mascotas.push(mascota) 

    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombreL, autorL){
        this.libros.push({nombreL, autorL})
    }
    
    getBookNames(){
        return this.libros.map((libro) => libro.nombreL) 
    }
}



let usuario = new Usuario ("Maxi" , "Perez", [{nombreL: "Potter", autorL: "Rowling"}], ["potter2", "potter3"])


console.log (usuario.getFullName())

console.log(usuario.addMascota("Firulais"))

console.log(usuario.countMascotas())

console.log(usuario.addBook("Potter8", "JKRowling"))

console.log(usuario.getBookNames())

console.log(usuario.mascotas)

console.log(usuario.libros)







