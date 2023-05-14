import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../redux/todoapp/actions';

function ToForm({editFormVisibility, editTodo, cancelUpdate}) {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState('');

  const [editValue, setEditValue] = useState('');

  useEffect(()=>{
    setEditValue(editTodo.todo)
  },[editTodo])

  const handleChange = e => {
    setTodoValue(e.target.value);
  }

  const handleEditChange = e => {
    setEditValue(e.target.value);
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


  const handleEditSubmit = (e) => {
    e.preventDefault();
    let editItem = {
      id: editTodo.id,
      todo: editValue, 
      completed: false
    }
    dispatch(updateTodo(editItem))
  }

  return (
    <>
      {editFormVisibility === false ? ( 
        <form className='form-group custom-form' onSubmit={handleSubmit}>
          <label>Add todo item</label>
          <div className='input-and-btn'>
            <input type="text" className='form-control' required value={todoValue} onChange={handleChange} />
            <button type='submit' className='btn btn-secondary btn-md'>Add</button>
          </div>
        </form>
      ) : (
        <form className='form-group custom-form' onSubmit={handleEditSubmit}>
          <label>Edit todo item</label>
          <div className='input-and-btn'>
            <input type="text" className='form-control' required value={editValue||""} onChange={handleEditChange} />
            <button type='submit' className='btn btn-secondary btn-md'>Update</button>
          </div>
          <button type="button" className='btn btn-primary btn-md back-btn' onClick={cancelUpdate}>Back</button>
        </form>
      )}
    
    
    
    </>



   
  )
}

export default ToForm