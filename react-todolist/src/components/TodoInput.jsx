/* eslint-disable react/prop-types */

export default function TodoInput(props) {
  const {handleAddTodo, todoValue, setTodoValue} = props
  function handleSubmit(e) {
    e.preventDefault();
    if(!todoValue){
      return (window.alert("Enter todo"))
    }
    handleAddTodo(todoValue);
    setTodoValue("")
  }

  return (
    
    <form className="d-flex flex-row px-2 justify-content-center align-items-center mb-4"
      onSubmit={handleSubmit}>
        <input type="text"
        className="form-control form-control-lg my-text"
        id="newTodo"
        placeholder="Add new todo..."
        value={todoValue}
        onChange={(e)=> {setTodoValue(e.target.value)}}
        />
        <div className="ms-2">
            <button type="submit"
            data-mdb-button-init data-mdb-ripple-init
            className="btn btn-large btn-outline-primary my-text"
            autoComplete="off"
            >Add</button>
        </div>
    </form>
  )
}
