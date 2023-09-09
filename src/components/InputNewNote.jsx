import React, { useState } from 'react'

const InputNewNote = ({ addNewNote }) => {
    const [newNote, setNewNote] = useState("");
    

    return (
        <div className='input-new-note'>
            <input 
                type='text'
                placeholder='Please input a note'
                value={ newNote }
                onKeyDown={(e) => e.key === "Enter" && addNewNote(newNote)}
                onChange={(e) => setNewNote(e.target.value)}
            />
            <button onClick={() => addNewNote(newNote)}>Add</button>
        </div>
    )
}

export default InputNewNote
