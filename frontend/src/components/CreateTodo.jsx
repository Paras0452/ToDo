import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div>
            <input type="text" placeholder="Title" onChange={function (e) {
                const value = e.target.value;
                setTitle(e.target.value);
            }} /> <br></br>
            <input type="text" placeholder="Description" onChange={function (e) {
                const value = e.target.value
                setDescription(e.target.value)
            }} /> <br />

            <button onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        // completed : false
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(async function (res) {
                        const json = await res.json();
                        alert("ToDo added");
                    })
            }}>Add a ToDo</button>
        </div>
    )
}

// module.exports = {
//     CreateTodo : CreateTodo
// } Another way