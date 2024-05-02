import React, { useContext, useState } from 'react'
import NoteContext from '../contexts/notes/noteContext'
import './css/AddNote.css'

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote, showAlert } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        //prevent default
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
        showAlert("Note Added Successfully", "success")
    }
    const handleOnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h1>Add a note</h1>

            <form>
                <div className='d-flex flex-column'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label w-100 d-flex justify-content-center">Title</label>
                        <input onChange={handleOnChange} type="text" className="form-control w-50 mx-auto" value={note.title} id="title" name="title" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label w-100 d-flex justify-content-center">Description</label>
                        <input onChange={handleOnChange} type="text" className="form-control w-50 mx-auto" value={note.description} id="description" name="description" />
                    </div>
                </div>
                <button type="submit" onClick={handleClick} style={{"fontSize":"2rem"}} className="btn"><i class="fa-solid fa-circle-plus"></i></button>
            </form>
        </>
    )
}

export default AddNote