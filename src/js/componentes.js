import { Todo } from '../classes';
import { todoList } from '../index';

// referencias HTML
const divTodoList = document.querySelector('.todo-list');
const txtTodo     = document.querySelector('.new-todo');
const btnBorrar   = document.querySelector('.clear-completed');
const ulFilter    = document.querySelector('.filters');
const aFilters    = document.querySelectorAll('.filtro');

export const crearTodoHtml = ( todo ) => {

    const todoHtml = `
    <li class=" ${ (todo.completado) ? 'completed' : '' } " data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label> ${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const divTodo = document.createElement('div');
    divTodo.innerHTML = todoHtml;

    divTodoList.append( divTodo.firstElementChild );

    return divTodo.firstElementChild;
}

// Eventos
txtTodo.addEventListener('keyup', ( event ) => {

    if ( event.keyCode === 13 && txtTodo.value.length > 0 ) {

        const todo = new Todo( txtTodo.value );
        
        todoList.newTodo( todo );
        crearTodoHtml( todo );

        txtTodo.value = '';
    }

});

divTodoList.addEventListener('click', ( event ) => {

    const elementName = event.target.localName;
    const todoElement = event.target.parentElement.parentElement;
    const todoId      = todoElement.getAttribute('data-id');
    
    if ( elementName.includes('input') ) {

        todoList.toggleCompletado ( todoId );
        todoElement.classList.toggle('completed');        
    
    } else if ( elementName.includes('button')) {

        todoList.deleteTodo( todoId );
        divTodoList.removeChild( todoElement );
    }

});

btnBorrar.addEventListener('click', () => {

    todoList.deleteCompletados();

    for( let i = divTodoList.children.length -1; i >= 0; i-- ) {

        const elemento = divTodoList.children[i];
        
        if ( elemento.classList.contains('completed') ) {

            divTodoList.removeChild( elemento );
        }
    }
});

ulFilter.addEventListener('click', ( event ) => {

    let liText = event.target.text;

    if ( !!liText ) {

        aFilters.forEach( element => {
            element.classList.remove('selected');
        });
        event.target.classList.add('selected');
        
        for ( let element of divTodoList.children ) {

            element.classList.remove('hidden');

            switch( liText ) {

                case 'Pendientes':

                    if( element.classList.contains('completed') ) {
                        element.classList.add('hidden');
                    }
                    break;
                
                case 'Completados':

                    if ( !element.classList.contains('completed') ) {
                        element.classList.add('hidden');
                    }
                    break;
            } 
        }
    }

});