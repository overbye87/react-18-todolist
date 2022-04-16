import React, { useState } from 'react'
import AddForm from './AddForm'
import { options } from './constants';
import Filter from './Filter';
import ToDoList from './ToDoList';
import { ITodo, ITodos } from './types';



const ToDo = () => {
  const [todos, setTodos] = useState<ITodos>([]);
  const [filter, setFilter] = useState(options[0].value);
  
  const handleSetFilter = (value: string) => {
    setFilter(value);
  }

  const filterTodos = (todos: ITodos, filter: string) => {
    switch (filter) {
      case options[1].value:
        return todos.filter((todo) => todo.isDone === true)
      case options[2].value:
        return todos.filter((todo) => todo.isDone === false)
      default:
        return todos
    } 
  }

  const handlAddTodo = (todo: ITodo) => {
    console.log(todo);
    setTodos((prev) => [...prev, todo])
  }

  const handlDeleteItem = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleSetChecked = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone } : todo))
  }

  return (
    <div className="container">
      <AddForm
        onAddTodo={handlAddTodo}
       />
      <Filter
        onSetFilter={handleSetFilter}
      />
      <ToDoList
        todos={filterTodos(todos, filter)}
        onDeleteItem={handlDeleteItem}
        onSetChecked={handleSetChecked}
      />
    </div>
  )
}

export default ToDo