import React from 'react';
import { useSelector } from 'react-redux';
import {AiOutlineEdit} from 'react-icons/ai';
import {AiOutlineDelete} from 'react-icons/ai';


function Todos() {
    const todos = useSelector((state) => state.operationsReducer);
    
    return todos.map((todo) => (
        <div key={todo.id} className='todo-box'>
            <div className='content'>
                <p style={todo.completed === true? {textDecoration:'line-through'}:{textDecoration:''}}></p>
            </div>
            <div className='actions-box'>
                <span ><AiOutlineEdit/></span>
                <span ><AiOutlineDelete/></span>
            </div>
        </div>
    ))
}

export default Todos