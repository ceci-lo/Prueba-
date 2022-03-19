//para pasar un objeto a json 
const deportista = {
    nombre:"messi" ,
    champions: 4};

    console.log(JSON.stringify(deportista));

const deportista1 = {"nombre":"messi","champions":4};

console.log(JSON.stringify(deportista1));

// para pasar un json a js 

const deportista2 = '{"nombre":"messi","champions":4}'; //el archivo json se pasa como strign y con el metodo parse se pasa a js como un objeto

console.log(JSON.parse(deportista2));

// PARA TRAER DE UN ARCHIVO O API EL JSON  
fetch('http://127.0.0.1:5500/pasajeros.json').then((response) => response.json()).then((data) => console.log(data));// me muestra toda la informacion que tengo en el archivo json

fetch('http://127.0.0.1:5500/pasajeros.json')
.then((response) => response.json())
.then((pasajeros) => { 
    const nombreDePasajeros = pasajeros.map((pasajero) => pasajero.Nombre);
    console.log(nombreDePasajeros);
});
