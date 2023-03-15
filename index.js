// Ejercicio 10

// Tienes el siguiente objeto:
const megaTeacher = {
	name: "Pablo",
	lastname: "Quintana",
	age: 27,
	vegan: false,
	address: {
		street: "",
		number: 73,
		floor: 4
	},
	hobbies: ["basketball", "coding", "music", "reading"],
    books: ["Lord of the Flies", "Books of Blood"],
    films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts" ],
	height: 1.98,
    introduceMySelf: function() {
        return `Hola, me llamo ${this.name} ${this.lastname}, tengo ${this.age} años y vivo en la calle ${this.address.street}, ${this.address.number}. Mis hobbies son: ${this.hobbies.join(', ')}`; // Creando el método
    },
    modifyInfo: function(propiedad, valor) {

        if(propiedad === 'name' || propiedad === 'lastname' || propiedad === 'age' || propiedad === 'vegan') {
            console.log(`Modificando ${propiedad}`)
            return megaTeacher[propiedad] = valor;
        } else {
            return console.log(`${propiedad} no se puede modificar. Solo se pueden modificar los datos personales.`);
        }

    },
    modifyAddress: function(newStreet, newNumber, newFloor, addSecond) {

        // Solución ejercicio 5:
        // return `La nueva dirección es ${megaTeacher.address.street = calle}, ${megaTeacher.address.number = numero}. Piso ${megaTeacher.address.floor = piso}`;

        // Ejercicio 6:

        if(addSecond === true) {
            const address2 = {
                street: newStreet,
                number: newNumber,
                floor: newFloor
            }
            if(this.address2) {
                return this.address2 = address2;
            } else {
                return this.address2 = address2;
            }
        } else {
            this.address.street = newStreet;
            this.address.number = newNumber;
            this.address.floor = newFloor;
            return `La dirección es ${newStreet}, ${newNumber}. Piso ${newFloor}`;
        }
    },
    verifyBook: function(book) {

        const arrBook = megaTeacher.books;

        // Ejercicio 7:
        // arrBook.includes(book) ? console.log(`El libro '${book}' está en la lista de llibros.`) : console.log(`El libro '${book}' no existe en la lista.`);

        // Ejercicio 8:
        if(arrBook.includes(book)) {
            return console.log('Libro existente en la lista: ', book);
        } else {
            arrBook.push(book);
            return console.log(`Libro añadido: ${book}. La lista contiene: ${arrBook.join(', ')}`)
        }
    }
}


// 1-  Escribe una función que acepte un hobbie y lo añada a la lista de hobbies de nuestro megaTeacher.
function addHobbie(hobbie) {
    /** Primera parte del ejercicio */
    // const hobbiesTeacher = megaTeacher.hobbies;

    // (hobbiesTeacher.includes(hobbie)) ? console.log('Este hobbie ya está en la lista de Hobbies') : console.log('Añadiendo Hobbie'), hobbiesTeacher.push(hobbie);
    /*--------------------------------- ---------------------------------*/


    // Ejercicio 3, modificación:
    const hobbiesTeacher = megaTeacher.hobbies;

    if(hobbiesTeacher.length < 8) {
        for(let i = 0; i < hobbie.length; i++) {
            if(!hobbiesTeacher.includes(hobbie[i])) {
                hobbiesTeacher.push(hobbie[i]);
                console.log(`${hobbie[i]} no está en la lista de Hobbies. Añadiendo a => [${hobbiesTeacher.join(', ')}]`)
            } else {
                console.log(`${hobbie[i]} ya existe en la lista.`);
            }
            if(hobbiesTeacher.length >= 8) {
                console.log(`No se pueden añadir más de 8 hobbies.`)
                return hobbiesTeacher.slice(0, 8);
            }
        }
    }
}
// Pruebas ejercicio 1
// addHobbie('basketball'); // Prueba hobbie existente
// addHobbie('hockey'); // Pruebas hobbies no existentes
// addHobbie('magic');


console.log(megaTeacher.hobbies);

console.log('==============================================');

// 2- Escribe un método introduceMySelf dentro del objeto que devuelva el siguiente string: "Hola, me llamo <name> <lastname>, tengo [age] años y vivo en la calle <street>, <number>. Mis hobbies son: <hobbie>, <hobbie>, <hobbie> (etc.)".

console.log(megaTeacher.introduceMySelf()); // Llamando al método del objeto

console.log('==============================================');


// 3- Modifica la primera función: debe aceptar un array de nuevos hobbies, y se lo añadirá a los hobbies del objeto hasta que éstos últimos sean 8, no más. Ejemplo:
// addHobbies(["dancing", "movies", "traveling", "eating", "exercise", "museums"])
// console.log(megaTeacher.hobbies)
// //["basketball", "coding", "music", "reading", "dancing", "movies", "traveling", "eating"]
// (al llegar a 8, deja de introducir elementos)

// Prueba ejercicio 3
addHobbie(['basketball', 'magic', 'coding', 'music', 'sport', 'bike', 'trick', 'poker', 'fly']);

console.log(megaTeacher.hobbies);

console.log('==============================================');


// 4- Escribe un método que te permita modificar los datos personales.

megaTeacher.modifyInfo('name', 'Robert'); // prueba método para modificar datos personales
megaTeacher.modifyInfo('age', 35) // prueba método para modificar datos personales
megaTeacher.modifyInfo('height', 2)

console.log(megaTeacher.introduceMySelf()); // Propiedades personales modificadas


console.log('==============================================');


// 5- Escribe un método que te permita modificar la dirección.

// Probando método para modificar la dirección
console.log(megaTeacher.modifyAddress('Santa Teresa', 19, 0, false));

console.log(megaTeacher.introduceMySelf());

console.log('==============================================');


// 6- Modifica el metodo anterior para poder añadir una segunda dirección.

console.log(megaTeacher.modifyAddress('Bilbao', 18, 8, true));
console.log(megaTeacher);

console.log(megaTeacher.modifyAddress('SantaCruz', 32, 2, true));
console.log(megaTeacher);

console.log('==============================================');


// 7- Escribe un método que en el array de libros, verifique si un libro existe en el array.

megaTeacher.verifyBook('El alquimista'); // Prueba verifyBook
megaTeacher.verifyBook('Lord of the Flies');

console.log('==============================================');

// 8- Si existe, imprima el libro en mayusculas. Si no existe agregar a la lista de libros.
megaTeacher.verifyBook('The perfume');
console.log(megaTeacher.books); // Prueba de libros añadidos con verifyBook

console.log('==============================================');

// 9- Escribe una función que te permita añadir películas. Y si no tiene parámetro de entrada te retorne la película de en medio.
function addFilm(film) {
    const arrFilms = megaTeacher.films;

    if(film) {
        arrFilms.push(film);
        return `Película añadida: ${film}. La lista contiene: ${arrFilms.join(', ')}`
    } else {
        if(arrFilms.length % 2 === 0) {
            return 'Hay un número de películas pares. No hay medio exacto'
        } else {
            return megaTeacher.films[(megaTeacher.films.length - 1) / 2];
        }
    }
}


console.log(addFilm('Big Fish'));

console.log(megaTeacher.films)

console.log(addFilm());

console.log(addFilm('The Exorcist'));

console.log(addFilm()); // Peli intermedia



console.log(megaTeacher);