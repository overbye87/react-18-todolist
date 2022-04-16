import React, { useState } from 'react'
import { useTypedDispatch } from '../store/hooks'
import { addTodo } from '../store/todosSlice'

interface IProps { }
const AddForm: React.FC<IProps> = (props) => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useTypedDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setInputValue('')
      const todo = {
        id: Date.now(),
        title: inputValue,
        isDone: false
      }
      dispatch(addTodo(todo))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {'ToDo'}
        <input
          type="text"
          value={inputValue}
          onChange={ (e) => {setInputValue(e.currentTarget.value)}}
          />
        </label>
        <input type="submit" value="Add ToDo"/>
    </form>
  )
}

export default AddForm
