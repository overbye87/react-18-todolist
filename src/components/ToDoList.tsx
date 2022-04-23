import React from 'react'
import ToDoItem from './ToDoItem'
import { ITodo } from '../types'

interface IProps {
  todos: ITodo[],
}

const ToDoList: React.FC<IProps> = (props) => {
  if (!props.todos.length) return <ul className="todo-list"><li className="list-item">Nothing to show...</li></ul>
  return (
    <ul className="todo-list">
      {props.todos.map((todo) => 
        <ToDoItem 
          key={todo.id}
          todo={todo}
        />)}
    </ul>
  )
}

export default ToDoList