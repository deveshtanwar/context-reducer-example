import { createContext, useReducer } from "react";

// define reducers

const initialState = {
    todos: []
}
const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != action.payload)
            }

        case 'DONE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id == action.payload ? { ...todo, completed: !todo.completed } : todo)
            }
        default:
            return state;
    }
}

//create context
export const TodoContext = createContext();

// provider component
export const TodoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(TodoReducer, initialState);
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}