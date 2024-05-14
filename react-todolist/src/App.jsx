/* eslint-disable react/prop-types */

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";



function App() {
  const [todoData, setTodoData] = useState ([
    
  ])
  const [todoValue, setTodoValue] = useState()
  
  function count(id='activeT'){
    let count=0
    let jam = 0

    todoData.forEach((todo)=>{
      if(!(todo.completed)){
        count += 1
      }else{
        jam += 1
      }
    })
    if(id==="activeT"){
      return count
    }else{
      return jam
    }
  }

  function handleAddTodo(newTodo) {
    const newTodoData = [...todoData, { name: newTodo, completed: false }]
    saveLocally(newTodoData)
    setTodoData(newTodoData)

  }
  function handleEditTodo(index) {
    const editTask= todoData[index]
    console.log(editTask)
    handleDeleteTodo(index)
    setTodoValue(editTask.name)
    }
  function handleDeleteTodo (index) {
    const newTodoData = todoData.filter((todo, todoIndex)=> {
      return todoIndex !== index
    })
    saveLocally(newTodoData)
    setTodoData(newTodoData)
  }

  function toggleComplete(idx){
    const updatedTodo = todoData.map((todo, index) =>{
      if (idx === index) {
        console.log(todo)
        return {...todo, completed: !todo.completed}
      }
      return todo;
    })
    saveLocally(updatedTodo)
    setTodoData(updatedTodo)
  }

  function saveLocally(todoList) {
    localStorage.setItem("todoData", JSON.stringify({ todoData: todoList }))
  }
  
  useEffect(()=> {
    if(!localStorage){
      return(console.log("No local storage"))
    }
    let localTodos = localStorage.getItem("todoData")
    if (!localTodos) {
      return(console.log("No local todos"))
    }
    localTodos = JSON.parse(localTodos).todoData
    setTodoData(localTodos)
  }, [])
  return (
    <>
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-8">

            <div className="card">
              <h2 className="my-4 text-center p-3 fw-bold h1 my-text">My Todos</h2>
              <div className="card-body p-5">

    <TodoInput 
      handleAddTodo={handleAddTodo}
      setTodoValue={setTodoValue}
      todoValue={todoValue} />

    <ul className="nav nav-tabs mb-4 justify-content-around" id="myTodos" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active my-text" id="all-tab" data-bs-toggle="tab" data-bs-target="#allTodos">All
          <span className="badge ms-2 text-bg-secondary">{todoData.length}</span></button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link my-text" id="active-tab" data-bs-toggle="tab" data-bs-target="#activeTodos"role="tab">Active
          <span className="badge ms-2 text-bg-secondary">{count()}</span></button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link my-text" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completedTodos"role="tab">Completed
          <span className="badge ms-2 text-bg-secondary">{count("completeT")}</span></button>
        </li>
    </ul>
    
    
    <TodoList
      handleDeleteTodo={handleDeleteTodo}
      handleEditTodo={handleEditTodo}
      todoData={todoData}
      setTodoValue={setTodoValue}
      todoValue={todoValue}
      toggleComplete={toggleComplete}
      />
    
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </>
  );
}

export default App;