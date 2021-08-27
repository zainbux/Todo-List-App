import React from 'react';
//import components
import Todo from "./Todo";

const TodoList = ({todos,setTodos,filteredTodos}) =>{


    return (
        <div className="todo-container">
            <ul className="todo-list">
            {filteredTodos.map(todo => (
                <Todo 
                key={todo.id}
                text={todo.text}
                setTodos={setTodos}
                todo={todo}
                todos={todos}/>
            ))}
            </ul>
        </div>
    );
};

export default TodoList