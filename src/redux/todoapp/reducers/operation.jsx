import { ADD_TODO, DELETE_ALL, DELETE_ITEM, EDIT_ITEM, HANDLE_COMPLETED } from "../actions";


const initialState = [ ];
//inside one task, there is id, title, completed 

export const operationsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        
        case DELETE_ALL:
            return []

        case DELETE_ITEM:
            const filterTodos = state.filter((todo) => todo.id !== action.payload);

            return filterTodos;
        
        case EDIT_ITEM:
            let data = action.payload;

            const updatedArray = [];

            state.map((item) => {
                if(item.id === data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed; 
                }
                updatedArray.push(item);
            })

            return updatedArray;

        case HANDLE_COMPLETED: 

            let id = action.payload;

            const updatedCompletdArray = [];

            state.map((item) => {
                if(item.id === id){
                    item.completed = !item.completed
                }
                updatedCompletdArray.push(item);
            })

            return updatedCompletdArray;

        default:
            return state;
    }
}