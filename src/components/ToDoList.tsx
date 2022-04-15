import React from 'react'
import ToDoItem from './ToDoItem'
import { ITodo } from './types'

interface IProps {
  todos: ITodo[],
  onDeleteItem: (id: number) => void,
  onSetChecked: (id: number) => void,
}

const ToDoList: React.FC<IProps> = (props) => {
  if (!props.todos.length) return <span>nothing to show</span>
  return (
    <ul>
      {props.todos.map((todo) => 
        <ToDoItem 
          key={todo.id}
          todo={todo}
          onDeleteItem={props.onDeleteItem}
          onSetChecked={props.onSetChecked}
        />)}
    </ul>
  )
}

export default ToDoList