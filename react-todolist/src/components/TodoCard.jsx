/* eslint-disable react/prop-types */

export default function TodoCard(props) {
  const {todo,
          index,
          handleDeleteTodo,
          handleEditTodo,
          toggleComplete
        } = props
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center border-0 border-bottom mb-2">
      <div className="d-flex align-items-center">
        <input
          className="form-check-input me-2 my-text"
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleComplete(index)}
        />
        {todo.name}
      </div>
      <div className="d-flex flex-row justify-content-end mb-1">
        <button data-mdb-tooltip-init
          onClick={()=> handleEditTodo(index)}>
          <i className="fas fa-pen-to-square me-1 blue"></i>
        </button>
        <button data-mdb-tooltip-init
          onClick={()=> handleDeleteTodo(index)}>
          <i className="fas fa-trash-alt red"></i>
        </button>
      </div>
    </li>
  )
}
