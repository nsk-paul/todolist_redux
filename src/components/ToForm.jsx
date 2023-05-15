import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoapp/actions';

function ToForm() {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState('');

  const handleChange = e => {
    setTodoValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoItem = {
      id: time,
      todo: todoValue,
      completed: false
    }
    setTodoValue('');
    dispatch(addTodo(todoItem))
  }


  return (

    <form className='form-group custom-form' onSubmit={handleSubmit}>
      <label>Add todo item</label>
      <div className='input-and-btn'>
        <input type="text" className='form-control' required value={todoValue} onChange={handleChange} />
        <button type='submit' className='btn btn-secondary btn-md'>Add</button>
      </div>
    </form>

  )
}

export default ToForm