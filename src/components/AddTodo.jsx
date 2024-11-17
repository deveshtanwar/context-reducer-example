import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {

    const { dispatch } = useContext(TodoContext);
    const [input, setInput] = useState('');

    const addHandler = (e) => {
        e.preventDefault();
        dispatch(
            {
                type: "ADD_TODO",
                payload: {
                    id: Date.now(),
                    desc: input,
                    completed: false
                }
            }
        )
        setInput('');
    }
    return (
        <div style={{ width: "300px", margin: "20px auto" }}>
            <form style={{ display: "flex", justifyContent: "space-between" }}>
                <input type='text' placeholder='Enter todo...' style={{ width: "73%" }} value={input} onChange={(e) => { setInput(e.target.value) }} />
                <button style={{ width: "23%", color: 'green' }} onClick={addHandler}>Add</button>
            </form>
        </div>
    )
}

export default AddTodo;