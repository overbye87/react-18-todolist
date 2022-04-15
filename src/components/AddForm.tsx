import React, { useState } from 'react'
import { ITodo } from './types'
interface IProps {
  onAddTodo: (todo: ITodo) => void
}
const AddForm: React.FC<IProps> = (props) => {
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setInputValue('')
      props.onAddTodo({
        id: Date.now(),
        title: inputValue,
        isDone: false
      })
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
