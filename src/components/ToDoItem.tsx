import React from 'react'
import { useTypedDispatch } from '../store/hooks'
import { removeTodo, toggleTodo } from '../store/todosSlice'
import { ITodo } from '../types'

interface IProps {
  todo: ITodo,
}

const ToDoItem: React.FC<IProps> = (props) => {
  const dispatch = useTypedDispatch()

  const handleSetChecked = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(toggleTodo(props.todo.id))
  }

  const handleDeleteItem = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(removeTodo(props.todo.id))
  }

  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        checked={props.todo.isDone}
        onChange={handleSetChecked}
      />
      {' '}
      {props.todo.title}
      {' '}
      <button
        onClick={handleDeleteItem}>
        {'del'}
      </button>
    </li>
  )
}

export default ToDoItem