import './styles.css';

import { Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));


// es lo mismo hacer esto todoList.todos.forEach(crearTodoHtml);

//const tarea = new Todo('Aprender JavaScript!!');

//todoList.nuevoTodo(tarea);

//console.log(todoList);

//crearTodoHtml(tarea); 