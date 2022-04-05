// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoListsItems, deleteTodo} = props
  const {title, id} = todoListsItems

  const OnDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-items">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={OnDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
