import { Todo } from './index';

export class TodoList {

    constructor() {
        
        this.loadLocalStorage();
    }

    newTodo ( todo ) {
        this.todos.push( todo );  
        this.saveLocalStorage();      
    }

    deleteTodo( id ) {

        this.todos = this.todos.filter( ( todo ) => {
            
            return todo.id != id;
        });
        this.saveLocalStorage();
    }

    toggleCompletado( id ) {        

        for ( const todo of this.todos ) {

            if( todo.id === id ) {
                
                todo.completado = !todo.completado;
                break;
            }
        }
        this.saveLocalStorage();
    }

    deleteCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado );
        
        this.saveLocalStorage();
    }

    saveLocalStorage() {

        localStorage.setItem('TODOs', JSON.stringify( this.todos ) );
    }

    loadLocalStorage() {
       
        this.todos = ( localStorage.getItem('TODOs') ) 
            ? JSON.parse ( localStorage.getItem('TODOs') ) 
            : [];
        
        this.todos = this.todos.map ( Todo.fromJson );       
    }
}