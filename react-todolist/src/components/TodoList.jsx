/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";


export default function TodoList(props) {
  
  let { todoData } = props
  
  return (
    <div className="tab-content" id="todosTabContent">
        <div className="tab-pane fade show active" id="allTodos" role="tabpanl">
            <ul className="list-group mb-0">
                {todoData.map((todo, todoIndex) => {
                  return (<TodoCard {...props} index={todoIndex} todo={todo} key={todoIndex}>
                    <p>{todo.name}</p>
                  </TodoCard>
                  )
                })}  
            </ul>
        </div>

        <div className="tab-pane fade show" id="completedTodos" role="tabpanl">
            <ul className="list-group mb-0" id="completeT">
                {todoData.map((todo, todoIndex) => {
                  if (todo.completed){
                    return (<TodoCard {...props} index={todoIndex} todo={todo} key={todoIndex}>
                      <p>{todo.name}</p>
                    </TodoCard>
                    )}
                })}  
            </ul>
        </div>

        <div className="tab-pane fade show" id="activeTodos" role="tabpanl">
            <ul className="list-group mb-0" id="activeT">
                {todoData.map((todo, todoIndex) => {
                  if (!todo.completed) {
                    return (<TodoCard {...props} index={todoIndex} todo={todo} key={todoIndex}>
                      <p>{todo.name}</p>
                    </TodoCard>
                  )}
                })}  
            </ul>
        </div>
    </div> 
  )
}
