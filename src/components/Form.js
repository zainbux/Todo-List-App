import React from 'react';


const Form = ({setInputText, todos, setTodos, inputText, setStatus }) => {

  // javascript functions
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value)
  };
  
  //submit todohandler
  const submitTodoHandler = (e) =>{
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText(" ");
  };
  
  //status handler
  const statusHandler = (e) =>{
    setStatus(e.target.value)
  }
  //-------------------------------Form-----------------------------------
    return( 
        <form>
      <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
      <button onClick ={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}
export default Form;