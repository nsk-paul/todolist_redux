import React from 'react'
import '../App.css';
import ToForm from '../components/ToForm';
import Todos from '../components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from '../redux/todoapp/actions';



function HomePage() {
    const dispatch = useDispatch();
  
    const todos = useSelector((state) => state.operationsReducer);
  

    return (
      <div className="wrapper">
        <h1 className='text-center'>To Do List</h1>
        <ToForm/>
        <Todos completed={null}/>
        {todos.length > 0 && (<button className='btn btn-danger btn-md delete-all' onClick={() => dispatch(deleteAll())}>Delete All</button>)}
        
      </div>
    );
  }
  
  export default HomePage;