export class Todo {

    constructor( tarea ) {

        let random = Math.random() * 100;
        random = Math.round( random );
        
        this.tarea      = tarea;
        this.id         = (new Date().getTime() * random).toString(16).toUpperCase();
        this.completado = false;
        this.creado     = new Date();
    }
}