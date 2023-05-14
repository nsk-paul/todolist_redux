import './App.css';
import ToForm from './components/ToForm';
import Todos from './components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todoapp/actions';
import { useState } from 'react';



function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);

  const [editFormVisibility, seteditFormVisibility] = useState(false);

  const [editTodo, setEditTodo] = useState('');

  const handleEditClick = (todo) => {
    seteditFormVisibility(true);
    setEditTodo(todo);
  }

  const cancelUpdate = () => {
    seteditFormVisibility(false);
  }

  return (
    <div className="wrapper">
      <h1 className='text-center'>To Do List</h1>
      <ToForm editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 0 && (<button className='btn btn-danger btn-md delete-all' onClick={() => dispatch(deleteAll())}>Delete All</button>)}
      
    </div>
  );
}

export default App;
