//actions is the file include the type and payloads

export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const HANDLE_COMPLETED = 'HANDLE_COMPLETED';

export const addTodo = (payload) => {
    return{
        type: 'ADD_TODO',
        payload
    }
}

export const deleteAll = () => {
    return {
        type: 'DELETE_ALL'

    }
}

export const deleteItem = (payload) => {
    return {
        type: 'DELETE_ITEM',
        payload
    }
}

export const updateTodo = (payload) => {
    return {
        type: 'EDIT_ITEM',
        payload
    }
}

export const handleCompleted = (payload) => {
    return {
        type: 'HANDLE_COMPLETED',
        payload
    }
}