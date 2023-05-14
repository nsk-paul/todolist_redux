import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineEdit} from 'react-icons/ai';
import {AiOutlineDelete} from 'react-icons/ai';
import { deleteItem, handleCompleted } from '../redux/todoapp/actions';


function Todos({handleEditClick, editFormVisibility}) {
    const todos = useSelector((state) => state.operationsReducer);

    const dispatch = useDispatch();
    
    return todos.map((todo) => (
        <div key={todo.id} className='todo-box'>
            <div className='content'>
                {editFormVisibility === false && (<input type="checkbox" checked={todo.completed} onChange={()=>dispatch(handleCompleted(todo.id))} ></input>)}
                <p style={todo.completed === true? {textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.todo}</p>
            </div>
            <div className='actions-box'>
                {editFormVisibility === false && (<>
                <span onClick={() => handleEditClick(todo)} ><AiOutlineEdit/></span>
                <span onClick={()=> dispatch(deleteItem(todo.id))}><AiOutlineDelete/></span>
                </>)}
            </div>
        </div>
    ))
}

export default Todos