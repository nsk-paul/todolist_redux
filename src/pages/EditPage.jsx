import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams} from 'react-router-dom';
import { updateTodo } from '../redux/todoapp/actions';

function EditPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  const todo = useSelector((state) => state.operationsReducer.find(todo => todo.id === parseInt(id)));

  const[title, setTitle] = useState(todo? todo.todo: '')
  
  useEffect(()=>{
    if(todo){ 
      setTitle(todo.todo);
    }
  },[todo]);

  const handleChange = e => {
    
    setTitle(e.target.value);
    console.log(title);
  }

  const handleEditSubmit = e => {
    e.preventDefault();
    
    let editItem = {
      id: parseInt(id),
      todo: title, 
      completed: false
    }
    dispatch(updateTodo(editItem));
    setTitle('');
    navigate('/');
  }



  return (


      <form className='form-group custom-form' onSubmit={handleEditSubmit}>
        <h2>Edit Task</h2>
        <div className='input-and-btn'>
          <input type="text" value={title} onChange={handleChange} className='form-control'/>
          <button type="submit" className='btn btn-secondary btn-md'>Save</button>
        </div>
      </form>

  )
}

export default EditPage