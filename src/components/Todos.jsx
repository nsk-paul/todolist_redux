import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineEdit} from 'react-icons/ai';
import {AiOutlineDelete} from 'react-icons/ai';
import { deleteItem, handleCompleted } from '../redux/todoapp/actions';
import {useNavigate} from 'react-router-dom';


function Todos({completed}) {

    const todos = useSelector(state => state.operationsReducer);
    const [filteredTasks, setFilteredTasks] = useState(todos);

    useEffect(() => {
        const newFilteredTasks = completed === null?
        todos:
        todos.filter(task => task.completed === completed);
        setFilteredTasks(newFilteredTasks);
    },[todos, completed])

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleEditClick = (id) => {
        navigate(`/edit/${id}`)
    }
    
    return filteredTasks.map((todo) => (
        <div key={todo.id} className='todo-box'>
            <div className='content'>
                <input type="checkbox" checked={todo.completed} onChange={()=>dispatch(handleCompleted(todo.id))} ></input>
                <p style={todo.completed === true? {textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.todo}</p>
            </div>
            <div className='actions-box'>
                <span onClick={()=> handleEditClick(todo.id)} ><AiOutlineEdit/></span>
                <span onClick={()=> dispatch(deleteItem(todo.id))}><AiOutlineDelete/></span>
            </div>
        </div>
    ))
}

export default Todos