
export interface User {
    username: string;
    token: string;
    photoUrl: string;
}


// -----------------------EJEMPLO DE USO DE TYPESCRIPT------------------------------------------------------------
// en type script se puede asignar diferentes tipos a una variable con la madre de "o (|)"
// let data: number | string = "42";

// data = 10;

// interface Car {
//     color: string;
//     model: string;
//     topSpeed?: number;
// }

// con el semicolo se asignan los tipos, aqui creamos una interfaz que sera la base del tip "Car"
// se la asignamos a los carros para que todas sus propiedades sigan el tipo especificado
// const car1: Car= {
//     color: 'blue',
//     model: "BMW,"
// }

// const car2: Car = {
//     color: "red",
//     model: 'mercedez',
//     topSpeed: 100 
// }


// const multiply = (x: number,y: number) => {
//     return x*y;
// }