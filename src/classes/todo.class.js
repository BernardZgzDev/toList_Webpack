export class Todo {

    static fromJson ( { id, tarea, completado, creado } ) {

        const tempObj = new Todo( tarea );

        tempObj.id         = id;
        tempObj.completado = completado;
        tempObj.creado     = creado;

        return tempObj;
    }

    constructor( tarea ) {

        let random = Math.random() * 100;
        random = Math.round( random );
        
        this.tarea      = tarea;
        this.id         = (new Date().getTime() * random).toString(16).toUpperCase().trim();
        this.completado = false;
        this.creado     = new Date();
    }
}