import React from 'react'
import { ITodo } from './types'

interface IProps {
  todo: ITodo,
  onDeleteItem: (id: number) => void,
  onSetChecked: (id: number) => void,
}

const ToDoItem: React.FC<IProps> = (props) => {
  const handleSetChecked = (e: React.FormEvent<HTMLInputElement>) => {
    props.onSetChecked(props.todo.id)
  }

  const handleDeleteItem = (e: React.MouseEvent<HTMLElement>) => {
    props.onDeleteItem(props.todo.id)
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