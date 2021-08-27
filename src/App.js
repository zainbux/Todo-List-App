import React, {useState, useEffect} from "react";
import './App.css';
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  //useStates
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once the app starts
  useEffect(()=>{
    getLocalTodos();
  }, []);

  //useEffect
  useEffect(( ) => {
    filterhandler();
    saveLocalTodos();
  }, [todos,status]);

  //functions and events
  const filterhandler =() =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
          setFilteredTodos(todos);
          break;
    }
  };

  //Save local todos
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }; 

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1> Todo List </h1> 
      </header>
      <Form 
        inputText={inputText}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        />
      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}

      />
    </div>
  );
}

export default App;
