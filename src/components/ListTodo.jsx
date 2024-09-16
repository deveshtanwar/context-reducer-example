import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';

const ListTodo = () => {

    const { state, dispatch } = useContext(TodoContext);

    const listStyle = {
        width: '300px',
        margin: 'auto',
        padding: '0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    const checkHandler = (id) => {
        dispatch({ type: 'DONE_TODO', payload: id })
    }

    const deleteHandler = (id) => {
        dispatch({ type: 'DELETE_TODO', payload: id })
    }


    return (
        <div>
            <ol style={{ padding: 0 }}>
                {state?.todos?.map?.((todo) =>
                    <div key={todo?.id} style={listStyle}>
                        <input type='checkbox' checked={todo?.completed ?? false} style={{ width: '10%', marginRight: '20px' }} onChange={() => { checkHandler(todo?.id) }} />
                        <li style={{ width: '70%' }} >{todo?.desc ?? ''}</li>
                        <button style={{ width: '13%', color: "red" }} onClick={() => { deleteHandler(todo?.id) }}>X</button>
                    </div>
                )}
            </ol>
        </div>
    )
}

export default ListTodo;