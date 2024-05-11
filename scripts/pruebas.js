// ECMASCRIP II
//  PROTOTIPOS
// function Persona (nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
// }

// Persona.prototype.saludar = function() {
//     console.log("Hola soy", this.nombre);
// };

// const persona1 = new Persona("Jesús", 25);

// console.log(persona1);

// persona1.saludar();

//////////////////////////////////////////////////////////////////////////////////////////////////

// Estructura, sintaxis y métodos

// En el siguiente video exploraremos cómo se compone una clase, qué es un constructor, cómo podemos adjuntarle métodos y otro tipo de propiedades.

//     SINTAXIS
// // Por convencion, siempre que estemos en una clase, la primera letra en Mayuscula.


// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.amigos = [];
//     }
//     agregarAmigo(nombreAmigo) {
//         this.amigos.push(nombreAmigo)
//     }
//     pararse() {
//         this.sentado = false;
//     }
//     sentarse() {
//         this.sentado = true
//     }
// }

// const persona1 = new Persona("Jesus", 25);

// console.log(persona1);


// persona1.agregarAmigo("Alex");
// persona1.agregarAmigo("Alejandro")

// console.log(persona1);



// persona1.pararse("sentado");
// console.log(persona1);

// persona1.sentarse("sentado");
// console.log(persona1);

///////////////////////////////////////////////////////////////////////////

//              CONSTRUCTOR:
//    El constructor es un método especial dentro de una clase que se ejecuta automáticamente al crear un objeto de esa clase. Este método establece las propiedades iniciales del objeto basándose en los argumentos que recibe. 

// class SuperHeroe {
//     constructor(nombre, identidad, superpoder) {
//         this.nombre = nombre;
//         this.identidad = identidad;
//         this.superpoder = superpoder;
//     }
// }



//             PROPIEDADES:
//  Las propiedades son variables que se encuentran dentro de una clase y que contienen información acerca del estado de un objeto. En el ejemplo, nombre, identidad, y superpoder son propiedades del objeto SuperHeroe.

// class SuperHeroe {
//     constructor(nombre, identidad, superpoder) {
//         this.nombre = nombre;
//         this.identidad = identidad;
//         this.superpoder = superpoder;
//     }
// }

// let superman = SuperHeroe("Superman", "Clark Ken", ["volar", "fuerza"]);

// Es importante tener en cuenta que aquellos valores que le queramos dar ala instancia de una clase deben ser recibidos como parámetros mediante el constructor.


//              MÉTODOS:
//    Los métodos son funciones definidas dentro de una clase que describen las acciones o comportamientos de los objetos creados a partir de esa clase. En este ejemplo podemos ver que el método volar se define por fuera del constructor.




//             INSTANCIA
//   Una instancia es un objeto específico creado a partir de una clase. Cuando se utiliza el constructor de una clase para crear un nuevo objeto, ese objeto es una instancia de esa clase. En este ejemplo podemos ver cómo se crea la instancia "superman".
// Es importante tener en cuenta que, para crear una instancia, en necesario utilizar la palabra reservada new y pasar los argumentos necesarios a la clase. Caso contrario, estos tendrán el valor undefined.






// class Persona{
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar(){
//         console.log(`Hola soy ${this.nombre}`)
//     }

//     deciredad(){
//         console.log(`Tengo, ${this.edad} años`);
//     }
// }

// const persona1 = new Persona("Jesus", 25);

// persona1.saludar();
// persona1.deciredad();


class Auto{
    constructor(marca, modelo, color, puertas){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.puertas = puertas;
    }

    presentar(){
        console.log(`Hola este es un auto marca ${this.marca} ${this.modelo} bellisimo de color ${this.color} y ${this.puertas}`)
    }
}

const auto1 = new Auto("Mercedes Benz", "A200", "azul marino", "5 puertas");

// auto1.presentar();
console.log(auto1.presentar());

