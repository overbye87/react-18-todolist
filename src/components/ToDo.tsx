import React, { useState } from 'react'
import AddForm from './AddForm'
import { options } from './constants';
import Filter from './Filter';
import ToDoList from './ToDoList';
import { FilterValue, ITodos } from '../types';
import { useTypedSelector } from '../store/hooks';



const ToDo = () => {
  const [filter, setFilter] = useState(options[0].value);

  const todos = useTypedSelector((store) => store.todos)
  
  const handleSetFilter = (value: FilterValue) => {
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

  return (
    <div className="container">
      <AddForm />
      <Filter
        onSetFilter={handleSetFilter}
      />
      <ToDoList
        todos={filterTodos(todos, filter)}
      />
    </div>
  )
}

export default ToDo