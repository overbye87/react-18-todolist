import React, { useRef, useState } from 'react'
import { useTypedDispatch } from '../store/hooks'
import { editTodo, removeTodo, toggleTodo } from '../store/todosSlice'
import { ITodo } from '../types'

interface IProps {
  todo: ITodo,
}

const ToDoItem: React.FC<IProps> = (props) => {
  const inputElement = useRef(null);

  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props.todo.title);
  const [keyCode, setKeyCode] = useState('')

  const dispatch = useTypedDispatch()

  const handleSetChecked = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(toggleTodo(props.todo.id))
  }

  const handleDeleteItem = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(removeTodo(props.todo.id))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log('blur');
    if (keyCode === 'Escape') {
      console.log(keyCode);
      dispatch(editTodo({ id: props.todo.id, title: props.todo.title }))
      setKeyCode('')
    } else {
    dispatch(editTodo({ id: props.todo.id, title: e.currentTarget.value }))
  
    setIsEdit(false)}
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {

      }
    if (e.code === 'Escape') {
    setKeyCode(e.code)
    setIsEdit(false)
    }
  }

  const handleDivClick = () => {
    setIsEdit(true)
  }

  const handleChangeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <li className='list-item'>
      <input
        className="checkbox"
        type="checkbox"
        checked={props.todo.isDone}
        onChange={handleSetChecked}
      />
      <div>
        {isEdit
          ? <input
              ref={inputElement}
              value={inputValue}
              onChange={handleChangeInputValue}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className="edit-input"
              type="text"
          ></input>
          : <div
              onClick={handleDivClick}
              className="edit">
              {props.todo.title}
          </div>
        }
      </div>
      <button
        onClick={handleDeleteItem}>
        {'del'}
      </button>
    </li>
  )
}

export default ToDoItem