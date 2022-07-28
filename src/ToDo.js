import { useState } from "react";

function ToDo () {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "")
            return ;
        setToDos((currentArray) => [...currentArray, toDo]);
        setToDo("");
    } 
    const onChange = (event) => {
        setToDo(event.target.value);
    }
    return (
        <div>
            <h1>My To Do List [{toDos.length}]</h1>
            <form onSubmit={onSubmit}>
                <input
                placeholder="write here..."
                value={toDo}
                type="text"
                onChange={onChange}
                ></input>
                <button>ADD</button>
            </form>
            <hr/>
            <ul>
            {
                toDos.map((item, idx) => <li key={idx}>{item}</li>)
            }
            </ul>
        </div>
    );
}

export default ToDo;