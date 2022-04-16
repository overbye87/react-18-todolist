import React from 'react'
import ToDoItem from './ToDoItem'
import { ITodo } from '../types'

interface IProps {
  todos: ITodo[],
}

const ToDoList: React.FC<IProps> = (props) => {
  if (!props.todos.length) return <span>nothing to show</span>
  return (
    <ul>
      {props.todos.map((todo) => 
        <ToDoItem 
          key={todo.id}
          todo={todo}
        />)}
    </ul>
  )
}

export default ToDoList