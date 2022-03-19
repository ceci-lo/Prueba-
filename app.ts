let mesagge : string = "Hello World";
console.log(mesagge);

function DecoradorPersona(data : string){
    return function <T extends {new (...args: any[]): {}}> (constructor: T){

        return class extends constructor{

            array = data.split(",");
            Nombre = this.array[0];
            Apellido = this.array[1];
        }
    }
}


